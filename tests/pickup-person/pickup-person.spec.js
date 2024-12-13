import { test } from '@playwright/test';
import { baseUrl, password } from '../../.env.js';
import SETUP_CONSTANTS from '../../constants/setup-constants.js';
import { selectCampusAndSection } from '../../utils/utiils.js';

test.describe.configure({mode: "serial"});
test.describe("Test Case of Pickup Person", () => {
  test.skip("Add student for Pickup person", async ({ page }) => {
         /*
         * Goto quick Action
         * Click => Select Campus
         * Select Campus
         * Select Class and Section 
         */
        await selectCampusAndSection(page);
         /*
         * Goto student pge
         * Click => Add Student
         * Fill out: First and Last Name
         * Fill out: Email
         * Click => Add Button
         * Click => Cancel Button
         */
        await page.goto(`${baseUrl}/students`);
        await page.getByRole('button', { name: 'Add Student' }).click();
        await page.getByPlaceholder('Enter First Name').fill('shahzaib');
        await page.getByPlaceholder('Enter Last Name').fill('Aslam');
        await page.getByPlaceholder('Email').fill('shahzaib@gmail.com');
        await page.getByRole('button', { name: 'Add', exact: true }).click();
        await page.getByRole('button', { name: 'Cancel' }).click();
        await page.waitForTimeout(1000)
    });


    test.skip("Add Pickup person", async ({ page }) => {
        await page.goto(`${baseUrl}/quick-actions`);
         /*
         * Goto quick Action
         * Click => Select Campus
         * Select Campus
         */
        await page.getByText("Select Campus", { exact: true }).click();
        await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
         /*
         * Goto Pickup pge
         * Click => Add Pickup person
         * Fill out: First and Last Name
         * Fill out: Email
         * Click => Save Button
         */
        await page.goto(`${baseUrl}/pickup-person`);
        await page.getByRole('button', { name: 'Add Student Pickup Person' }).click();
        await page.getByPlaceholder('Enter First Name').fill('Nafees');
        await page.getByPlaceholder('Enter Last Name').fill('Ahmad');
        await page.getByPlaceholder('Email').fill('nafees@gmail.com');
        await page.getByRole('button', { name: 'Save' }).click();
         /*
         * Click => Action
         * Select => Edit LI
         * Fill out: First and Last Name
         * Fill out: Email
         * Click => Update Button
         */
        await page.getByRole('row', { name: 'nafees@gmail.com' }).locator('td:nth-child(11)').click();
        await page.locator('li').filter({ hasText: 'Edit' }).click();
        await page.getByPlaceholder('Enter First Name').fill('Ahmad');
        await page.getByPlaceholder('Enter Last Name').fill('Nafees');
        await page.getByRole('button', { name: 'Update' }).click();
        await page.waitForTimeout(1000)
        /*
         * Click => Action
         * Select => Disable LI
         * Click => Disable Button
         */
        await page.getByRole('row', { name: 'nafees@gmail.com' }).locator('td:nth-child(11)').click();
        await page.locator('li').filter({ hasText: 'Disable Login' }).click();
        await page.getByRole('button', { name: 'Disable' }).click();
         /*
         * Click => Action
         * Select => Enable LI
         * Click => Enable Button
         */
        await page.getByRole('row', { name: 'nafees@gmail.com' }).locator('td:nth-child(11)').click();
        await page.locator('li').filter({ hasText: 'Enable Login' }).click();
        await page.getByRole('button', { name: 'Enable' }).click();
        await page.waitForTimeout(1000)
        /*
         * Click => Action
         * Select => Assosiate LI
         * Click => Select
         * Select => Student
         * Fill out: Relation
         * Click => Save Button
         */
        await page.getByRole('row', { name: 'nafees@gmail.com' }).locator('td:nth-child(11)').click();
        await page.locator('li').filter({ hasText: 'Assosiate Student' }).click();
        await page.getByText('Select', { exact: true }).click();
        await page.locator('li').filter({ hasText: 'SAshahzaib Aslam' }).click();
        await page.getByPlaceholder('Relation with Student').fill('father');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(1000)
        /*
         * Click => Action
         * Select => Deactive LI
         * Fill out: Password
         * Click => Deactive Button
         */
        await page.getByRole('row', { name: 'nafees@gmail.com' }).locator('td:nth-child(11)').click();
        await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Deactivate' }).click();
        await page.waitForTimeout(2000)
    });
    test.skip("Deactive student", async ({ page }) => {
         /*
         * Goto quick Action
         * Click => Select Campus
         * Select Campus
         * Select Class and Section 
         */
        await selectCampusAndSection(page);
         /*
         * Goto => Student Page
         * Click => Action
         * Select => Deactive LI
         * Fill out: Password
         * Click => Deactive Button
         */
        await page.goto(`${baseUrl}/students`);
        await page.getByRole('row', { name: 'shahzaib@gmail.com' }).locator('td:nth-child(13)').click();
        await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Deactivate' }).click();
        await page.waitForTimeout(2000)
    });
})