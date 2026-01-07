import { fillInputAfterLabel, closeToastMessage } from "./utils.js";
import { DEFAULT_CLASS, DEFAULT_SECTION } from "./userData.js";

export async function AddCampus(page) {
  //add campus
  await page
    .locator("div")
    .filter({ hasText: /^Select Campus$/ })
    .nth(2)
    .click();
  await page.locator('li').filter({ hasText: 'Poineer' }).click();
}
export async function AddClass(page) {
  // add classes
  await page.getByRole("link", { name: "Classes" }).nth(1).click();
  await page.getByRole("button", { name: "Add Class" }).click();
  await fillInputAfterLabel(page, "Class Title *", DEFAULT_CLASS, "text");
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
  await fillInputAfterLabel(page, "Section Title *", DEFAULT_SECTION, "text");
  await fillInputAfterLabel(
    page,
    "Section Description",
    "practical",
    "text"
  );
  await fillInputAfterLabel(page, "Class *", DEFAULT_CLASS, "singleSelect");
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
