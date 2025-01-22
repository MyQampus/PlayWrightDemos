import { test, expect } from "@playwright/test";
const { chromium } = require("playwright");

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch({ headless: false }); // Browser launch karein
  const context = await browser.newContext(); // Naya context banayein
  page = await context.newPage(); // Page create karein
});

test("Signup Flow", async ({ page }) => {
  await page.goto("https://dev.myqampus.com/signin");
  await page.waitForTimeout(2000);
  await page.goto("https://dev.myqampus.com/");
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Abdul");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("Rehman");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("abdul23@yopmail.com");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Institute Name").click();
  await page.getByPlaceholder("Institute Name").fill("ilm");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Register" }).click();
});
