import { fillInputAfterLabel, closeToastMessage } from "./utils.js";

export async function AddSyllabusAutomater(page) {
  // Add Syllabus Automater
  await page
    .locator("div")
    .filter({ hasText: /^Syllabus Automater$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Course Provider" }).click();
  await page.getByRole("button", { name: "Add Course" }).click();
  await fillInputAfterLabel(
    page,
    "Course Name *",
    "Common Core Standards",
    "text"
  );
  await fillInputAfterLabel(
    page,
    "Course Description",
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
    "Course Provider *",
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