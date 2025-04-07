//import playwright module
import {test,expect, firefox} from '@playwright/test';

test('working with checkboxes and radio buttons',async({page})=>{
   await page.goto("https://jqueryui.com/checkboxradio/");

  const iframe= await page.frameLocator('.demo-frame');

  await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
  
  await iframe.locator('[for="radio-1"]').check();

  
   
  
  
})