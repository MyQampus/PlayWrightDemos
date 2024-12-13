import { test } from '@playwright/test';
import { baseUrl, } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.skip('test', async ({ page }) => {
    await page.goto(`${baseUrl}/quick-actions`)
    await page.getByText('Select Campus', { exact: true }).click();
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
    await page.getByText('Select Class').first().click();
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CLASS).click();
    await page.getByRole('heading', { name: 'Syllabus Manager' }).click();
    await page.getByRole('link', { name: 'Subjects' }).locator('a').click();
    await page.getByRole('button', { name: 'Add Subjects' }).click();
    await page.getByPlaceholder('Subject Title').click();
    await page.getByPlaceholder('Subject Title').fill('pak-study');
    await page.getByPlaceholder('Concise Name').click();
    await page.getByPlaceholder('Concise Name').fill('ps01');
    await page.getByRole('button', { name: 'Create' }).click();
});