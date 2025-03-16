import { test, expect } from '@playwright/test'

 test("handlinf alert and popups", async ({ page,browser }) => {
    
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts");
   // await page.locator("//input[@name='search_quer']").isVisible();
 

    page.once('dialog',dialog=>{
      dialog.accept();
      console.log(`alert message is,${dialog.message()}`)
      console.log(`alert message is,${dialog.type()}`)
      //dialog.dismiss();
    })

    await page.getByText('See an example alert',{exact:true}).click();
    await page.waitForTimeout(4000);



 })

 test("handlinf popups in playwright", async ({ page,browser }) => {
    
   await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts");
  // await page.locator("//input[@name='search_quer']").isVisible();


   page.once('dialog',dialog=>{
     //dialog.accept();  //this is to click to accepty ok
     console.log(`alert message is,${dialog.message()}`);
     console.log(`alert message is,${dialog.type()}`)
     dialog.dismiss(); // this is to click cancel buttoin
   })

   await page.getByText('See a sample confirm',{exact:true}).click();
   await page.waitForTimeout(4000);



})

test("handling prompy popups ", async ({ page,browser }) => {
    
   await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/#alerts");
  // await page.locator("//input[@name='search_quer']").isVisible();


   page.once('dialog',async(dialog)=>{
     
     console.log(`alert message is,${dialog.message()}`)
     console.log(`alert message is,${dialog.type()}`)
     await dialog.accept('playwright');
     
   })

   await page.getByText('See a sample prompt',{exact:true}).click();
   await page.waitForTimeout(4000);



})

