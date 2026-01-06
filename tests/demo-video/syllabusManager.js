import {
  fillInputAfterLabel,
  closeToastMessage,
  clickUntilTargetVisible,
  timeClick,
} from "./utils.js";
import { teacher } from "./userData.js";
export async function AddSyllabusTemplateProvider(page) {
  // Add Syllabus Automater
  await page
    .locator("div")
    .filter({ hasText: /^Syllabus Manager$/ })
    .nth(1)
    .click();
  await page.getByText("Syllabus Template Provider").click();
  await page.getByRole("button", { name: "Add Syllabus Template" }).click();
  await page.getByPlaceholder("Add Syllabus Template").click();
  await fillInputAfterLabel(
    page,
    "Add Syllabus Template Provider Name *",
    "Common Core Standards",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Syllabus Template Provider Desctiption",
    "A course based on US Common Core standards, covering all key subjects.",
    "text"
  );
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
}
export async function AddSubjectSyllabusTemplate(page) {
  //Add subject syllabus template
  await page.getByRole("link", { name: "Subject Syllabus Template" }).click();
  await page.getByRole("button", { name: "Add New Template" }).click();

  await fillInputAfterLabel(
    page,
    "Syllabus Template Provider *",
    "Common Core Standards",
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Subject Title *", "Mathematics", "text", 0);

  await fillInputAfterLabel(page, "Title *", "Algebra 1", "text", 1);

  await fillInputAfterLabel(page, "Grade *", "Tenth", "text");
  await fillInputAfterLabel(page, "Year/Edition *", "2023", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
  await page.getByRole("cell", { name: "Algebra 1" }).click();
  await page.getByRole("button", { name: "Add Chapters" }).click();
  await fillInputAfterLabel(
    page,
    "Chapter Title *",
    "Linear Equations",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Description",
    "Introduction to solving linear equations.",
    "text"
  );
  await fillInputAfterLabel(page, "Chapter Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);

  await page.getByRole("button", { name: "Add Topics" }).click();
  await fillInputAfterLabel(
    page,
    "Chapter *",
    "Linear Equations",
    "singleSelect"
  );
  await fillInputAfterLabel(
    page,
    "Title *",
    "Solving Single Variable Equations",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Description",
    "Learn how to solve for x in linear equations.",
    "text"
  );
  await fillInputAfterLabel(page, "Topic Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);

  await page.getByRole("button", { name: "Add Lesson" }).click();
  await fillInputAfterLabel(page, "Lesson Type *", "Theory", "singleSelect");
  await fillInputAfterLabel(
    page,
    "Chapter *",
    "Linear Equations",
    "singleSelect"
  );
  await fillInputAfterLabel(
    page,
    "Topic *",
    "Solving Single Variable Equations",
    "singleSelect"
  );
  await fillInputAfterLabel(page, "Title *", "Basic Equation Solving", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Understand basic steps in solving simple algebraic equations.",
    "text"
  );
  await fillInputAfterLabel(page, "Lesson Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
}
export async function AddSubject(page) {
  //Add Subject
  await page.getByRole("link", { name: "Subjects" }).first().click();
  await page
    .getByRole("navigation")
    .locator("div")
    .filter({ hasText: /^Select Section$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page.getByRole("button", { name: "Add Subjects" }).click();
  await fillInputAfterLabel(page, "Subject Title *", "English", "text");
  await fillInputAfterLabel(page, "Concise Name *", "EN", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
  await clickUntilTargetVisible(page, "#subjectActionEN", "Assign Teacher");
  await fillInputAfterLabel(page, "Teachers", `${teacher.firstName[0]}${teacher.lastName[0]}${teacher.firstName.toLowerCase()} ${teacher.lastName.toLowerCase()}`, "singleSelect");
  await page.locator("header").filter({ hasText: "Enroll Teacher" }).click();
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddChapter(page) {
  //add chapter
  await page.getByRole("link", { name: "Chapters" }).click();
  await page.getByRole("button", { name: "Add New Chapter" }).click();
  await fillInputAfterLabel(page, "Subject *", "English", "singleSelect");
  await fillInputAfterLabel(
    page,
    "Chapter Title *",
    "Greetings & Essentials",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Description",
    "Foundational language building blocks for everyday interactions",
    "text"
  );
  await fillInputAfterLabel(page, "Chapter Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
}
export async function AddTopic(page) {
  //add topic
  await page.getByRole("link", { name: "Topics" }).click();
  await page.getByRole("button", { name: "Add Topic" }).click();
  await fillInputAfterLabel(
    page,
    "Select Subject *",
    "English",
    "singleSelect"
  );
  await fillInputAfterLabel(
    page,
    "Chapters *",
    "Greetings & Essentials",
    "singleSelect"
  );
  await fillInputAfterLabel(
    page,
    "Topic Title *",
    "Daily Conversations",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Description",
    "Common phrases and expressions for daily interactions",
    "text"
  );
  await fillInputAfterLabel(page, "Topic Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
}
export async function AddLesson(page) {
  //add lesson
  await page.getByRole("link", { name: "Lessons" }).click();
  await page.getByRole("button", { name: "Add New Lesson" }).click();
  await fillInputAfterLabel(
    page,
    "Lesson Name *",
    "Pronunciation Basics",
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
  await fillInputAfterLabel(page, "Lesson Number *", "1", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Master clear articulation with phonetics exercises. Practice vowel sounds and common diphthongs through interactive tongue-twisters and listening drills. Develop native-like rhythm and intonation patterns.",
    "textarea"
  );
  await page.getByRole("button", { name: "Create" }).click();
  await closeToastMessage(page);
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
  await closeToastMessage(page);
  await clickUntilTargetVisible(page, "#subjectActionche", "Assign Teacher");
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: `${teacher.firstName[0]}${teacher.lastName[0]}${teacher.firstName.toLowerCase()} ${teacher.lastName.toLowerCase()}` }).click();
  await page.locator(".w-full > section > div > div").first().click();
  await page.getByRole("button", { name: "Save" }).click();
}
