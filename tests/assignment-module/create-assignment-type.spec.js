import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'
test.skip('test', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`);
  await page.getByText('Select Campus', { exact: true }).click();
  await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
  await page.getByText('Select Class').first().click();
  await page.getByText(SETUP_CONSTANTS.DEFAULT_CLASS).click();
  await page.getByRole('heading', { name: 'Assignment' }).click();
  await page.getByText('Assignment Types').click();
  await page.getByRole('button', { name: 'Add Assignment Type' }).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('Mid Term Assignment 2');
  await page.getByRole('button', { name: 'Save' }).click();
  // assignment type update below 
  await page.locator('.grid-cols-13 > .col-span-16').click();
  await page.getByRole('row', { name: 'Mid Term Assignment 2 N/A' }).locator('div').click();
  await page.getByText('Edit').click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('Mid Term Assignment3');
  await page.getByRole('button', { name: 'Update' }).click();
});