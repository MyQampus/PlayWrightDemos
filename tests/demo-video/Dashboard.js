export async function Dashboard(page) {
  await page.getByRole("link", { name: "Dashboard" }).click();

  await page
    .locator("#campusAttendance div")
    .filter({ hasText: "Campus Attendance Filters" })
    .first()
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator("#sectionAttendance div")
    .filter({ hasText: "Section Attendance Filters" })
    .first()
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator("#periodAttendance div")
    .filter({ hasText: "Period Attendance Filters" })
    .first()
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator("#timetable div")
    .filter({ hasText: "Timetable Filters pioneer8 -" })
    .first()
    .click();
  await page.waitForTimeout(1000);
  await page.locator("#exams").click();
  await page.waitForTimeout(1000);
}
