import{test,expect}from '@playwright/test';
test('verify the details',async ({page})=>{



await page.goto('https://demoqa.com/text-box');

await page.fill('#userName','shahe alam');

await page.fill('#userEmail','shahealam');

await page.fill('#currentAddress','Rkl ');

await page.fill('#permanentAddress','Rkl ');

await page.getByRole('button',{name:'submit'}).click();



});
