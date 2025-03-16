import { test, expect } from '@playwright/test'

 test("Multiple browsers-/tabs`", async ({ page,browser }) => {
    
    await page.goto("https://www.youtube.com/");
   // await page.locator("//input[@name='search_quer']").isVisible();
 
   await page.getByPlaceholder('Search',{exact:true}).first().click();
   await page.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
   await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');
   await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
   await expect(page).toHaveTitle('playwright by testers talk - YouTube');
    
    await page.waitForTimeout(2000);



   //how to create a new browser session
  const context2=await browser.newContext();
  const page2=await context2.newPage();

  await page2.goto("https://www.youtube.com/");
  // await page.locator("//input[@name='search_quer']").isVisible();

  await page2.getByPlaceholder('Search',{exact:true}).first().click();
  await page2.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
  await page2.getByPlaceholder('Search',{exact:true}).first().press('Enter');
  await expect(page2).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
  await expect(page2).toHaveTitle('playwright by testers talk - YouTube');
   
   await page2.waitForTimeout(2000);

   //create a new tab
   const newTab=await context2.newPage();

   await newTab.goto("https://www.youtube.com/");
  // await page.locator("//input[@name='search_quer']").isVisible();

  await newTab.getByPlaceholder('Search',{exact:true}).first().click();
  await newTab.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
  await newTab.getByPlaceholder('Search',{exact:true}).first().press('Enter');
  await expect(newTab).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
  await expect(newTab).toHaveTitle('playwright by testers talk - YouTube');
   
   await newTab.waitForTimeout(2000);



 })