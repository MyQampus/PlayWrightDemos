import { fillInputAfterLabel } from "./utils.js";

export async function AddCampus(page) {
  //add campus
  await page
    .locator("div")
    .filter({ hasText: /^Select Campus$/ })
    .nth(2)
    .click();
  await page.getByText("pioneer").click();
}
export async function AddClass(page) {
  // add classes
  await page.getByRole("link", { name: "Classes" }).nth(1).click();
  await page.getByRole("button", { name: "Add Class" }).click();
  await fillInputAfterLabel(page, "Class Title *", "9th class", "text");
  await fillInputAfterLabel(
    page,
    "Class Description",
    "boys 9th class",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddSection(page) {
  //add section
  await page.getByRole("link", { name: "Sections" }).click();
  await page.getByRole("button", { name: "Add Section" }).click();
  await fillInputAfterLabel(page, "Section Name", "a section", "text");
  await fillInputAfterLabel(page, "Section Description", "section for boys", "text");
  await fillInputAfterLabel(page, "Class *", "9th class", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddRoom(page) {
  //add room
  await page.getByRole("link", { name: "Rooms" }).click();
  await page.getByRole("button", { name: "Add Room" }).click();
  await page.getByPlaceholder("Room Title").click();
  await page.getByPlaceholder("Room Title").fill("Room 1");
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddGradingStructure(page) {
  // add grading structure flow
  await page
    .locator("div")
    .filter({ hasText: /^Grading Structures$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Non GPA Grading" }).click();
  await page.getByRole("button", { name: "Add Structure" }).click();
  await page.getByPlaceholder("Title", { exact: true }).click();
  await page
    .getByPlaceholder("Title", { exact: true })
    .fill("PassAndFail Grading");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill(
      "A simple grading structure where students are evaluated based on whether they meet the required criteria."
    );
  await page.locator('input[name="GRADE_TITLE \\+ 0"]').click();
  await page.locator('input[name="GRADE_TITLE \\+ 0"]').fill("A");
  await page.getByRole("button", { name: "Add New Grade" }).click();
  await page.locator('input[name="GRADE_TITLE \\+ 1"]').click();
  await page.locator('input[name="GRADE_TITLE \\+ 1"]').fill("B");
  await page.locator('input[name="GRADE_VAL \\+ 1"]').click();
  await page.locator('input[name="GRADE_VAL \\+ 1"]').fill("80");
  await page.getByRole("button", { name: "Add New Grade" }).click();
  await page.locator('input[name="GRADE_TITLE \\+ 2"]').click();
  await page.locator('input[name="GRADE_TITLE \\+ 2"]').fill("C");
  await page.locator('input[name="GRADE_VAL \\+ 2"]').click();
  await page.locator('input[name="GRADE_VAL \\+ 2"]').fill("60");
  await page.locator('input[name="GRADE_TITLE \\+ 3"]').click();
  await page.locator('input[name="GRADE_TITLE \\+ 3"]').fill("F");
  await page.getByRole("button", { name: "Save" }).click();
  await page.waitForTimeout(1000);
  await page.locator(".w-full > div > div > .w-full").first().click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Exam Result$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Subject Result" }).click();
  await page.getByRole("button", { name: "Add Subject Result" }).click();
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByRole("button", { name: "Cancel" }).click();
}
