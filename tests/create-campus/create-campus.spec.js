import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
test.describe.configure({ mode: "serial" });

test.describe('Create update and delete testcases ', () => {

    test('Create campus', async ({ page }) => {
        await page.goto(`${baseUrl}/quick-actions`);

        // Click on 'Campuses' in the list
        await page.getByRole('list').getByText('Campuses').click();

        // Click on 'Add Campus' button
        await page.getByRole('button', { name: 'Add Campus' }).click();

        // Click on 'Title' input field and enter 'Lahore campus'
        await page.getByPlaceholder('Title').click();
        await page.getByPlaceholder('Title').fill('Lahore campus');

        // Click on 'City' input field and enter 'lahore'
        await page.getByPlaceholder('City').click();
        await page.getByPlaceholder('City').fill('lahore');

        // Click on 'Save' button
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 3 seconds to ensure operation completes
        await page.waitForTimeout(3000);
    });

    test('update campus name', async ({ page }) => {
        await page.goto(`${baseUrl}/quick-actions`);

        // Click on 'Campuses' in the list
        await page.getByRole('list').getByText('Campuses').click();
        await page.evaluate(() => {
            const table = document.getElementById('table-container'); // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
            }
        });
        // Wait for 2 seconds for the table to load
        await page.waitForTimeout(5000)

        // Click on the 'Lahore campus' row under 'Title'
       /
        await page.getByRole('row', { name: 'Lahore campus N/A lahore N/A' }).getByRole('img').click();
        await page.getByText('Edit').click();
    
        // Click on 'Edit' button
        await page.getByText('Edit').click();
        await page.getByPlaceholder('Title').click();

        // Click on 'Title' input field and update to 'karachi campus'
        await page.getByPlaceholder('Title').fill('karachi campus');

        // Click on 'Update' button
        await page.getByRole('button', { name: 'Update' }).click();
    });

    test('delete campus name', async ({ page }) => {

        await page.goto(`${baseUrl}/quick-actions`);
        await page.waitForTimeout(3000);

        // await page.goto(`${baseUrl}/quick-actions`)

        // Click on 'Campuses' in the list
        // await page.getByRole('list').getByText('Campuses').click();
        await page.getByRole('list').getByRole('link', { name: 'Campuses' }).click();


        // Scroll horizontally to view all columns
        await page.evaluate(() => {
            const table = document.getElementById('table-container'); // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
            }
        });

        // Wait for 2 seconds for the table to load
        await page.waitForTimeout(3000);

        // Click on the 'Lahore campus' row under 'Title'
        await page.locator('tr:nth-child(2) > td:nth-child(6)').click();

        // Click on 'Deactivate' option in the dropdown menu
        await page.locator('li').filter({ hasText: 'Deactivate' }).click();

        // Click on 'Deactivate' button in the modal
        await page.getByRole('button', { name: 'Deactivate' }).click();
        await page.waitForTimeout(2000);

    });
});
