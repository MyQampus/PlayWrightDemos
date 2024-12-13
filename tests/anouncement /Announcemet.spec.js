import { test, expect } from '@playwright/test';
import { baseUrl, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'
test.describe('test case for announcement',()=>{
test.skip('announcement type', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`)
  await page.getByText('Select Campus', { exact: true }).click();
  await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
  await page.goto(`${baseUrl}/notification/announcement-types`)
  /*
  Click => Add Announcement Type
  Enter info in field
  click on save button
  Update Announcement
  Delete Announcement
  */
  await page.getByRole('button', { name: 'Add Announcement Type' }).click();
  await page.getByPlaceholder('Write').click();
  await page.getByPlaceholder('Write').fill('new announcement');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('row', { name: 'new announcement N/A' }).locator('td:nth-child(3)').click();
  await page.getByText('Edit').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('abc');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('row', { name: 'new announcement' }).locator('td:nth-child(3)').click();
  await page.getByText('Delete').click();
  await page.getByRole('button', { name: 'Delete' }).click();
});
test.skip('Announcements', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`)
  await page.getByText('Select Campus', { exact: true }).click();
  await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
  await page.goto(`${baseUrl}/notification/announcement`)
  /*
  Click => Add Noticafication for staff
  Enter info in field
  Click on send button
  Click on Confirm button 
  */
  await page.getByRole('button', { name: 'Notify' }).click();
  await page.getByRole('button', { name: 'Staff' }).click();
  await page.locator('label').filter({ hasText: 'In-App Notification *' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Write').click();
  await page.getByPlaceholder('Write').fill('staff announcement');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('new announcement for staff role');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  /*
  Click => Add Noticafication for student
  Enter info in field
  Click on send button
  Click on Confirm button 
  */
  await page.getByRole('button', { name: 'Notify' }).click();
  await page.getByRole('button', { name: 'Student' }).click();
  await page.locator('label').filter({ hasText: 'In-App Notification *' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Write').click();
  await page.getByPlaceholder('Write').fill('student announcement');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('new announcement for syudent role');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  /*
  Click => Add Noticafication for guardian
  Enter info in field
  Click on send button
  Click on Confirm button 
  */ 
  await page.getByRole('button', { name: 'Notify' }).click();
  await page.getByRole('button', { name: 'Guardian' }).click();
  await page.locator('label').filter({ hasText: 'In-App Notification *' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Write').click();
  await page.getByPlaceholder('Write').fill('guardian announcement');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('new announcement for guardian role');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  /*
  Click => Add Noticafication for teacher
  Enter info in field
  Click on send button
  Click on Confirm button 
  */
  await page.getByRole('button', { name: 'Notify' }).click();
  await page.getByRole('button', { name: 'Teacher' }).click();
  await page.locator('label').filter({ hasText: 'In-App Notification *' }).locator('span').nth(1).click();
  await page.getByPlaceholder('Write').click();
  await page.getByPlaceholder('Write').fill('Teacher announcement');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('new announcement for teacher role');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click

});
});
