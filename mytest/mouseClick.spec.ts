import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('dropdown code', async() => {
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page= await browser.newPage();

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    //double click
    await page.getByText('Double-Click Me To See Alert').dblclick();

    //right click
    await page.getByText('right click me').click({button:'right'});

    //shift-click
    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText('Example 1: Menu Element').click({modifiers:["Shift"]});


    await page.waitForTimeout(3000);

    browser.close();

});