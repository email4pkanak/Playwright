import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('auth popup code', async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();

    //Solution 1: Covert username and password to base64 for encrypted string so that we donot have to pass
    //hardcoded user and password.
    const username = 'admin';
    const password = 'admin';
    const authHeader = 'Basic' + btoa(username+':'+password);
    page.setExtraHTTPHeaders({Authorization : authHeader});
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    //Solution2: To pass username password in url for auth popup
    //await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    //syntax: https://username:password@url

    await new Promise(()=>{});

});