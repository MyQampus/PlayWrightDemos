export async function AddSupportQuery(page) {
  await page.waitForTimeout(2000);
  await page.locator('.min-w-1 > section > div > div').first().click();
  await page.locator('section').filter({ hasText: /^9th class9th class10 Class$/ }).getByRole('img').nth(2).click();
  await page
    .locator("div")
    .filter({ hasText: /^Support Query$/ })
    .nth(1)
    .click();
  //Add Support Query Type
  await page.getByRole("link", { name: "Support Query Types" }).click();
  await page.getByRole("button", { name: "Add Support Query Type" }).click();
  await page.getByPlaceholder("Query Type").click();
  await page.getByPlaceholder("Query Type").fill("Late Arrival");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("Students are not coming to school ");
  await page.getByRole("button", { name: "Save" }).click();
  //Add Support Query
  await page.getByRole("link", { name: "Support Query", exact: true }).click();
  await page.getByRole("button", { name: "Add Support Query" }).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("Report");
  await page.getByPlaceholder("Description").click();
  await page.getByPlaceholder("Description").fill("Student arrival report");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "Late Arrival" }).click();
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
  await page
    .locator("div:nth-child(3) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "ZAzaeem Ali" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "DRdanish rasheed" }).click();
  await page.locator("textarea").click();
  await page
    .locator("textarea")
    .fill("Hi this is query about the student late arrival.");
  await page.getByRole("button", { name: "Create" }).click();
  await page.getByPlaceholder("Type your message..").click();
  await page.getByPlaceholder("Type your message..").fill("ok");
  await page.getByRole("button", { name: "Send" }).click();
}
