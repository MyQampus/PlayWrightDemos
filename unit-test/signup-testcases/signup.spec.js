import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.myqampus.com/signin');
  await page.goto('https://dev.myqampus.com/');
  await page.getByRole('button', { name: 'LogIn / SignUp' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Abdul');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Rehman');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('abdul23@yopmail.com');
  await page.getByPlaceholder('Institute Name').click();
  await page.getByPlaceholder('Institute Name').fill('ilm');
  await page.getByRole('button', { name: 'Register' }).click();
});