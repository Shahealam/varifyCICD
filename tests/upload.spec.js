// import{test,expect} from '@playwright/test'
// test('varify the upload buttons',async({page})=>{
// await page.goto('https://demoqa.com/upload-download')

// const filepath = '/home/ashutosh/Documents/a.jpg';

// await page.locator('#uploadFile').setInputFiles(filepath);

// await expect(page.locator('#uploadedFilePath')).toContainText('a.jpg');
// console.log('fileuploaded');

// })

//////////// Download///////////////////
import{test,expect} from '@playwright/test'
test('varify the upload buttons',async({page})=>{
await page.goto('https://demoqa.com/upload-download')

await page.locator('#downloadButton').click();



})