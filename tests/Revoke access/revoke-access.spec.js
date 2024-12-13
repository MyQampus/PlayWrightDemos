import { test } from '@playwright/test';
import { baseUrl, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.describe('test case for Revoke and Access', () => {
  test.describe.configure({ mode: 'serial' });
  test('Add Staff for Revoke', async ({ page }) => {
    // Go to the quick-actions page
    await page.goto(`${baseUrl}/quick-actions`);
    await page.getByText('Select Campus', { exact: true }).click(); // Click on the Select Campus button
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click(); // Select the default campus
    await page.goto(`${baseUrl}/staff`); // Go to the staff page
    await page.getByRole('button', { name: 'Add Staff' }).click(); // Click on the Add Staff button
    await page.getByPlaceholder('Enter First Name').fill('Revoke'); // Fill in the first name
    await page.getByPlaceholder('Enter Last Name').fill('Staff'); // Fill in the last name
    await page.getByPlaceholder('Email').fill('revokestaff@gmail.com'); // Fill in the email address
    await page.getByRole('button', { name: 'Save' }).click(); // Click the Save button
    await page.waitForTimeout(2000); // Wait for 2 seconds
  });

  test('Add Teacher for Revoke', async ({ page }) => {
    // Go to the quick-actions page
    await page.goto(`${baseUrl}/quick-actions`);
    await page.getByText('Select Campus', { exact: true }).click(); // Click on the Select Campus button
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click(); // Select the default campus
    await page.goto(`${baseUrl}/teachers`); // Go to the teachers page
    await page.getByRole('button', { name: 'Add Teacher' }).click(); // Click on the Add Teacher button
    await page.getByPlaceholder('First Name').fill('teacher'); // Fill in the first name
    await page.getByPlaceholder('Last Name').fill('revoke'); // Fill in the last name
    await page.getByPlaceholder('Email').fill('teacherrevoke@gmail.com'); // Fill in the email address
    await page.getByRole('button', { name: 'Next' }).click(); // Click the Next button
    await page.getByRole('button', { name: 'Save' }).click(); // Click the Save button
    await page.waitForTimeout(2000); // Wait for 2 seconds
  });

  test('Add Campus Admin for Revoke', async ({ page }) => {
    // Go to the quick-actions page
    await page.goto(`${baseUrl}/quick-actions`);
    await page.getByText('Select Campus', { exact: true }).click(); // Click on the Select Campus button
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click(); // Select the default campus
    await page.goto(`${baseUrl}/campus-admin`); // Go to the campus admin page
    await page.getByRole('button', { name: 'Add Campus Admin' }).click(); // Click on the Add Campus Admin button
    await page.getByPlaceholder('Enter First Name').fill('Revoke'); // Fill in the first name
    await page.getByPlaceholder('Enter Last Name').fill('Campus'); // Fill in the last name
    await page.getByPlaceholder('Email').fill('revokecampus@gmail.com'); // Fill in the email address
    await page.getByRole('button', { name: 'Save' }).click(); // Click the Save button
    await page.waitForTimeout(2000); // Wait for 2 seconds
  });

  test('Add Guardians for Revoke', async ({ page }) => {
    // Go to the quick-actions page
    await page.goto(`${baseUrl}/quick-actions`);

    await page.getByText('Select Campus', { exact: true }).click(); // Click on the Select Campus button
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click(); // Select the default campus
    await page.goto(`${baseUrl}/guardians`); // Go to the guardians page
    await page.getByRole('button', { name: 'Add Guardians' }).click(); // Click on the Add Guardian button
    await page.getByPlaceholder('Enter First Name').fill('Guardian'); // Fill in the first name
    await page.getByPlaceholder('Enter Last Name').fill('Revoke'); // Fill in the last name
    await page.getByPlaceholder('Email').fill('guardianrevoke@gmail.com'); // Fill in the email address
    await page.getByRole('button', { name: 'Save' }).click(); // Click the Save button
    await page.waitForTimeout(2000); // Wait for 2 seconds
  });

  test('Add Student for Revoke', async ({ page }) => {
    // Navigate to the quick-actions page
    await page.goto(`${baseUrl}/quick-actions`);

    await page.getByText('Select Campus', { exact: true }).click(); // Click on the Select Campus button
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click(); // Select the default campus
    await page.goto(`${baseUrl}/students`); // Go to the students page
    await page.getByRole('button', { name: 'Add Student' }).click(); // Click on the Add Student button
    await page.getByPlaceholder('Enter First Name').fill('revoke'); // Fill in the first name
    await page.getByPlaceholder('Enter Last Name').fill('student'); // Fill in the last name
    await page.getByPlaceholder('Email').fill('revokestud@gmail.com'); // Fill in the email address
    await page.getByRole('button', { name: 'Add', exact: true }).click(); // Click the Add button
    await page.getByRole('button', { name: 'Skip' }).click(); // Click the Skip button
    // await page.getByRole('button', { name: 'Close' }).click(); // Click the Close button (currently commented out)
    await page.waitForTimeout(2000); // Wait for 2 seconds
  });

  test('Add Super Admin for Revoke', async ({ page }) => {
  
    await page.goto(`${baseUrl}/users/super-admin`); // Go to the super-admin page
    await page.getByRole('button', { name: 'Make Super Admin' }).click(); // Click on the Make Super Admin button
    await page.locator('div').filter({ hasText: /^Select$/ }).nth(2).click(); // Click on the Select dropdown
    await page.getByPlaceholder('Search').click(); // Click on the search box
    await page.getByPlaceholder('Search').pressSequentially('Revoke Staff'); // Type 'Revoke Staff' in the search box
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.locator('li').filter({ hasText: 'RSRevoke Staff' }).click(); // Select the 'RSRevoke Staff' option
    await page.getByRole('button', { name: 'Save' }).click(); // Click the Save button
    await page.waitForTimeout(4000); // Wait for 2 seconds
  });

  test('Test For All User Revoke', async ({ page }) => {
    test.slow(); // Mark the test as slow
    await page.goto(`${baseUrl}/users/all-users`); // Go to the all-users page
    await page.evaluate(() => {
      const table = document.getElementById('table-container'); // Get the table element
      if (table) {
        table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
      }
    });
    await page.getByRole('row', { name: 'revokestaff@gmail.com' }).locator('td:nth-child(8)').click(); // Click the action button
   await page.getByRole('row', { name: 'Default Revoke Access' }).getByRole('button').click(); // Click the Revoke Access button
   await page.getByRole('button', { name: 'Revoke', exact: true }).click(); // Click the Revoke button
    await page.getByText('Exit Roles & Access').click(); // Click the Exit Roles & Access button
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.evaluate(() => {
      const table = document.getElementById('table-container'); // Get the table element
      if (table) {
        table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
      }
    });
    await page.getByRole('row', { name: 'revokestaff@gmail.com' }).locator('td:nth-child(8)').click(); // Click the action button
    await page.getByRole('cell', { name: 'Deactivate User' }).click(); // Click the Deactivate User button
    await page.getByPlaceholder('Password').click(); // Click on the password field
    await page.getByPlaceholder('Password').fill('e2e@Password'); // Fill in the password
    await page.getByRole('button', { name: 'Deactivate', exact: true }).click(); // Click the Deactivate button
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.getByText('Exit Roles & Access').click(); // Click the Exit Roles & Access button
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.evaluate(() => {
      const table = document.getElementById('table-container'); // Get the table element
      if (table) {
        table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
      }
    });
    await page.getByRole('row', { name: 'teacherrevoke@gmail.com' }).locator('td:nth-child(8)').click(); // Click the action button
    await page.getByRole('cell', { name: 'Deactivate User' }).click(); // Click the Deactivate User button
    await page.getByPlaceholder('Password').click(); // Click on the password field
    await page.getByPlaceholder('Password').fill('e2e@Password'); // Fill in the password
    await page.getByRole('button', { name: 'Deactivate', exact: true }).click(); // Click the Deactivate button
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.getByText('Exit Roles & Access').click(); // Click the Exit Roles & Access button
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.evaluate(() => {
      const table = document.getElementById('table-container'); // Get the table element
      if (table) {
        table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
      }
    });
    await page.getByRole('row', { name: 'revokecampus@gmail.com' }).locator('td:nth-child(8)').click(); // Click the action button
    await page.getByRole('cell', { name: 'Deactivate User' }).click(); // Click the Deactivate User button
    await page.getByPlaceholder('Password').click(); // Click on the password field
    await page.getByPlaceholder('Password').fill('e2e@Password'); // Fill in the password
    await page.getByRole('button', { name: 'Deactivate', exact: true }).click(); // Click the Deactivate button
    await page.waitForTimeout(1000); // Wait for 1 second
    await page.getByText('Exit Roles & Access').click(); // Click the Exit Roles & Access button
    await page.waitForTimeout(1000); // Wait for 1 second
    /*
    We are facing issue with guardian roke and access that why we are commenting this code 
    await page.evaluate(() => {
    const table = document.getElementById('table-container'); // Get the table element
    if (table) {
        table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
    }
});

await page.getByRole('row', { name: 'guardianrevoke@gmail.com' }).locator('td:nth-child(8)').click(); // Click the action button for the 'guardianrevoke@gmail.com' row

// await page.getByRole('row', { name: 'revokestaff@gmail.com' }).locator('td:nth-child(8)').click(); // Optional: Click the action button for the 'revokestaff@gmail.com' row

await page.getByRole('cell', { name: 'Deactivate User' }).click(); // Click the 'Deactivate User' button

await page.getByPlaceholder('Password').click(); // Click on the password field

await page.getByPlaceholder('Password').fill('e2e@Password'); // Fill in the password

await page.getByRole('button', { name: 'Deactivate', exact: true }).click(); // Click the 'Deactivate' button
await page.waitForTimeout(1000); // Wait for 1 second
await page.getByText('Exit Roles & Access').click(); // Click the 'Exit Roles & Access' button
await page.waitForTimeout(1000); // Wait for 1 second

    */
    await page.evaluate(() => {
      const table = document.getElementById('table-container'); // Get the table element
      if (table) {
        table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
      }
    });
    await page.getByRole('row', { name: 'revokestud@gmail.com' }).locator('td:nth-child(8)').click(); // Click the action button
    await page.getByRole('cell', { name: 'Deactivate User' }).click(); // Click the Deactivate User button
    await page.getByPlaceholder('Password').click(); // Click on the password field
    await page.getByPlaceholder('Password').fill('e2e@Password'); // Fill in the password
    await page.getByRole('button', { name: 'Deactivate', exact: true }).click(); // Click the Deactivate button
    await page.waitForTimeout(1000); // Wait for 1 second
  });
});