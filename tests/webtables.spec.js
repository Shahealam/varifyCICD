import{test,expect} from '@playwright/test';
test('varify the add button',async({page})=>
{
await page.goto('https://demoqa.com/webtables');
await page.getByRole('button',{name:'Add',exact:true}).click();

await page.waitForTimeout(5000);

await page.fill('#firstName','shahe');
await page.fill('#lastName','Alam');
await page.fill('#userEmail','shahealam@gmail.com');
await page.fill('#age','28');
await page.fill('#salary','300000');
await page.fill('#department','QA');

await page.waitForTimeout(5000);

await page.getByRole('button',{name:'Submit',exact:true}).click();


})
 