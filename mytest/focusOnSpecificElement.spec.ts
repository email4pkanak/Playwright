import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('file upload code',async()=>{

    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page= await browser.newPage();

    await page.goto("https://www.orangehrm.com/30-day-free-trial");

    const fullName = await page.locator('#Form_getForm_Name');
    fullName.focus();

    await page.waitForTimeout(3000);


});