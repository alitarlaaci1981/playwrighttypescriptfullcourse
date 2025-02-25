//import playwright module
import {test,expect} from '@playwright/test';

test('Locators in  playwright',async({page})=>{
   // await page.goto("https://github.com/BakkappaN/");

    //get by role
   // await page.getByRole('link',{name:'Sign in'}).click();

    //get by label
   // await page.getByLabel('Homepage',{exact:true}).first().click();

    // get by all attribute
    // await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //get by test id
    //await page.getByTestId("repositories").first().click();
    //await page.getByTestId("projects").first().click();

    //get by text
    //await page.getByText("Sign up").first().click();

    //get by place holder ,xpath , css selector

   // await page.goto("https://www.youtube.com/@testerstalk");
   // await page.getByPlaceholder("Search").fill('testers talk');

   // await page.locator("//input[@name='search_query']").fill('testers talk')

   //await page.locator("input[placeholder='Search']").fill('testers talk');

   //get by title

   await page.goto("https://www.google.com");
    await page.getByTitle("Search").fill('playwright by testers talk')
  
})