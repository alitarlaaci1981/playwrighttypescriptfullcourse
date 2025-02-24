import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Navigating to github home page',async()=>{
    await page.goto('https://github.com/');
  })
  await test.step('entering username and password and clicking on the login button',async()=>{
   
    await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('asdfasdf');
  await page.getByText('Password Forgot password?').click();
  })

  await test.step('Click on sign in',async()=>{
    await page.getByRole('textbox', { name: 'Password' }).fill('asdfadf');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await page.getByText('Incorrect username or').click();
  })
  
  await test.step('Validating the error message   ',async()=>{
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })
 
});