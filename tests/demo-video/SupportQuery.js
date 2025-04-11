import { fillInputAfterLabel, closeToastMessage } from "./utils";

export async function AddSupportQuery(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Support Query$/ })
    .nth(1)
    .click();
  //Add Support Query Type
  await page.getByRole("link", { name: "Support Query Types" }).click();
  await page.getByRole("button", { name: "Add Support Query Type" }).click();
  await fillInputAfterLabel(page, "Query Type *", "Late Arrival", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Students are late to school",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);

  //Add Support Query
  await page.getByRole("link", { name: "Support Query", exact: true }).click();
  await page.getByRole("button", { name: "Add Support Query" }).click();
  await fillInputAfterLabel(page, "Title *", "Report", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Student arrival report",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Support Query *",
    "Late Arrival",
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Teacher *", "MJmichael johnson", "singleSelect");
  await fillInputAfterLabel(
    page,
    "Guardian *",
    "EJemily Johnson",
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Student", "DLdavid lodge", "singleSelect");
  await page.locator("textarea").click();
  await page
    .locator("textarea")
    .fill("Hi this is query about the student late arrival.");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);

  await page.getByPlaceholder("Type your message..").click();
  await page.getByPlaceholder("Type your message..").fill("ok");
  await page.getByRole("button", { name: "Send" }).click();
}