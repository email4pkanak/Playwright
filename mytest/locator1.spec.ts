import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'


test('locator1 test', async()=> {

    //to launch browser in normal mode as by default it launches in incognito mode
    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless:false,channel:'chrome'});

    //when browser is launched in normal mode, it opens one blank tab and other tab with the url.
    //By below code we can handel this
    const pages:Page[] = browser.pages(); //to get no of pages
    const page:Page = pages[0];

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //1.ID
    const fName:Locator = page.locator('id=input-firstname');
    await fName.fill("Priyanka");

    //2.classname
    const logo:Locator = page.locator('.img-responsive');
    const logoExists = await logo.isEnabled();
    console.log(logoExists);

    //3. Text
    const header:Locator = page.locator('text=Register Account');
    const headerExists = await header.isEnabled();
    console.log(headerExists);

    //4. css selector
    const email:Locator=page.locator('css=input#input-email'); //css with id
    const telephone:Locator = page.locator('css=input[name="telephone"]'); //css with name
    //It is not mandatory to specify css in locator as playwright will recognize it
    const privacyCheckbox:Locator = page.locator('input[type="checkbox"]'); //css with type
    await email.fill("a@a.com");
    await telephone.fill("234533232");
    await privacyCheckbox.click();

    //5. xpath- here also we can leave xpath= in the locator.
    const password:Locator = page.locator('xpath=//input[@id="input-password"]');
    await password.fill("test@123");

    //6. Data-test-id
    //await page.getByTestId('username').fill("dfgsdfsd");

    //7. Role selector-- alolows you to select element using their ARIA role, ARIA attribute or accessibility name
    await expect(page.getByRole('heading',{name:'Register Account'})).toBeVisible();
    await page.getByRole('radio',{name:'Yes'}).click();

    //for timeout
    await page.waitForTimeout(3000);

    

});