//when selectors are chained, the next one is queried relative to the previous one's result
import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit,chromium, firefox} from '@playwright/test'

test('chaining selectors', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    //to open one page in browser
    const page:Page = await browser.newPage();
    //to launch the website on the page
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("Priyanka");
    await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();
    page.close();

});

test('chaining locator', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    //chaining
    await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill("Priyanka"); //by css
    await page.locator('form#Form_getForm').getByRole('button', {name:'Get Your Free Trial'}).click();

    //2nd way of chaining
    //const form =page.locator('form#Form_getForm');
    //const freeTrialButton = await page.getByRole('button', {name:'Get Your Free Trial'});
    //form.fill("priyanka");
    //form.locator(freeTrialButton).click();

});