import { test, expect } from '@playwright/test'
test("Selecting date value in p;aywrigh", async ({ page }) => {

   await page.goto("https://jqueryui.com/datepicker/");
   const iframe = page.frameLocator("[class='demo-frame']");
  // await iframe.locator("[id='datepicker']").fill('12/15/2025');


   //handling dynmic date
   // await iframe.locator("[id='datepicker']").click();
   // await iframe.locator('.ui-datepicker-today').click();

   //select the past date
   // await iframe.locator("[id='datepicker']").click();
   // await iframe.locator("[title='Prev']").click();
   // await iframe.locator('text="15"').click();


   //selecting a future date
   await iframe.locator("[id='datepicker']").click();
   await iframe.locator("[title='Next']").click();
   await iframe.locator('text="15"').click();

   await page.waitForTimeout(2000);
  // await page.pause(); 


})