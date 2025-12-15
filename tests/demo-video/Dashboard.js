export async function Dashboard(page) {
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^campus attendance$/ })
    .nth(1)
    .click();
  await page.waitForTimeout(1000);  
  await page
    .locator("div")
    .filter({ hasText: /^section attendance$/ })
    .nth(2)
    .click();
  await page.waitForTimeout(1000);  
  await page
    .locator("div")
    .filter({ hasText: /^period attendance$/ })
    .nth(1)
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator("div")
    .filter({ hasText: /^timetable$/ })
    .nth(1)
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator("div")
    .filter({ hasText: /^exams$/ })
    .nth(1)
    .click();
  await page.waitForTimeout(1000);
}
