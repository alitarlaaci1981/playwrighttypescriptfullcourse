import { test, expect } from '@playwright/test';

test('Code gen test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  
});