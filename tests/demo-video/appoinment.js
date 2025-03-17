import { closeToastMessage } from "./utils.js";

export async function AddAppoinment(page) {
  await page.getByRole('heading', { name: 'Appointments' }).click();
  await page.getByRole('link', { name: 'Appointment Categories' }).click();
  await page.getByRole('button', { name: 'Add Appointment Categories' }).click();
  await page.getByPlaceholder('Appointment Categories').click();
  await page.getByPlaceholder('Appointment Categories').fill('Parent Teacher Conference');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Discuss student academic performance');
  await page.getByRole('button', { name: 'Save' }).click();
  await closeToastMessage(page);
  await page.getByText('Appointment Availability').click();
  await page.getByRole('button', { name: 'Add Appointment Availability' }).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('Mid Year Review');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Evaluate student progress');
  await page.getByRole('button', { name: 'Select Date' }).first().click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('div').filter({ hasText: /^Select Date$/ }).first().click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('div').filter({ hasText: /^Select Category$/ }).nth(3).click();
  await page.getByText('Parent Teacher Conference').click();
  await page.getByText('Select Teacher').click();
  await page.locator('li').filter({ hasText: 'John Doe' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await closeToastMessage(page);
  await page.getByText('Mid Year Review').click();
  await waitForTimeout(1000);
}
