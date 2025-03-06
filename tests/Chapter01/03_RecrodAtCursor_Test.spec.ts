//import playwright module
import {test,expect} from '@playwright/test';

test('this is the first test',async({page})=>{
    console.log(`tEST execution started...`)
    await page.goto("https://www.google.com/");

    await page.getByLabel('Search',{exact:true}).fill('playwright by testerstalk');
    
    await page.getByLabel('Search',{exact:true}).press('Enter');

   await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click();
   await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');
})