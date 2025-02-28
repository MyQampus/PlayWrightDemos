import SETUP_CONSTANTS from "../../constants/setup-constants.js";
import { expect } from "@playwright/test";

export async function loginSetup(page, baseUrl, email, domain, password) {
  await page.goto(`${baseUrl}/signin`);

  // Fill in login details
  await page.fill("[placeholder='Email']", email);
  await page
    .getByPlaceholder("Institute sub-domain")
    .fill(domain, { force: true });
  await page.fill("[placeholder='Password']", password);
  await page.click("button:has-text('Log in')");

  await page.waitForTimeout(500);

  // Check local storage for signUpSlider flag
  const signUpSlider = await page.evaluate(() =>
    localStorage.getItem("signUpSlider")
  );

  if (signUpSlider === "true") {
    await expect(page).toHaveURL(`${baseUrl}/setup-slider`);

    // Generate dynamic email
    const dynamicEmail = `testing${Math.floor(Date.now() / 1000)}@gmail.com`;
    await page.fill("[placeholder='Email']", dynamicEmail);
    await page.click("button:has-text('Next')");
    await page.fill("[placeholder='Campus Name']", "pioneer");
    await page.click("button:has-text('Next')");
    await page.fill(
      "[placeholder='Class Name']",
      SETUP_CONSTANTS.DEFAULT_CLASS
    );
    await page.fill("[placeholder='Section']", SETUP_CONSTANTS.DEFAULT_SECTION);
    await page.click("button:has-text('Confirm')", { timeout: 500 });
    await page.waitForTimeout(500);
  } else {
    await expect(page).toHaveURL(`${baseUrl}/quick-actions`);
  }
}
