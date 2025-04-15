import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

type TestData = {
  TestDataSet1: {
    Skill1: string;
    Skill2: string;
  };
  TestDataSet2: {
    Skill1: string;
    Skill2: string;
  };
};

const typedTestData = testData as TestData;

test.describe('Data-driven testing from JSON', () => {
  for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];

    test(`Search for: ${skill.Skill1}`, async ({ page }) => {
      await page.goto('https://www.youtube.com/');
      await page.getByPlaceholder('Search', { exact: true }).first().click();
      await page.getByPlaceholder('Search', { exact: true }).first().fill(skill.Skill1);
      await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
     // await expect(page).toHaveTitle(skill.Skill1 + ' - YouTube');
      await page.waitForTimeout(2000);
    });
  }
});
