import {test,expect} from '@playwright/test';
test('verify the home page',async({page})=>{
await page.goto('https://www.bitqit.com/');
await expect(page).toHaveTitle('BitQit Solutions - Boost Your Ecommerce to Sales Powerhouse');
});

