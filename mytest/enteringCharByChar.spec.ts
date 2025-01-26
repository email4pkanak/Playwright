import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('char by char with delay',async()=>{

    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page= await browser.newPage();

    await page.goto("https://www.flipkart.com");

    //locator of searchbox using placeholder attribute
    //await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially("macbook");

    //to add delay after each letter entered
    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially("macbook",{delay:500});



    await page.waitForTimeout(3000);

});