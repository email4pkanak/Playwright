//browsercontext: to create more than one instance of browser which will have their own specific session.
//  they will be in incognito mode

import {test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('multiple login test', async()=>{

    const browser:Browser = await firefox.launch({headless:false});

    //to create browser context
        //Browser context 1
    const Browser1:BrowserContext = await browser.newContext();
    const page1:Page = await Browser1.newPage();

        //Browser context 2
    const Browser2:BrowserContext = await browser.newContext();
    const page2:Page = await Browser1.newPage();

    //script to run on browser context1
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId:Locator = page1.locator('#input-email');
    const password:Locator = page1.locator('#input-password');
    const loginButton:Locator = page1.locator("[value='Login']");
    //performing actions
    await emailId.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
    await loginButton.click();


    //script to run on browser context2
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId2:Locator = page2.locator('#input-email');
    const password2:Locator = page2.locator('#input-password');
    const loginButton2:Locator = page2.locator("[value='Login']");
    //performing actions
    await emailId2.fill("userpw@pw.com");
    await password2.fill("Test@123");
    await loginButton2.click();

    //To close the browser
    await Browser1.close();
    await Browser2.close();
    await browser.close();


    //To prevent script from exiting--it will take time to close the browser
    //await new Promise(()=>{});

})