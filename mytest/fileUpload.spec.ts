import {test,expect,Browser,Page,Locator} from '@playwright/test'
import {webkit,chromium,firefox} from '@playwright/test'

test('file upload code',async()=>{

    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page= await browser.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/upload-file-demo");

    //single file upload
    await page.locator('#file').setInputFiles("C:\\Users\\user\\Downloads\\images.jpg");

    //multiple file upload
    //await page.locator('#file').setInputFiles([path.join("C:\\Users\\user\\Downloads\\images.jpg"),path.join("C:\\Users\\user\\Downloads\\images1.jpg")]);
    await page.waitForTimeout(3000);
    //deselect the uploaded file
    await page.locator('#file').setInputFiles([]);
    await page.waitForTimeout(3000);

    //creating file and then uploading it
    await page.locator('#file').setInputFiles({
        name: 'newFile.pdf',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is test file')});

    await page.waitForTimeout(3000);

});