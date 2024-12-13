
import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import SETUP_CONSTANTS from '../../constants/setup-constants.js'

test.skip('create subject for syllabus import', async ({ page }) => {
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
  await page.waitForTimeout(5000)
});
test.skip('add Subject Template', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`);
  await page.goto(`${baseUrl}/quick-actions`);
  await page.waitForTimeout(5000)
  await page.getByRole('heading', { name: 'Syllabus Automater' }).click();
  await page.getByText('Course Provider').click();
  await page.getByRole('button', { name: 'Add Course' }).click();
  await page.getByPlaceholder('Course Name').click();
  await page.getByPlaceholder('Course Name').fill('board lahore');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('div').filter({ hasText: /^Syllabus Automater$/ }).nth(1).click();
  await page.getByText('Subject Syllabus Template').click();
  await page.getByRole('button', { name: 'Add New Template' }).click();
  await page.getByText('Select', { exact: true }).first().click();
  await page.getByText('board lahore').click();
  await page.getByPlaceholder('Subject Title').fill('Programimg fundamental');
  await page.getByPlaceholder('Title', { exact: true }).fill('programming template');
  await page.getByPlaceholder('Grade').fill('10th class');
  await page.getByPlaceholder('Year/Edition').fill('2023/2024');

  // await page.goto(`${baseUrl}/quick-actions`);
  // await page.waitForTimeout(5000)
  // await page.getByRole('heading', { name: 'Syllabus Automater' }).click();
  // await page.getByText('Course Provider').click();
  // await page.getByRole('button', { name: 'Add Course' }).click();
  // await page.getByPlaceholder('Course Name').click();
  // await page.getByPlaceholder('Course Name').fill('board lahore');
  // await page.getByRole('button', { name: 'Create' }).click();
  // await page.getByText('Subject Syllabus Template').click();
  // await page.getByRole('button', { name: 'Add New Template' }).click();
  // await page.locator('.flex > div > .w-full').first().click();
  // await page.locator('li').filter({ hasText: /^board lahore$/ }).click();
  // await page.getByPlaceholder('Subject Title').click();
  // await page.getByPlaceholder('Subject Title').fill('Programimg fundamental');
  // await page.getByPlaceholder('Title', { exact: true }).click();
  // await page.getByPlaceholder('Title', { exact: true }).fill('programming template');
  // await page.getByPlaceholder('Grade').click();
  // await page.getByPlaceholder('Grade').fill('10th class');
  // await page.getByPlaceholder('Year/Edition').click();
  // await page.getByPlaceholder('Year/Edition').fill('2023/2024');
  await page.getByRole('button', { name: 'Create' }).click();
    // Scroll the table horizontally to the end
    await page.evaluate(() => {
      const table = document.getElementById('table-container');  // Get the table element
      if (table) {
          table.scrollLeft = table.scrollWidth;  // Scroll to the end of the table horizontally
      }
  });
  await page.getByText('programming template').click();
  await page.getByRole('button', { name: 'Add Chapters' }).click();
  await page.getByPlaceholder('Chapter Title').click();
  await page.getByPlaceholder('Chapter Title').fill('chapter one');
  await page.getByPlaceholder('Chapter Number').click();
  await page.getByPlaceholder('Chapter Number').fill('1');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Chapters' }).click();
  await page.getByPlaceholder('Chapter Title').click();
  await page.getByPlaceholder('Chapter Title').fill('chapter two');
  await page.getByPlaceholder('Chapter Number').click();
  await page.getByPlaceholder('Chapter Number').fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Topics' }).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();
  await page.getByText('chapter one').nth(1).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('topic one');
  await page.getByPlaceholder('Topic Number').click();
  await page.getByPlaceholder('Topic Number').fill('1');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Topics' }).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();
  await page.locator('li').filter({ hasText: 'chapter one' }).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('topic two');
  await page.getByPlaceholder('Topic Number').click();
  await page.getByPlaceholder('Topic Number').fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Lesson' }).click();
  await page.locator('.flex > div > .w-full').first().click();
  await page.getByText('Theory').click();
  await page.locator('div:nth-child(2) > .min-w-1 > section > div > div > .w-full').click();
  await page.locator('li').filter({ hasText: 'chapter one' }).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();
  await page.getByText('topic one').nth(1).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('lesson one');
  await page.getByPlaceholder('Lesson Number').click();
  await page.getByPlaceholder('Lesson Number').fill('1');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Add Lesson' }).click();
  await page.locator('.flex > div > .w-full').first().click();
  await page.getByText('Theory').nth(1).click();
  await page.locator('div:nth-child(2) > .min-w-1 > section > div > div > .w-full').click();
  await page.getByText('chapter one').nth(4).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();
  await page.getByText('topic one').nth(2).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('lesson  number two');
  await page.getByPlaceholder('Lesson Number').click();
  await page.getByPlaceholder('Lesson Number').fill('2');
  await page.getByRole('button', { name: 'Create' }).click();
});
test.skip('import template in class level', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`);
  await page.waitForTimeout(3000)
  await page.getByText('Select Campus', { exact: true }).click();
  await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
  await page.getByRole('heading', { name: 'Syllabus Automater' }).click();
  await page.getByText('Subject Syllabus Template').click();
  await page.getByRole('row', { name: 'programming template' }).locator('div').nth(1).click();
  await page.getByText('Import').click();
  await page.locator('.min-w-1 > section > div > div').first().click();
  await page.locator('li').filter({ hasText: '10th' }).click();
  await page.locator('div:nth-child(2) > .min-w-1 > section > div > div > .w-full').first().click();
  await page.getByText('Section A').click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(3).click();
  await page.getByText('pak-study').click();
  await page.getByRole('button', { name: 'Import', exact: true }).click();
  await page.waitForTimeout(2000)
});