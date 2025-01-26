import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

//to declare a global wait time which will be applied to all test
test.use({
    actionTimeout:10000 //for every step in each test 10000ms wait will get applied
});

test('auto wait', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();

    //update the default timeout from 30sec to 40sec for this particular test
    await page.waitForTimeout(40000);

    //to give timeout for specific action
    await page.locator('#name').check({timeout:5000});
});

test('auto wait 2', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();
});
