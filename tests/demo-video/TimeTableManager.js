import {
  fillInputAfterLabel,
  closeToastMessage,
  clickUntilTargetVisible,
  timeClick,
} from "./utils.js";
export async function AddTimeTableAutomator(page) {
  //open Time Table
  await page
    .locator("div")
    .filter({ hasText: /^Time Table Manager$/ })
    .nth(1)
    .click();
  //add time table automator
  await page.getByText("Time Table Automator").click();
  await page.getByRole("button", { name: "Add Time Table Automator" }).click();
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Teacher", "JWjames wilson", "singleSelect");
  await fillInputAfterLabel(page, "Room", "Room 1", "singleSelect");
  await page
    .locator("div")
    .filter({ hasText: /^Select Day$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^thursday$/ })
    .click();
  await page.locator("#TimeTableStartTimeId").click();
  await page.locator("div").filter({ hasText: /^10$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "AM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.locator("#TimeTableEndTimeId").click();
  await page.locator("div").filter({ hasText: /^11$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "AM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddCurrentTimeTable(page) {
  //Add Current Time Table
  await page.getByText("Current Time Table").click();
  await page.getByRole("button", { name: "Add Current Time Table" }).click();
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Teacher", "JWjames wilson", "singleSelect");
  await page.locator(".flex-1 > div > div > .h-11").first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator(".flex > div:nth-child(2) > div > .relative > div > div")
    .first()
    .click();
  await page.locator('.hours > div:nth-child(11)').click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "AM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator(
      "div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator('.hours > div:nth-child(11)').click();
  await page.locator("div").filter({ hasText: /^45$/ }).click();
  await timeClick(page, "AM");
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Room", "Room 1", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  await page
    .locator("div")
    .filter({ hasText: /^Syllabus Manager$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Lesson Planner" }).click();
  await page.getByText("Add lesson").first().click();
  await page.getByText("Pronunciation Basics0English").click();
  await closeToastMessage(page);
}

export async function AddLessonPlanner(page) {
  //add lesson planner
  await page.getByRole("link", { name: "Lesson Planner" }).click();
  await page.getByRole("button", { name: "Add New Lesson" }).click();
  await fillInputAfterLabel(
    page,
    "Lesson Name *",
    "Cultural Communication",
    "text"
  );
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(
    page,
    "Chapter *",
    "Greetings & Essentials",
    "singleSelect"
  );
  await fillInputAfterLabel(
    page,
    "Topic *",
    "Daily Conversations",
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Lesson Number *", "2", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Explore cultural context in language use. Understand formal vs informal registers, regional idioms, and non-verbal communication cues. Role-play scenarios including business meetings, social gatherings, and customer service interactions.",
    "textarea"
  );
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
}
