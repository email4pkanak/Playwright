import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('dropdown code', async() => {
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page= await browser.newPage();

    page.goto("https://www.lambdatest.com/selenium-playground/");
    page.getByText('Solutions').hover();
    page.getByText('Retail').click();
    await page.waitForTimeout(3000);

});