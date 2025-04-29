import SETUP_CONSTANTS from "../../constants/setup-constants.js";
import { expect } from "@playwright/test";

export async function loginSetup(page, baseUrl, email, domain, password) {
  await page.goto(`${baseUrl}/signin`);

  // Fill in login details
  await page.type("[placeholder='Email']", email,{delay : 100});
  await page
    .getByPlaceholder("Institute sub-domain")
    .type(domain,{delay : 100}, { force: true });
  await page.type("[placeholder='Password']", password,{delay : 100});
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
