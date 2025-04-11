import { fillInputAfterLabel, closeToastMessage } from "./utils.js";

export async function AddAnnouncemnetType(page) {
  await page.waitForTimeout(1000);
  await page.locator(".min-w-1 > section > div > div").first().click();
  await page
    .locator("section")
    .filter({ hasText: /^9th class9th class10 Class$/ })
    .getByRole("img")
    .nth(2)
    .click();

  await page
    .locator("div")
    .filter({ hasText: /^Announcements$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Announcement Types" }).click();
  await page.getByRole("button", { name: "Add Announcement Type" }).click();
  await fillInputAfterLabel(page, "Title *", "Exam", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "MidTerm Exam Date are announce",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddStaffAnnouncemnets(page) {
  //add staff announcement
  await page.getByRole("link", { name: "Announcements" }).click();
  await page.getByRole("button", { name: "Notify" }).click();
  await page.getByRole("button", { name: "Staff" }).click();
  await page
    .locator("label")
    .filter({ hasText: "In-App Notification *" })
    .locator("span")
    .nth(1)
    .click();
  await fillInputAfterLabel(page, "Announcement Type", "Exam", "singleSelect");
  await fillInputAfterLabel(page, "Title *", "Staff", "text");
  await page.locator("textarea").click();
  await page
    .locator("textarea")
    .fill("Date Sheet of midterm exam is announced");
  await page.getByRole("button", { name: "Send" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);
}
export async function AddStudentAnnouncement(page) {
  //add Students Announcement
  await page.getByRole("button", { name: "Notify" }).click();
  await page.getByRole("button", { name: "Student" }).click();
  await page
    .locator("label")
    .filter({ hasText: "In-App Notification *" })
    .locator("span")
    .nth(1)
    .click();
  await fillInputAfterLabel(page, "Announcement Type", "Exam", "singleSelect");
  await fillInputAfterLabel(page, "Title *", "Student", "text");
  await page.locator("textarea").click();
  await page.locator("textarea").fill("mid term exam date sheet is announced");
  await page.getByRole("button", { name: "Send" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);
}
export async function AddGuardianAnnouncement(page) {
  //add Guardian Announcement
  await page.getByRole("button", { name: "Notify" }).click();
  await page.getByRole("button", { name: "Guardian" }).click();
  await page
    .locator("label")
    .filter({ hasText: "In-App Notification *" })
    .locator("span")
    .nth(1)
    .click();
  await fillInputAfterLabel(page, "Announcement Type", "Exam", "singleSelect");
  await fillInputAfterLabel(page, "Title *", "Parents", "text");
  await page.locator("textarea").click();
  await page.locator("textarea").fill("mid term exam date sheet is announced");
  await page.getByRole("button", { name: "Send" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);
}
export async function AddTeacherAnnouncement(page) {
  //add Teacher Announcement
  await page.getByRole("button", { name: "Notify" }).click();
  await page.getByRole("button", { name: "Teacher" }).click();
  await page
    .locator("label")
    .filter({ hasText: "In-App Notification *" })
    .locator("span")
    .nth(1)
    .click();
  await fillInputAfterLabel(page, "Announcement Type", "Exam", "singleSelect");
  await fillInputAfterLabel(page, "Title *", "Teachers", "text");
  await page.locator("textarea").click();
  await page.locator("textarea").fill("mid term exam date sheet is announced");
  await page.getByRole("button", { name: "Send" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);
}
