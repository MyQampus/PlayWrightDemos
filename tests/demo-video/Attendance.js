import { fillInputAfterLabel, timeClick, closeToastMessage } from "./utils";
import { student, DEFAULT_SECTION, DEFAULT_CLASS } from "./userData.js";

export async function AddCampusAttendance(page) {
  //Mark Attendance
  await page
    .locator("div")
    .filter({ hasText: /^Attendance$/ })
    .nth(1)
    .click();
  await page.getByText("Campus Attendance").click();
  await page.getByRole("link", { name: "Campus Attendance" }).click();
  await page.getByRole("button", { name: "Mark Attendance In" }).click();
  await page
    .locator(".flex > div:nth-child(2) > div > .relative > div > div")
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^01$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "PM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Student$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: `${student.firstName[0]}${student.lastName[0]}${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}` }).click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
  await closeToastMessage(page);
  await page.getByRole("button", { name: "Mark Attendance Out" }).click();
  await page
    .locator(".flex > div:nth-child(2) > div > .relative > div > div")
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^01$/ }).first().click();
  await page.locator('.minutes > div:nth-child(31)').click();
  await timeClick(page, "PM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Student$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: `${student.firstName[0]}${student.lastName[0]}${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}` }).click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
  await closeToastMessage(page);
}
export async function AddSectionAttendance(page) {
  //Add Section Attendance
  await page.getByRole("link", { name: "Section Attendance" }).click();
  await page.getByRole("button", { name: "Mark Section Attendance" }).click();
  await fillInputAfterLabel(page, "Section *", DEFAULT_SECTION, "singleSelect");
  await fillInputAfterLabel(page, "Attendance Title *", "Morning", "text");
  await page
    .getByRole("row", { name: `${student.firstName[0]}${student.lastName[0]} ${student.firstName} ${student.lastName}`,exact: true })
    .locator("span")
    .nth(3)
    .click();
  await page.getByRole("button", { name: "Submit" }).click();
}
export async function AddPeriodAttendance(page) {
  //add period attendance
  await page.getByText("Period Attendance").click();
  await page.getByRole("button", { name: "Mark Attendance" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Current Time Table$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: "English: 11:00 AM - 11:45 AM" })
    .click();
  await page
    .getByRole("cell", { name: "Present" })
    .locator("label span")
    .click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
}
