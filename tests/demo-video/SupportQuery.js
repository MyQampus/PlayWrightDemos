import { fillInputAfterLabel, closeToastMessage } from "./utils";
import { teacher, student, guardian } from "./userData.js";

export async function AddSupportQuery(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Support Query$/ })
    .nth(1)
    .click();
  //Add Support Query Type
  await page.getByRole("link", { name: "Support Query Types" }).click();
  await page.getByRole("button", { name: "Add Support Query Type" }).click();
  await fillInputAfterLabel(page, "Query Type *", "Performance", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Discuss the performance of the student",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);

  //Add Support Query
  await page.getByRole("link", { name: "Support Query", exact: true }).click();
  await page.getByRole("button", { name: "Add Support Query" }).click();
  await fillInputAfterLabel(page, "Title *", "Performance Report", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Student Report",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Support Query *",
    "Performance",
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Teacher *", `${teacher.firstName[0]}${teacher.lastName[0]}${teacher.firstName.toLowerCase()} ${teacher.lastName.toLowerCase()}`, "singleSelect");
  await fillInputAfterLabel(
    page,
    "Guardian *",
    `${guardian.firstName[0]}${guardian.lastName[0]}${guardian.firstName.toLowerCase()} ${guardian.lastName.toLowerCase()}`,
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Student", `${student.firstName[0]}${student.lastName[0]}${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`, "singleSelect");
  await page.locator("textarea").click();
  await page
    .locator("textarea")
    .fill("Hi! We'd love to connect and share valuable insights about Benjamin's progress.");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);

  await page.getByPlaceholder("Type your message..").click();
  await page.getByPlaceholder("Type your message..").fill("Let’s build their brighter future—together.");
  await page.getByRole("button", { name: "Send" }).click();
}