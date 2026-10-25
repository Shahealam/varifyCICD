import{test,expect} from '@playwright/test'

test('varify new tab window',async({page,context})=>{

await page.goto('https://demoqa.com/browser-windows')

const [newtab]= await Promise.all([
context.waitForEvent('page'),page.locator('#tabButton').click()
] );


await newtab.waitForLoadState();

await expect (newtab.locator('#sampleHeading') ).toHaveText('This is a sample page');





console.log(newtab.url());


}


)

