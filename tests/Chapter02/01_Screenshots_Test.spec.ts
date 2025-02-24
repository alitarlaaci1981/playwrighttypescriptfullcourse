//import playwright module
import {test,expect} from '@playwright/test';

test('Capture screen shot in playwright',async({page})=>{
    await page.goto("https://www.youtube.com/@testerstalk");

    //element screen shot
  await page.locator("#page-header-container").screenshot({path:'./screenshots/ElementScreenshot.png'});

    // page screen shot
    await page.screenshot({path:'./screenshots/PageScreenShot.png'});

    //full page screen shot
    await page.screenshot({path:'./screenshots/FullPageScreenshot.png',fullPage:true})
})