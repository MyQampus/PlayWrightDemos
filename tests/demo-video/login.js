import SETUP_CONSTANTS from "../../constants/setup-constants.js";
import { expect } from "@playwright/test";
import { timeClick, fillInputAfterLabel } from "./utils.js";
export async function loginSetup(page, baseUrl, email, domain, password) {
  await page.goto(`${baseUrl}/signin`);

  // Fill in login details
  await page.type("[placeholder='Email']", email, { delay: 100 });
  await page
    .locator("div")
    .filter({ hasText: /^Institute Sub-Domain$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "E2e school" }).click();
  await page.type("[placeholder='Password']", password, { delay: 100 });
  await page.click("button:has-text('Log in')");

  await page.waitForTimeout(500);

  //Check local storage for signUpSlider flag
  const signUpSlider = await page.evaluate(() =>
    localStorage.getItem("signUpSlider")
  );

  if (signUpSlider === "true") {
    await expect(page).toHaveURL(`${baseUrl}/setup-slider`);
  await page
    .getByRole("heading", { name: "Multiple Campuses" })
    .locator("label div")
    .click();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByPlaceholder("Campus Name").fill("Poineer");
  await page.locator('.grid > div > div > .relative > div > .border').first().click();
  await page.locator("div").filter({ hasText: /^08$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "AM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.locator('.grid > div:nth-child(2) > div > .relative > div > .border').click();
  await page.locator("div").filter({ hasText: /^02$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "PM");
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Class Name", "Class One", "text");
  await fillInputAfterLabel(page, "Section", "Alpha", "text");
  // await page.getByPlaceholder("Class Name").click();
  // await page.getByPlaceholder("Class Name").fill("Class One");
  // await page.getByPlaceholder("Section").click();
  // await page.getByPlaceholder("Section").fill("Alpha");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Campus Attendance$/ })
    .locator("label div")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Period Attendance$/ })
    .locator("label div")
    .click();
  await page
    .locator("div:nth-child(4) > div > .panel-body > .switch > .slider")
    .click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByRole("banner").getByRole("img").nth(1).click();
}
// await page.click("button:has-text('Next')");
// await page.fill("[placeholder='Campus Name']", "pioneer");
// await page.locator("div:nth-child(2) > div > .border").first().click();
// await page.locator("div").filter({ hasText: /^08$/ }).first().click();
// await page.locator("div").filter({ hasText: /^00$/ }).click();
// await timeClick(page, "AM");
// await page.getByRole("button", { name: "Apply" }).click();
// await page
//   .locator(".grid > div:nth-child(2) > div > .relative > div > .border")
//   .click();
// await page.locator("div").filter({ hasText: /^01$/ }).first().click();
// await page.locator("div").filter({ hasText: /^00$/ }).click();
// await timeClick(page, "PM");
// await page.getByRole("button", { name: "Apply" }).click();
// await page.click("button:has-text('Next')");
// await page.fill(
//   "[placeholder='Class Name']",
//   SETUP_CONSTANTS.DEFAULT_CLASS
// );
// await page.fill("[placeholder='Section']", SETUP_CONSTANTS.DEFAULT_SECTION);
// await page.click("button:has-text('Confirm')", { timeout: 500 });
// await page.waitForTimeout(500);
// }
 else {
  await expect(page).toHaveURL(`${baseUrl}/quick-actions`);
}}
