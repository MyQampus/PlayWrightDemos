import { test, expect } from '@playwright/test';
import { baseUrl, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'
import { selectCampus } from "../../utils/utiils.js"
import { DiffieHellmanGroup } from 'crypto';

test.describe.configure({ mode: "serial" });


test.describe("Staff Module", () => {
  console.log(test.beforeEach, 'testtesttesttest');
  test.beforeEach(async ({ page }) => {
    console.log("Hello", selectCampus)
    await selectCampus(page)
  })
  test.skip('Create Staff', async ({ page }) => {
    /*
    click => Add staff
    click first name
    enter info in field
    click on save button
    */
    await page.goto(`${baseUrl}/staff`)

    await page.getByRole('button', { name: 'Add Staff' }).click();
    await page.getByPlaceholder('Enter First Name').click();
    await page.getByPlaceholder('Enter First Name').fill('Add');
    await page.getByPlaceholder('Enter Last Name').click();
    await page.getByPlaceholder('Enter Last Name').fill('staff');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('adstaf@gmail.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000)
  });
  test.skip('Filter Component', async ({ page }) => {
    /*
    click => filter button
    enter info in fiest field 
    click on apply button
    */
    await page.goto(`${baseUrl}/staff`)

    // await page.locator('form').filter({ hasText: 'Staff' }).getByRole('img').nth(1).click();
    // await page.locator('div').filter({ hasText: /^Filters$/ }).nth(1).click();
    await page.locator('.xl\\:h-11').first().click();

    await page.getByPlaceholder('Search by First Name').fill('Add');
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'Apply' }).click();
  });
  test.skip('Disable/Enable login', async ({ page }) => {
    /* click => filter button
     enter field info
     click on apply button */
    await page.goto(`${baseUrl}/staff`)

    // await page.locator('form').filter({ hasText: 'Staff' }).getByRole('img').nth(1).click();
    // await page.locator('div').filter({ hasText: /^Filters$/ }).nth(1).click();

    // await page.getByPlaceholder('Search by First Name').fill('Add');
    // await page.getByRole('button', { name: 'Apply' }).click();
    /*
    click Action button
    click => Disable Login
    */
    await page.getByRole('row', { name: 'add staff' }).getByRole('img').click();
    await page.locator('li').filter({ hasText: 'Disable Login' }).click();
    await page.getByRole('button', { name: 'Disable' }).click();
    /*
    click Action button
    click => Enable Login
    click => Enable button
    */
    await page.waitForTimeout(1000)
    await page.locator('td:nth-child(12)').click();
    await page.locator('li').filter({ hasText: 'Enable Login' }).click();
    await page.getByRole('button', { name: 'Enable' }).click();
  });
  test.skip('Edit Staff', async ({ page }) => {
    /*
    click Action button
    click => Edit button
    fill out: update first and last name
    click => update button
    */
    await page.goto(`${baseUrl}/staff`)

    // await page.getByRole('row', { name: 'Add staff' }).getByRole('img').click();
    await page.locator('li').filter({ hasText: 'Edit' }).click();
    await page.getByPlaceholder('Enter First Name').click();
    await page.getByPlaceholder('Enter First Name').fill('staff');
    await page.getByPlaceholder('Enter Last Name').click();
    await page.getByPlaceholder('Enter Last Name').fill('add');
    await page.getByPlaceholder('Enter Major Role').click();
    await page.getByPlaceholder('Enter Major Role').fill('manage');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.waitForTimeout(1000)
  });
  test.skip('deactivate staff', async ({ page }) => {
    /*
    click Action button
    click => Deactive List
    */
    await page.goto(`${baseUrl}/staff`)

    await page.waitForTimeout(1000)
    await page.getByRole('row', { name: 'staff add' }).getByRole('img').click();
    await page.locator('li').filter({ hasText: 'Deactivate User' }).click();
    /*
    click Action button
    click => Deactive List
    click = Deactive User and put password
    */
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Deactivate' }).click();
    await page.waitForTimeout(2000)
  });
});