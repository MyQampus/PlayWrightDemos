import {fillInputAfterLabel, closeToastMessage } from "./utils.js";

export async function AddAppointmentCategories(page) {
  //Add Appointment Categories
  await page.getByRole('heading', { name: 'Appointments' }).click();
  await page.getByRole('link', { name: 'Appointment Categories' }).click();
  await page.getByRole('button', { name: 'Add Appointment Categories' }).click();
  await fillInputAfterLabel(page, 'Appointment Categories *', 'Parent Teacher Conference', 'text');
  await fillInputAfterLabel(page, 'Description', 'Discuss student academic performance', 'text');
  await page.getByRole('button', { name: 'Save' }).click();
  await closeToastMessage(page);
}
  export async function AddAppoinmentAvailability(page) {
  //Add Appointment Availability
  await page.getByText('Appointment Availability').click();
  await page.getByRole('button', { name: 'Add Appointment Availability' }).click();
  await fillInputAfterLabel(page, 'Title *', 'Mid Year Review', 'text');
  await fillInputAfterLabel(page, 'Description', 'Evaluate student progress', 'text');
  await page.getByRole('button', { name: 'Select Date' }).first().click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('div').filter({ hasText: /^Select Date$/ }).first().click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await fillInputAfterLabel(page, 'Category *', 'Parent Teacher Conference', 'singleSelect');
  await fillInputAfterLabel(page, 'Teacher *', 'Michael Johnson', 'singleSelect');
  await page.getByRole('button', { name: 'Save' }).click();
  await closeToastMessage(page);
  await page.getByText('Mid Year Review').click();
}