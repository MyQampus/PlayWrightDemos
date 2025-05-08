import { fillInputAfterLabel } from "./utils";

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
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("span").filter({ hasText: /^20$/ }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Student$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "DLdavid lodge" }).click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
  await page.getByRole("button", { name: "Mark Attendance Out" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Student$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "DLdavid lodge" }).click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
}
export async function AddSectionAttendance(page) {
  //Add Section Attendance
  await page.getByRole("link", { name: "Section Attendance" }).click();
  await page.getByRole("button", { name: "Mark Section Attendance" }).click();
  await fillInputAfterLabel(page, "Section *", "a section", "singleSelect");
  await fillInputAfterLabel(page, "Attendance Title *", "Morning", "text");
  await page
    .getByRole("row", { name: "JS James Smith" })
    .locator("span")
    .nth(3)
    .click();
  await page.getByRole("button", { name: "Submit" }).click();
}
export async function AddPeriodAttendance(page) {
  //add period attendance
  await page.getByText("Period Attendance").click();
  await page.getByRole("button", { name: "Mark Attendance" }).click();
  await page.locator('div').filter({ hasText: /^Select Current Time Table$/ }).nth(2).click();
  await page.locator(".absolute > .relative").click();
  await page
    .getByRole("cell", { name: "Present" })
    .locator("label span")
    .click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
}

