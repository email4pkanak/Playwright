import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('dropdown code', async() => {
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page= await browser.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    const dayDropdown = 'select#select-demo'; //saving css locator in a variable
    await page.selectOption(dayDropdown, {value:'Wednesday'});  //selecting by value
    //await page.selectOption(dayDropdown,{label:'Tuesday'});     //selecting by text
    //await page.selectOption(dayDropdown,{index:4});   //selecting by index

    // to print all option, $$ to find all elements
    const allOPtions = await page.$$(dayDropdown + '> option');
    console.log(allOPtions.length);
    for(const e of allOPtions) {
        const text = await e.textContent();
        console.log(text);
    }

    await page.waitForTimeout(3000);

});