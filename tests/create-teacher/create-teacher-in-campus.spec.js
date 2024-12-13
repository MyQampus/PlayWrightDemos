import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'
import { selectCampus } from '../../utils/utiils.js';

test.describe.configure({ mode: 'serial' });

test.describe('Add Student in section level ', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        // await selectCampusAndSection(page)
        await selectCampus(page)
    });
    test('Create teacher in campus level', async ({ page }) => {

        await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();  // Navigate to Users section
        await page.getByText('Teachers').first().click();  // Select Teachers
        await page.getByRole('button', { name: 'Add Teacher' }).click();  // Click on 'Add Teacher'
        await page.getByPlaceholder('First Name').click();  // Fill First Name field
        await page.getByPlaceholder('First Name').fill('muhammad rizwan');
        await page.getByPlaceholder('Last Name').click();  // Fill Last Name field
        await page.getByPlaceholder('Last Name').fill('hussain');
        await page.getByPlaceholder('Email').click();  // Fill Email field
        await page.getByPlaceholder('Email').fill('mrizwan12@gmail.com');
        await page.getByRole('button', { name: 'Next' }).click();  // Click 'Next'
        await page.getByRole('button', { name: 'Save' }).click();  // Click 'Save'
        await page.waitForTimeout(2000);  // Wait for 2 seconds
    });

    test('update teacher', async ({ page }) => {

        await page.goto(`${baseUrl}/quick-actions`);  // Navigate to quick-actions page
        await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();  // Navigate to Users section
        await page.getByRole('link', { name: 'Teachers' }).first().click();  // Select Teachers
        await page.evaluate(() => {
            const table = document.getElementById('table-container');  // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
            }
        });
        await page.waitForTimeout(3000);  // Wait for 2 seconds
        await page.locator('td:nth-child(14)').click();  // Click on the ellipsis for the teacher
        await page.getByText('Edit').click();  // Click on 'Edit'
        await page.getByPlaceholder('First Name').fill('muhammad ');  // Update First Name
        await page.getByPlaceholder('Last Name').click();  // Click on Last Name field
        await page.getByPlaceholder('Last Name').fill('rizwan hussain');  // Update Last Name
        await page.getByRole('button', { name: 'Update' }).click();  // Click 'Update'
    });

    test('teacher disable login', async ({ page }) => {

        await page.goto(`${baseUrl}/quick-actions`);  // Navigate to quick-actions page
        await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();  // Navigate to Users section
        await page.getByRole('link', { name: 'Teachers' }).first().click();  // Select Teachers
        await page.evaluate(() => {
            const table = document.getElementById('table-container');  // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
            }
        });
        await page.waitForTimeout(3000);
        await page.locator('td:nth-child(14)').click();
        await page.getByText('Disable Login').click();
        await page.getByRole('button', { name: 'Disable' }).click();
    });

    test('teacher deactivate', async ({ page }) => {
        await page.waitForTimeout(2000)
        await page.goto(`${baseUrl}/quick-actions`);  // Navigate to quick-actions page
        await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();  // Navigate to Users section
        await page.getByRole('link', { name: 'Teachers' }).first().click();  // Select Teachers

        await page.evaluate(() => {
            const table = document.getElementById('table-container');  // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
            }
        });
        await page.waitForTimeout(4000)
        await page.locator('td:nth-child(14)').click();  // Click on the ellipsis for the teacher
        await page.getByText('Deactivate User').click(); // Click on 'Deactivate User'
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Password').click();  // Enter the password
        await page.getByPlaceholder('Password').fill('e2e@Password');
        await page.getByRole('button', { name: 'Deactivate' }).click();  // Click 'Deactivate'
        await page.waitForTimeout(3000)

    });

});
