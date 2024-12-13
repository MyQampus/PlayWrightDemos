import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.skip('test of Teacher Module', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`)
  //  Goto => /quick-action
  //  select => /campus
  await page.getByText('Select Campus', { exact: true }).click();
  await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
  //  Goto => /teacher
   await page.getByRole('list').getByText('Teachers').click();
  // click => Add teacher
  await page.getByRole('button', { name: 'Add Teacher' }).click();
  // click first name
  // fill out: First Name
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('teacher');
  // click last name
  // fill out: Last Name
   await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('pakistan');
  // click Email
  // fill out: email
   await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('teapak@gmail.com');
  // click Next button
  // click => save button
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  // click => action button
  await page.getByRole('row', { name: 'teacher pakistan' }).locator('td:nth-child(14)').click()
  // click => Edit button
  await page.locator('li').filter({ hasText: 'Edit' }).click();
  // fill out: fist & Last name
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('pakistan');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('teacheradd');
  // click => update button
  await page.getByRole('button', { name: 'Update' }).click();
  // wait for time
  // click => action button
  await page.waitForTimeout(1000)

  await page.getByRole('row', { name: 'pakistan teacheradd' }).locator('td:nth-child(14)').click()
  // click => Disable Login
  // click =>disable button
  await page.locator('li').filter({ hasText: 'Disable Login' }).click();
  await page.getByRole('button', { name: 'Disable' }).click();
  // click => action button
  // click => Enable Login
  await page.getByRole('row', { name: 'pakistan teacheradd' }).locator('td:nth-child(14)').click()
  await page.locator('li').filter({ hasText: 'Enable Login' }).click();
  // click => Enable Button
  await page.getByRole('button', { name: 'Enable' }).click();
  // click => action button
  // click => Deactive 
  await page.waitForTimeout(1000)
  await page.getByRole('row', { name: 'pakistan teacheradd' }).locator('td:nth-child(14)').click()
  await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
  // fill => password 
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(password);
  // click => Deactive button
  await page.getByRole('button', { name: 'Deactivate' }).click();
  await page.waitForTimeout(2000)
});