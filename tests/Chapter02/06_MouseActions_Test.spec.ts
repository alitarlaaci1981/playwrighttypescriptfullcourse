import {test,expect} from '@playwright/test' 
test("handling iframes and drag and drop", async({page})=>{
    
 //   await page.goto("https://ultimateqa.com/automation");

  //  await page.getByRole('link',{name: 'Big page with many elements'}).click({button:'left'});

  //  await page.getByRole('link',{name: 'Big page with many elements'}).click({button:'middle'});
    
   // await page.getByRole('link',{name: 'Big page with many elements'}).click({button:'right'});

   //mouse hover

   await page.goto("https://ultimateqa.com/simple-html-elements-for-automation/");

   await page.getByTitle("Follow on X").hover();

   await page.getByTitle("Follow on X").dblclick();

   await page.waitForTimeout(2000);



})