import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log('Running before all tests...')
})

test.beforeEach(async({page})=>{
    console.log('Running beforeEach  tests...')
    await page.goto("https://github.com/BakkappaN/");
})

test.afterEach(async()=>{
    console.log('Running afterEach  tests...')
})

test.afterAll(async()=>{
    console.log("Running after all tests...")
})

test('First test',async({page})=>{
    console.log("First test execution started...")
      await page.goto("https://github.com/BakkappaN/");


   await page.getByRole('link',{name:'Sign in'}).click();
})

test('Second  test',async({page})=>{
    console.log("Second test execution started...")
    // await page.goto("https://github.com/BakkappaN/");
    await page.getByLabel('Homepage',{exact:true}).first().click();
})