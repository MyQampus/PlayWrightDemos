import { fillInputAfterLabel } from "./utils";

export async function AddSubject(page) {
  //Add Subject
  await page
    .locator("span")
    .filter({ hasText: "Select Section" })
    .first()
    .click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Syllabus Manager$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Subjects" }).first().click();
  await page.getByRole("button", { name: "Add Subjects" }).click();
  await fillInputAfterLabel(page, "Subject Title *", "English", "text");
  await fillInputAfterLabel(page, "Concise Name *", "EN", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await page
    .getByRole("row", { name: "English EN N/A" })
    .getByRole("img")
    .click();
  await page.getByText("Assign Teacher").click();
  await fillInputAfterLabel(page, "Teachers", "JDjohn doe", "singleSelect");
  await page.locator("header").filter({ hasText: "Enroll Teacher" }).click();
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddChapter(page) {
  //add chapter
  await page.getByRole("link", { name: "Chapters" }).click();
  await page.getByRole("button", { name: "Add New Chapter" }).click();
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Chapter Title *", "Greetings & Essentials", "text");
  await fillInputAfterLabel(page, "Description", "Foundational language building blocks for everyday interactions", "text");
  await fillInputAfterLabel(page, "Chapter Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
}
export async function AddTopic(page) {
  //add topic
  await page.getByRole("link", { name: "Topics" }).click();
  await page.getByRole("button", { name: "Add Topic" }).click();
  await fillInputAfterLabel(page, "Select Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Chapters *", "Greetings & Essentials", "singleSelect");
  await fillInputAfterLabel(page, "Topic Title *", "Daily Conversations", "text");
  await fillInputAfterLabel(page, "Description", "Common phrases and expressions for daily interactions", "text");
  await fillInputAfterLabel(page, "Topic Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
}
export async function AddLesson(page) {
  //add lesson
  await page.getByRole("link", { name: "Lessons" }).click();
  await page.getByRole("button", { name: "Add New Lesson" }).click();
  await fillInputAfterLabel(page, "Lesson Name *", "Pronunciation Basics", "text");
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Chapter *", "Greetings & Essentials", "singleSelect");
  await fillInputAfterLabel(page, "Topic *", "Daily Conversations", "singleSelect");
  await fillInputAfterLabel(page, "Lesson Number *", "1", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Master clear articulation with phonetics exercises. Practice vowel sounds and common diphthongs through interactive tongue-twisters and listening drills. Develop native-like rhythm and intonation patterns.",
    "textarea"
  );
  await page.getByRole("button", { name: "Create" }).click();
}
export async function AddLessonPlanner(page) {
  //add lesson planner
  await page.getByRole("link", { name: "Lesson Planner" }).click();
  await page.getByRole("button", { name: "Add New Lesson" }).click();
  await fillInputAfterLabel(page, "Lesson Name *", "Cultural Communication", "text");
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Chapter *", "Greetings & Essentials", "singleSelect");
  await fillInputAfterLabel(page, "Topic *", "Daily Conversations", "singleSelect");
  await fillInputAfterLabel(page, "Lesson Number *", "2", "text");
  await fillInputAfterLabel(page, "Description", "Explore cultural context in language use. Understand formal vs informal registers, regional idioms, and non-verbal communication cues. Role-play scenarios including business meetings, social gatherings, and customer service interactions.", "textarea");
  await page.getByRole("button", { name: "Create" }).click();
}
export async function AddTimeTableAutomator(page) {
  //open Time Table
  await page
    .locator("div")
    .filter({ hasText: /^Time Table$/ })
    .nth(1)
    .click();
  //add time table automator
  await page.getByText("Time Table Automator").click();
  await page.getByRole("button", { name: "Add Time Table Automator" }).click();
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await fillInputAfterLabel(page, "Teacher", "JDjohn doe", "singleSelect");
  // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await fillInputAfterLabel(page, "Room", "Room 1", "singleSelect");
  // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
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
  await page.getByText("AM", { exact: true }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.locator("#TimeTableEndTimeId").click();
  await page.locator("div").filter({ hasText: /^11$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await page.getByText("AM", { exact: true }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddCurrentTimeTable(page) {
  //Add Current Time Table
  await page.getByText("Current Time Table").click();
  await page.getByRole("button", { name: "Add Current Time Table" }).click();
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(page, "Teacher", "JDjohn doe", "singleSelect");
  await page.locator(".flex-1 > div > div > .h-11").first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^03$/ }).first().click();
  await page.locator("div").filter({ hasText: /^46$/ }).click();
  await page.getByText("PM", { exact: true }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator(
      ".flex > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^04$/ }).first().click();
  await page.locator("div").filter({ hasText: /^46$/ }).click();
  await page.getByText("PM", { exact: true }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Room", "Room 1", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddSubjectInClass(page) {
  // add one more subject at class level
  await page
    .locator("div")
    .filter({ hasText: /^Syllabus Manager$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Subjects" }).click();
  await page.getByRole("button", { name: "Add Subjects" }).click();
  await fillInputAfterLabel(page, "Subject Title *", "Chemistry", "text");
  await fillInputAfterLabel(page, "Concise Name *", "che", "text");


  await page.getByRole("button", { name: "Create" }).click();
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  const subjectAction = await page.locator("#subjectAction0");
  await subjectAction.click();
  await page.locator("#subjectAction0").click();
  // await page.locator("td#subjectAction0 div.icon").click();
  await page.locator("li").filter({ hasText: "Assign Teacher" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "JDjohn doe" }).click();
  await page.locator(".w-full > section > div > div").first().click();
  await page.getByRole("button", { name: "Save" }).click();
}