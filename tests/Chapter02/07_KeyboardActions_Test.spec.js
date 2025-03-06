import {test,expect} from '@playwright/test' 
test("Keyboard actions in playwright", async({page})=>{
    
 await page.goto("https://ultimateqa.com/automation");

 await page.click('.et_pb_menu__icon.et_pb_menu__search-button');

 await page.fill('.et_pb_menu__search-input', 'element');

//Enter action from keyboard
 //await page.press('.et_pb_menu__search-input','Enter');
//  await page.waitForTimeout(1000);
//  await page.keyboard.press('Control+A');
//  await page.waitForTimeout(1000);
//  await page.keyboard.press("Delete");






   await page.waitForTimeout(2000);



})