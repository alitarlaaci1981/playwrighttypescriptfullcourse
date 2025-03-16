

import { test, expect } from '@playwright/test'
test("TIMEOUT in paywright", async ({ page }) => {
  // test.setTimeout(1 * 60 * 1000);
   await page.goto("https://www.youtube.com/");
  // await page.locator("//input[@name='search_quer']").isVisible();

  await page.getByPlaceholder('Search me',{exact:true}).first().click();
  await page.getByPlaceholder('Search',{exact:true}).first().fill('playwright by testers talk');
  await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');
  await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');
  await expect(page).toHaveTitle('playwright by testers talk - YouTube',{timeout:5000});
   
  // await page.waitForTimeout(60000);
  


})



 