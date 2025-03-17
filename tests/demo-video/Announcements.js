import { closeToastMessage } from "./utils.js";

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
  await page.getByPlaceholder("Write").click();
  await page.getByPlaceholder("Write").fill("Exam");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("MidTerm Exam Date are announce");
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
  await page
    .locator("div")
    .filter({ hasText: /^Select Announcement Types$/ })
    .nth(3)
    .click();
  await page.locator("li").filter({ hasText: "Exam" }).click();
  await page.getByPlaceholder("Write").click();
  await page.getByPlaceholder("Write").fill("New");
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
  await page
    .locator("div")
    .filter({ hasText: /^Select Announcement Types$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Exam" }).click();
  await page.getByPlaceholder("Write").click();
  await page.getByPlaceholder("Write").fill("new");
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
    await page
    .locator("div")
    .filter({ hasText: /^Select Announcement Types$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Exam" }).click();
  await page.getByPlaceholder("Write").click();
  await page.getByPlaceholder("Write").fill("Parents");
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
    await page
    .locator("div")
    .filter({ hasText: /^Select Announcement Types$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Exam" }).click();
  await page.getByPlaceholder("Write").click();
  await page.getByPlaceholder("Write").fill("Teachers");
  await page.locator("textarea").click();
  await page.locator("textarea").fill("mid term exam date sheet is announced");
  await page.getByRole("button", { name: "Send" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);
}
