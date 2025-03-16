import { test, expect } from '@playwright/test'
const searchKeywords=[
    'Playwright by testers talk',
    'Cypress by testers talk',
    'API testing by testers talk'
]

for(const searchKeyword of searchKeywords){

    test(`Parameterized test in playwright ${searchKeyword}`, async ({ page }) => {
  
        await page.goto("https://www.youtube.com/");
       // await page.locator("//input[@name='search_quer']").isVisible();
     
       await page.getByPlaceholder('Search',{exact:true}).first().click();
       await page.getByPlaceholder('Search',{exact:true}).first().fill(searchKeyword);
       await page.getByPlaceholder('Search',{exact:true}).first().press('Enter');
      // await expect(page).toHaveURL('https://www.youtube.com/results?search_query='+searchKeyword);
       await expect(page).toHaveTitle(searchKeyword+  '- YouTube');
        
        await page.waitForTimeout(2000);
       
     
     
     })
}




 