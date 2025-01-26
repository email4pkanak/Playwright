import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

//below is TC 1 code
test('login test', async()=>{
    //to launch browser. chrome will be launch through chromium
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    //to open one page in browser
    const page:Page = await browser.newPage();
    //to launch the website on the page
    await page.goto("https://naveenautomationlabs.com/opencart/");

    //find all the elements
    const myAccount:Locator = await page.locator("//span[text()='My Account']");
    const login:Locator = await page.locator("//a[text()='Login']");
    const emailId:Locator = await page.locator('#input-email');
    const password:Locator = await page.locator('#input-password');
    const loginButton:Locator = await page.locator("[value='Login']");

    //performing actions
    await myAccount.click();
    await login.click();
    await emailId.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
    await loginButton.click();

    //to get the page title
    const pageTitle = await page.title();
    //printing the page title
    console.log("Title of the age is: " +pageTitle);

    //get the screenshot of the page
    await page.screenshot({path:'homepage.png'});

    //verifying the actual title matches the expected one
    expect(pageTitle).toEqual('Account Login');

    //to close the browser
    await browser.close();

});