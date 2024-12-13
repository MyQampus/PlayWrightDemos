import {test} from '@playwright/test';
import { baseUrl, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.describe('test case for Super admin',()=>{
  test.describe.configure({ mode: 'serial' });
  test.skip('Add techaer for admin', async ({ page }) => {
    await page.goto(`${baseUrl}/quick-actions`)
   /*
   * Goto => /Quick-action
   * Select => /Campus
   * GOTo => Teacher Page
   * Click => Add Teacher button
   */
   await page.getByText('Select Campus', { exact: true }).click();
   await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
   await page.goto(`${baseUrl}/teachers`);
   await page.getByRole('button', { name: 'Add Teacher' }).click();
   /*
   * Fill out: First Name
   * Fill Out: Last Name
   * Fill Out: Email
   * Click => Next button
   * Click => Save Button
   */
   await page.getByPlaceholder('First Name').fill('Teacher');
   await page.getByPlaceholder('Last Name').fill('admin');
   await page.getByPlaceholder('Email').fill('teachadmin@gmail.com');
   await page.getByRole('button', { name: 'Next' }).click();
   await page.getByRole('button', { name: 'Save' }).click();
   // Set wait time out for add teacher properly
   await page.waitForTimeout(2000)

  });
  test.skip('Test case for Super Admin', async ({ page }) => {
   // Set the time out for testcase 
   test.setTimeout(60000);
   /*
    * Goto the Quick Action
    * Goto the Super-Admin
   */
   //await page.goto(`${baseUrl}/quick-actions`) 
   await page.goto(`${baseUrl}/super-admin`);
   // Click to the Make Super Admin
   await page.getByRole('button', { name: 'Make Super Admin' }).click();

  // await page.getByRole('button', { name: 'Make Super Admin' }).click();
   /*
    * Click => Select 
    * Fill out Teacher admin 
    * WaitFor search Teacher admin
    * Click to the Teacher admin Li
    * Click to the Save Button
   */
   await page.getByText('Select', { exact: true }).click();
   await page.getByPlaceholder('Search').pressSequentially('Teacher admin')
   await page.waitForTimeout(1000)
   await page.locator('li').filter({ hasText: 'TATeacher admin' }).click();
   await page.getByRole('button', { name: 'Save' }).click();
   /*
    * Click to the Teacher admin action Button
    * Click to the Edit in dropdown
    * Fill out: First and Last Name Update
    * Click to the Update Button
   */
   await page.getByRole('row', { name: 'teachadmin@gmail.com' }).locator('td:nth-child(7)').click()
   await page.locator('li').filter({ hasText: 'Edit' }).click();
   await page.getByPlaceholder('Enter First Name').fill('admin');
   await page.getByPlaceholder('Enter Last Name').fill('Teacher');
   await page.getByRole('button', { name: 'Update' }).click();
   await page.waitForTimeout(1000)
   /*
    * Click to the action Button
    * Click to the Disable in dropdown
    * Click to the Disable Button
   */
   await page.getByRole('row', { name: 'teachadmin@gmail.com' }).locator('td:nth-child(7)').click()
   await page.locator('li').filter({ hasText: 'Disable Login' }).click();
   await page.getByRole('button', { name: 'Disable' }).click();
   /*
    * Click to the action Button
    * Click to the Enable in dropdown
    * Click to the Enable Button
   */
   await page.getByRole('row', { name: 'teachadmin@gmail.com' }).locator('td:nth-child(7)').click()
   await page.locator('li').filter({ hasText: 'Enable Login' }).click();
   await page.getByRole('button', { name: 'Enable' }).click();
   /*
    * Click to the action Button
    * Click to the Revike in dropdown
    * Click to the Revoke Button
    * Wait for 2Sec for Revoke form Backend side 
   */
   await page.getByRole('row', { name: 'teachadmin@gmail.com' }).locator('td:nth-child(7)').click()
   await page.locator('li').filter({ hasText: 'Revoke Access' }).click();
   await page.getByRole('button', { name: 'Revoke' }).click();
   await page.waitForTimeout(1000)
   // Click to the Make Super Admin again
   await page.getByRole('button', { name: 'Make Super Admin' }).click();
   /*
    * Click to the Select
    * Fill out: Admin Teacher
    * Wait for 1Sec for serach
    * Click to the admin Teacher Li
    * click to the save Button
   */
   await page.getByText('Select', { exact: true }).click();
   await page.getByPlaceholder('Search').pressSequentially('admin Teacher');
   await page.waitForTimeout(1000)
   await page.locator('li').filter({ hasText: 'ATadmin Teacher' }).click();
   await page.getByRole('button', { name: 'Save' }).click();
   await page.waitForTimeout(1000)
   /*
    * Click to the action Button
    * Click to the Deactive User
    * Fill out auto password of super admin
    * Click to the Deactive Button
   */
   await page.getByRole('row', { name: 'teachadmin@gmail.com' }).locator('td:nth-child(7)').click()
   await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
   await page.getByPlaceholder('Password').fill(password);
   await page.getByRole('button', { name: 'Deactivate' }).click();
   // wait for 2 Sec for Backend Response
   await page.waitForTimeout(2000)
  });
})