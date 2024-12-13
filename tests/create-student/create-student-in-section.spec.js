import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'
import { selectCampusAndSection } from "../../utils/utiils.js"

test.describe.configure({ mode: 'serial' });

test.describe('Add Student in section level ', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await selectCampusAndSection(page)
    });

    test.skip('Create student in section', async ({ page }) => {
        await page.goto(`${baseUrl}/students`);
        /*
        * In this test caes we are creating student in section level
        * We are selecting first campus, class and section
        * Go to add student page  and click on add student button
        * Enter Fname and Lname  and email
        * Press add button then press 
        * Next press cancel button because we are not associate student with guardian 
        */
        // await page.getByRole('list').getByText('Students').click();
        await page.getByRole('button', { name: 'Add Student' }).click();
        await page.getByPlaceholder('Enter First Name').fill('abdul');
        await page.getByPlaceholder('Enter Last Name').fill('rahman');
        await page.getByPlaceholder('Email').fill('student@mailinator.com');
        await page.getByRole('button', { name: 'Add', exact: true }).click();
        await page.getByRole('button', { name: 'Cancel' }).click();
    });
    test.skip('update student', async ({ page }) => {
        /*
        * In this testcase we are updating student
        * Go to student page
        * Click on ellipse and click the edit option
        * Now change the filed which you want to change 
        * And press the update buton
  
        */
        //  await selectCampusAndSection(page);
        await page.goto(`${baseUrl}/students`);
        await page.waitForTimeout(1000)
        await page.locator('td:nth-child(14)').first().click();
        await page.getByText('Edit', { exact: true }).click();
        await page.getByPlaceholder('Enter Last Name').click();
        await page.getByPlaceholder('Enter Last Name').fill('Rehman');
        await page.getByRole('button', { name: 'Update' }).click();
    });
    test.skip('Disable login of student account', async ({ page }) => {
        /*
     * In this testcase we are disabling student's login
     * Go to student page
     * Click on ellipse and click the disable login option
     * Press the disable login buton
     */
        await page.goto(`${baseUrl}/students`);
        await page.getByRole('list').getByText('Students').click();
        await page.waitForTimeout(6000);

        await page.locator('td:nth-child(14)').first().click();
        await page.getByText('Disable Login').click();
        await page.getByRole('button', { name: 'Disable' }).click();
    });
    test.skip('deactivate of student account', async ({ page }) => {
        /*
    * In this testcase we are deactivate student
    * Go to student page
    * Click on ellipse and click the deactivate user
    * Enter the own password and press deactivate button
    * If your password is correct then user should be deactivated
    * Otherwise you will receive error msg password is not correct 
    */
        await page.goto(`${baseUrl}/students`);
        await page.getByRole('list').getByText('Students').click();
        await page.locator('td:nth-child(14)').first().click();
        await page.getByText('Deactivate User').click();
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('e2e@Password');
        await page.getByRole('button', { name: 'Deactivate' }).click();
    });
});