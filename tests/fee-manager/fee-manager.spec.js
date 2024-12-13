import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import { selectCampusAndSection } from "../../utils/utiils.js"
test.describe.configure({ mode: 'serial' });
/*
 * In this test cases we are doing all testcaes in serial
*/
test.describe('fee module test cases ', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await selectCampusAndSection(page)
    });
    test('create student in section', async ({ page }) => {

        // Navigate to Users section
        await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();
        await page.getByRole('list').getByText('Students').click();

        // Click on the 'Add Student' button
        await page.getByRole('button', { name: 'Add Student' }).click();

        // Fill in the First Name field
        await page.getByPlaceholder('Enter First Name').fill('ali');

        // Fill in the Last Name field
        await page.getByPlaceholder('Enter Last Name').fill('raza');

        // Fill in the Email field
        await page.getByPlaceholder('Email').fill('aliraza@gmail.com');

        // Click the 'Add' button to add the student
        await page.getByRole('button', { name: 'Add', exact: true }).click();
        await page.getByRole('button', { name: 'Cancel' }).click();
    });
    test('create fee type', async ({ page }) => {

        // Navigate to the fee types page
        await page.goto(`${baseUrl}/fee/types`);

        // Click on the 'Add Fee Type' button
        await page.getByRole('button', { name: 'Add Fee Type' }).click();

        // Click on the Fee Type input field
        await page.getByPlaceholder('Fee Type').click();

        // Click on the 'Save' button to save the fee type
        await page.getByPlaceholder('Fee Type').fill('monthly fee');

        // Click on the 'Save' button to save the fee type
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(2000)
    });
    test('create discount type', async ({ page }) => {

        // Navigate to the discount types page
        await page.goto(`${baseUrl}/fee/discount-types`);

        // Click on the 'Add Discount Type' button
        await page.getByRole('button', { name: 'Add Discount Type' }).click();

        // Fill in the Discount Title input field with 'sports base'
        await page.getByPlaceholder('Discount Title').fill('sports base');

        // Click on the 'Save' button to save the discount type
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 2 seconds to ensure the discount type is saved
        await page.waitForTimeout(2000);
    });

    test('create section fee', async ({ page }) => {

        // Navigate to the section fee page
        await page.goto(`${baseUrl}/fee/section`);

        // Click on the 'Add Section Fee' button
        await page.getByRole('button', { name: 'Add Section Fee' }).click();

        // Click on the 'Select' dropdown for fee type
        await page.getByText('Select').first().click();
        // Select 'monthly fee' from the dropdown
        await page.getByText('monthly fee', { exact: true }).click();

        // Fill in the fee amount with '150'
        await page.getByPlaceholder('Amount').fill('150');

        // Click on the 'Select Date' button to open the date picker
        await page.getByRole('button', { name: 'Select Date' }).click();
        // we need to change due date every month because we can't create section fee in previous date
//await page.getByText('30').nth(1).click();
        await page.getByText('31', { exact: true }).click();

        await page.getByRole('button', { name: 'Apply' }).click();

        // Click on the 'Select' dropdown for currency
        //await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();

        // Select 'Pakistani Rupee' from the dropdown
       // await page.getByText('Pakistani Rupee').click();

        // Click on the 'Save' button to save the section fee
        await page.getByRole('button', { name: 'Save' }).click()
        await page.waitForTimeout(2000);
    });
    test('received student fee', async ({ page }) => {

        // Navigate to the fee receivable page
        await page.goto(`${baseUrl}/fee/receivable`);

        // Scroll the table horizontally to the end
        await page.evaluate(() => {
            const table = document.getElementById('table-container');  // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
            }
        });
        // Find the row with the name 'AR ali raza' and click the first image (ellipsis)
        await page.getByRole('row', { name: 'AR ali raza' }).getByRole('img').first().click();

        // Click on the 'Accept Payment' option in the dropdown
        await page.locator('#table-container').getByText('Accept Payment').click();

        // Fill in the 'Receiving Amount' with '1'
        await page.getByPlaceholder('Receiving Amount').fill('1');

        // Click on the 'Select Date' button to open the date picker
        await page.getByRole('button', { name: 'Select Date' }).click();

        // Click on the 'Apply' button to confirm the selected date
        await page.getByRole('button', { name: 'Apply' }).click();

        // Click on the 'Accept' button to accept the payment
        await page.getByRole('button', { name: 'Accept' }).click();
    });
    test('add fine to student', async ({ page }) => {

        // Navigate to the fee receivable page
        await page.goto(`${baseUrl}/fee/receivable`);

        // Scroll the table horizontally to the end
        await page.evaluate(() => {
            const table = document.getElementById('table-container');  // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
            }
        });
        // Find the row with the name 'AR ali raza' and click the first image (ellipsis)
        await page.getByRole('row', { name: 'AR ali raza' }).getByRole('img').first().click();

        // Click on the 'Add Fine' option in the dropdown
        await page.getByText('Add Fine').click();

        // Fill in the 'Fine Amount' with '50'
        await page.getByPlaceholder('Fine Amount').fill('50');

        // Click on the 'Fine Reason' field
        await page.getByPlaceholder('Fine Reason').click();

        // Fill in the 'Fine Reason' with 'fighting'
        await page.getByPlaceholder('Fine Reason').fill('fighting ');

        // Click on the 'Add' button to save the fine
        await page.getByRole('button', { name: 'Add', exact: true }).click();
    });
    test('add discount to student', async ({ page }) => {

        // Navigate to the fee receivable page
        await page.goto(`${baseUrl}/fee/receivable`);
        // Scroll the table horizontally to the end
        await page.evaluate(() => {
            const table = document.getElementById('table-container');  // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
            }
        });
        // Find the row with the name 'AR ali raza' and click the first image (ellipsis)
        await page.getByRole('row', { name: 'AR ali raza' }).getByRole('img').first().click();

        // Click on the 'Add Discount' option in the dropdown
        await page.getByText('Add Discount').click();

        // Click on the 'Select' dropdown to choose a discount type
        await page.getByText('Select', { exact: true }).click();

        // Select the discount type 'sports base' from the dropdown
        await page.locator('li').filter({ hasText: 'sports base' }).click();

        // Fill in the 'Discount Amount' with '100'
        await page.getByPlaceholder('Discount Amount').fill('100');

        // Click on the 'Add' button to save the discount
        await page.getByRole('button', { name: 'Add', exact: true }).click();
    });
});
