import { fillInputAfterLabel, closeToastMessage } from "./utils.js";

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
    "Science",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddSection(page) {
  //add section
  await page.getByRole("link", { name: "Sections" }).click();
  await page.getByRole("button", { name: "Add Section" }).click();
  await fillInputAfterLabel(page, "Section Name", "a section", "text");
  await fillInputAfterLabel(
    page,
    "Section Description",
    "practical",
    "text"
  );
  await fillInputAfterLabel(page, "Class *", "9th class", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddRoom(page) {
  //add room
  await page.getByRole("link", { name: "Rooms" }).click();
  await page.getByRole("button", { name: "Add Room" }).click();
  await fillInputAfterLabel(page, "Room Title *", "Room 1", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddGradingStructure(page) {
  // add grading structure flow
  await page.locator('.min-w-1 > section > div > div > div').first().click();
  await page.locator('section').filter({ hasText: /^9th class9th class10 Class$/ }).getByRole('img').nth(2).click();
  await page
    .locator("div")
    .filter({ hasText: /^Grading Structures$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Non GPA Grading" }).click();
  await page.getByRole("button", { name: "Add Structure" }).click();
  await fillInputAfterLabel(page, "Title *", "PassAndFail Grading", "text");
  await fillInputAfterLabel(
    page,
    "Description ",
    "A simple grading structure where students are evaluated based on whether they meet the required criteria.",
    "text"
  );
  await fillInputAfterLabel(page, "Grade Title *", "A", "text", 0);
  await page.getByRole("button", { name: "Add New Grade" }).click();
  await fillInputAfterLabel(page, "Grade Title *", "B", "text", 1);
  await fillInputAfterLabel(page, "Grade Value *", "80", "text", 1);
  await page.getByRole("button", { name: "Add New Grade" }).click();
  await fillInputAfterLabel(page, "Grade Title *", "C", "text", 2);
  await fillInputAfterLabel(page, "Grade Value *", "60", "text", 2);
  await fillInputAfterLabel(page, "Grade Title *", "F", "text", 3);
  await page.getByRole("button", { name: "Save" }).click();
}
