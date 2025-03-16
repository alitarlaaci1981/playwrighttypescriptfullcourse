//import playwright module
import {test,expect, firefox} from '@playwright/test';

test('get text and get attribute value',async({page})=>{
   await page.goto("https://github.com/BakkappaN/");

   const name=await page.locator('[itemprop="name"]').innerText();
   const finalName=name?.trim()
   console.log(`name is ${finalName}`);
   expect(finalName).toBe('Testers Talk');

   const attributeValue=await page.getByTestId('repositories').first().getAttribute('data-selected-links');
   console.log(`attribute value is ${attributeValue}`);
   //await page.getAttribute('itemprop',{})
    // get by all attribute
    // await page.getByAltText("View BakkappaN's full-sized avatar").click();

   
  
  
})