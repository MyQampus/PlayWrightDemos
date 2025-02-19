import { fillInputAfterLabel } from "./utils.js";

export async function AddSyllabusAutomater(page) {
  // Add Syllabus Automater
  await page
    .locator("div")
    .filter({ hasText: /^Syllabus Automater$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Course Provider" }).click();
  await page.getByRole("button", { name: "Add Course" }).click();
  await page.getByPlaceholder("Course Name").click();
  await page.getByPlaceholder("Course Name").fill("Fedral Board");
  await page.getByPlaceholder("Course Description").click();
  await page
    .getByPlaceholder("Course Description")
    .fill("Information about the courses and deatil");
  await page.getByRole("button", { name: "Create" }).click();
}
export async function AddSubjectSyllabusTemplate(page) {
  //Add subject syllabus template
  await page.getByRole("link", { name: "Subject Syllabus Template" }).click();
  await page.getByRole("button", { name: "Add New Template" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Fedral Board" }).click();
  await page.getByPlaceholder("Subject Title").click();
  await page.getByPlaceholder("Subject Title").fill("Computer Science");
  await page.getByPlaceholder("Title", { exact: true }).click();
  await page.getByPlaceholder("Title", { exact: true }).fill("OOP");
  await page.getByPlaceholder("Grade").click();
  await page.getByPlaceholder("Grade").fill("Tenth");
  await page.getByPlaceholder("Year/Edition").click();
  await page.getByPlaceholder("Year/Edition").fill("2024");
  await page.getByRole("button", { name: "Create" }).click();
  await page.getByRole("cell", { name: "OOP" }).click();
  await page.getByText("OOP").click();
  await page.getByRole("button", { name: "Add Chapters" }).click();
  await page.getByPlaceholder("Chapter Title").click();
  await page.getByPlaceholder("Chapter Title").fill("Intro");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("Introduction to the chapter");
  await page.getByPlaceholder("Chapter Number").click();
  await page.getByPlaceholder("Chapter Number").fill("1");
  await page.getByRole("button", { name: "Create" }).click();
  await page.getByRole("button", { name: "Add Topics" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.getByText("Intro").nth(2).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("First");
  await page.getByPlaceholder("Description").click();
  await page.getByPlaceholder("Description").fill("Science");
  await page.getByPlaceholder("Topic Number").click();
  await page.getByPlaceholder("Topic Number").fill("1");
  await page.getByRole("button", { name: "Create" }).click();
  await page.getByRole("button", { name: "Add Lesson" }).click();
  await fillInputAfterLabel(page, "Lesson Type *", "Theory", "singleSelect");
  await fillInputAfterLabel(page, "Lesson Type *", "Theory", "singleSelect");
  await fillInputAfterLabel(page, "Chapter *", "Intro", "singleSelect");
  await fillInputAfterLabel(page, "Topic *", "First", "singleSelect");
  await fillInputAfterLabel(page, "Title *", "Managnment", "text");
  await fillInputAfterLabel(page, "Description", "Understanding the role of managnment in our life", "text");
  await fillInputAfterLabel(page, "Lesson Number *", "1", "text");
  await page.getByRole("button", { name: "Create" }).click();
}
