import { test, expect } from '@playwright/test'
test("Assertions in playwright", async ({ page }) => {
   console.log(`Test executon started`);
   await page.goto("https://www.youtube.com/");
  // await page.locator("//input[@name='search_quer']").isVisible();

  await page.getByPlaceholder('Search',{exact:true}).first().click();
  await page.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
  await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');
  await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
  await expect(page).toHaveTitle('playwright by testers talk - YouTube');
   
   await page.waitForTimeout(2000);
  


})