import {test,expect} from '@playwright/test' 
test("handling dropdown list", async({page})=>{
    await page.goto("https://www.facebook.com/");

    //select the dropdown using value
    await page.getByRole('button',{name:'Create new account'}).click();

    // select dropdown using visible tex

    //validating the value

})