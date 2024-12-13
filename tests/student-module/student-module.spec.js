import { test } from '@playwright/test';
import { baseUrl,password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.describe('Test of Student Module', () => {
    test.describe.configure({mode:'serial'})
    test.skip('test of add Guardian for student', async ({ page }) => {
        // Go to the Quick Action.
        await page.goto(`${baseUrl}/quick-actions`)
        // Select Campus
        await page.getByText('Select Campus', { exact: true }).click();
        await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
        /*
         * Goto => Guardians
         * Click => Add Guardian
         * Fill out: First Name and Last Name
         * Fill out: Email
         * Click => Save Button
        */
        await page.goto(`${baseUrl}/guardians`);
        await page.getByRole('button', { name: 'Add Guardians' }).click();
        await page.getByPlaceholder('Enter First Name').fill('Guardian');
        await page.getByPlaceholder('Enter Last Name').fill('for student');
        await page.getByPlaceholder('Email').fill('gardianforstudent@gmail.com');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(1000)
    });
    test.skip('test for add student', async ({ page }) => {
        // Goto the Qauick Action
        await page.goto(`${baseUrl}/quick-actions`)
        // Select Campus
        await page.getByText('Select Campus', { exact: true }).click();
        await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
        /*
         * Goto => Student
         * Click => Add Student
         * Fill out: First Name and Last Name
         * Fill out: Email
         * Click => Add Button
         * Click Skip Button For no add Gurdain
         * Click => Close Button
        */
        await page.goto(`${baseUrl}/students`);
        await page.getByRole('button', { name: 'Add Student' }).click();
        await page.getByPlaceholder('Enter First Name').fill('Student');
        await page.getByPlaceholder('Enter Last Name').fill('Add');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill('studadd@gmail.com');
        await page.getByRole('button', { name: 'Add', exact: true }).click();
        await page.getByRole('button', { name: 'Skip' }).click();
        await page.getByRole('button', { name: 'Close' }).click();
        /*
         * Goto => Action Button
         * Click => Enrollment LI
         * Click => Select Class
         * Click => Select Section
         * Click => Save Button
        */
        await page.getByRole('row', { name: 'studadd@gmail.com' }).locator('td:nth-child(15)').click()
        await page.locator('li').filter({ hasText: 'Enrollment' }).click();
        await page.getByText('Select', { exact: true }).first().click();
        await page.locator('li').filter({ hasText: '10th' }).click();
        await page.getByText('Select', { exact: true }).click();
        await page.locator('li').filter({ hasText: 'Section A' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        /*
         * Goto => Action Button
         * Click => Edit LI
         * Fill out: First Name and Last Name
         * Click => Update Button
        */
        await page.getByRole('row', { name: 'studadd@gmail.com' }).locator('td:nth-child(15)').click()
        await page.getByText('Edit', { exact: true }).click();
        await page.getByPlaceholder('Enter First Name').fill('Add');
        await page.getByPlaceholder('Enter Last Name').fill('Student');
        await page.getByRole('button', { name: 'Update' }).click();
        await page.waitForTimeout(500)
        /*
         * Goto => Action Button
         * Click => Associate Guardian LI
         * Clik => Select and select to the Gardian Student
         * Fill out : Rrlation
         * Click => Associate Button
        */
        await page.getByRole('row', { name: 'studadd@gmail.com' }).locator('td:nth-child(15)').click()
        await page.locator('li').filter({ hasText: 'Associate Guardian' }).click();
        await page.getByText('Select', { exact: true }).click();
        await page.locator('li').filter({ hasText: 'GFGuardian for student' }).click();
        await page.getByPlaceholder('Relation').fill('Father');
        await page.getByRole('button', { name: 'Associate' }).click();
        /*
         * Goto => Action Button
         * Click => Disable Button
         * Click => Disable Button
        */
        await page.getByRole('row', { name: 'studadd@gmail.com' }).locator('td:nth-child(15)').click()
        await page.locator('li').filter({ hasText: 'Disable Login' }).click();
        await page.getByRole('button', { name: 'Disable' }).click();
        /*
         * Goto => Action Button
         * Click => Enable Button
         * Click => Enable Button
        */
        await page.getByRole('row', { name: 'studadd@gmail.com' }).locator('td:nth-child(15)').click()
        await page.locator('li').filter({ hasText: 'Enable Login' }).click();
        await page.getByRole('button', { name: 'Enable' }).click();
        /*
         * Goto => Action Button
         * Fill out : Password
         * Click => Deactive Button
        */
        await page.getByRole('row', { name: 'studadd@gmail.com' }).locator('td:nth-child(15)').click()
        await page.waitForTimeout(500)
        await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Deactivate' }).click();
        await page.waitForTimeout(500)
        /*
         * Goto => Guardian
         * Click => Action Button
         * Click => Deactivate LI
         * Fill out : Password
         * Click => Deactive Button
        */
        await page.getByText('Guardians', { exact: true }).click();
        await page.getByRole('row', { name: 'gardianforstudent@gmail.com' }).locator('td:nth-child(11)').click()
        await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Deactivate' }).click();
        await page.waitForTimeout(500)
    })
    
})