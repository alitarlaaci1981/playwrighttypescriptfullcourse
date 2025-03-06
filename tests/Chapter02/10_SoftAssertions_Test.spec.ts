import { test, expect } from '@playwright/test'
test("soft assertions in playwright", async ({ page }) => {

   await page.goto("https://www.youtube.com/");
  
   await page.getByPlaceholder('Search',{exact:true}).first().click();
   await page.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
   await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');
   await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
   await expect.soft(page).toHaveTitle('playwright by testers talk - YouTube');
    
    await page.waitForTimeout(2000);
  
   await page.waitForTimeout(2000);
  


})