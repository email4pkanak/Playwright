import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('drag and drop code', async()=>{

    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page:Page=await browser.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    //1st way of doing drag and drop
    await page.locator('text=Draggable 1').dragTo(page.locator("#mydropzone"));

    //2nd way of doing drag and drop
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();

    await page.waitForTimeout(3000);
});