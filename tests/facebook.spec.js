import{test,expect} from '@playwright/test'
test('verity the facebook login ', async({page})=>{

await page.goto('https://www.facebook.com/');
await page.locator('//input[@id="_R_c9l6neappb6amH1_"]').fill('shahealam@gmail.com');
await page.locator('//input[@id="_R_cdl6neappb6amH1_"]').fill('shahealam');
await page.getByRole('button',{name:'log in'}).click();

})


import{test,expect} from '@playwright/test'
test('varify the dropdown',async({page})=>{
await page.goto('https://vinothqaacademy.com/drop-down/');
 await page.setViewportSize({ width: 1920, height: 1080 }); 
const dropdownm= page.locator('#select2-simpleDropdown-container');
await dropdownm.click();

const option = page.locator('li.select2-results__option', { hasText: 'Paris' });
  await option.click();
//await page.getByRole('option',{name:'Paris'}).click();

await expect(dropdownm).toHaveText('Paris');

})