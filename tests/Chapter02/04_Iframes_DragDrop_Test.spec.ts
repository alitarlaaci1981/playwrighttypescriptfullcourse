import {test,expect} from '@playwright/test' 
test("handling iframes and drag and drop", async({page})=>{
    await page.goto("https://jqueryui.com/droppable/");
    //identify the iframe
    const iframe=page.frameLocator('[class="demo-frame"]');
    

    //drag element, drop element
   const dragElement= iframe.locator('[id="draggable"]');
   const dropElement= iframe.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);


})