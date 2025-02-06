export async function AddExamType(page) {
    // add exam type
    await page
      .locator("div")
      .filter({ hasText: /^Exam Planner$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Exam Types" }).click();
    await page.getByRole("button", { name: "Add Exam Type" }).click();
    await page.getByPlaceholder("Exam Type").click();
    await page.getByPlaceholder("Exam Type").fill("Annual");
    await page.getByPlaceholder("Description").click();
    await page
      .getByPlaceholder("Description")
      .fill("Held Annual Exam in December");
    await page.getByRole("button", { name: "Save" }).click();
}
