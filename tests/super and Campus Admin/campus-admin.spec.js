import { test } from '@playwright/test';
import { baseUrl, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.describe('test case for Campus admin',()=>{
  test.describe.configure({ mode: 'serial' });
    test.skip('Add techaer for admin', async ({ page }) => {
        await page.goto(`${baseUrl}/quick-actions`)
         /*
          * Goto => /Quick-action
          * Select => /Campus
          * GOTo => Staff Page
          * Click => Add Staff button
         */
        await page.getByText('Select Campus', { exact: true }).click();
        await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
        await page.goto(`${baseUrl}/staff`);
        await page.getByRole('button', { name: 'Add Staff' }).click();
         /*
          * Fill out: First Name
          * Fill Out: Last Name
          * Fill Out: Email
          * Click => Save Button
         */
        await page.getByPlaceholder('Enter First Name').fill('Adeel');
        await page.getByPlaceholder('Enter Last Name').fill('Manzoor');
        await page.getByPlaceholder('Email').fill('adeel@gmail.com');
        await page.getByRole('button', { name: 'Save' }).click();
         // Set wait time out for add Staff properly
        await page.waitForTimeout(2000)

    });
    test.skip('Test case for Campus Admin', async ({ page }) => {
       // Goto the Quick Action
      await page.goto(`${baseUrl}/quick-actions`)  
       /*
        * Select => /Campus
        * GOTo => Campu-Admin Page
       */
      await page.getByText('Select Campus', { exact: true }).click();
      await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();  
      await page.goto(`${baseUrl}/campus-admin`);
       // Click to the Add Existing User
      await page.getByRole('button', { name: 'Add Existing User' }).click();
       /*
        * Click => Select 
        * Fill out: Name 
        * WaitFor search 
        * Click to the Name Li
        * Click to the Save Button
       */
      await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();
      await page.getByPlaceholder('Search').pressSequentially('Adeel Manzoor');
      await page.waitForTimeout(1000)
      await page.locator('li').filter({ hasText: 'AMAdeel Manzoor' }).click();
      await page.getByRole('button', { name: 'Save' }).click();
       /*
        * Click to the action Button
        * Click to the Edit in dropdown
        * Fill out: First and Last Name Update
        * Click to the Update Button
       */
      await page.getByRole('row', { name: 'adeel@gmail.com' }).locator('td:nth-child(11)').click();
      await page.locator('li').filter({ hasText: 'Edit' }).click();
      await page.getByPlaceholder('Enter First Name').fill('Adeelmanzor');
      await page.getByPlaceholder('Enter Last Name').fill('Ahmad');
      await page.getByRole('button', { name: 'Update' }).click();
      await page.waitForTimeout(1000)
       /*
        * Click to the action Button
        * Click to the Disable in dropdown
        * Click to the Disable Button
       */
      await page.getByRole('row', { name: 'adeel@gmail.com' }).locator('td:nth-child(11)').click();
      await page.locator('li').filter({ hasText: 'Disable Login' }).click();
      await page.getByRole('button', { name: 'Disable' }).click();
       /*
        * Click to the action Button
        * Click to the Enable in dropdown
        * Click to the Enable Button
       */
      await page.getByRole('row', { name: 'adeel@gmail.com' }).locator('td:nth-child(11)').click();
      await page.locator('li').filter({ hasText: 'Enable Login' }).click();
      await page.getByRole('button', { name: 'Enable' }).click();
       /*
        * Click to the action Button
        * Click to the Deactive User
        * Fill out auto password
        * Click to the Deactive Button
       */
      await page.getByRole('row', { name: 'adeel@gmail.com' }).locator('td:nth-child(11)').click();
      await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
      await page.getByPlaceholder('Password').fill(password);
      await page.getByRole('button', { name: 'Deactivate' }).click();
       // wait for 2 Sec for Backend Response
      await page.waitForTimeout(2000)
    });
})