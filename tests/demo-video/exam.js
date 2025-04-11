import { fillInputAfterLabel, closeToastMessage,clickUntilTargetVisible } from "./utils";

export async function AddExamTypes(page) {
  // add exam type
  await page
    .locator("div")
    .filter({ hasText: /^Exam Planner$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Exam Types" }).click();
  await page.getByRole("button", { name: "Add Exam Type" }).click();
  await fillInputAfterLabel(page, "Exam Type *", "Annual", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "Held Annual Exam in December",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  await page.waitForTimeout(1000);

  // add second exam type
  await page.getByRole("button", { name: "Add Exam Type" }).click();
  await fillInputAfterLabel(page, "Exam Type *", "MidTerm", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "A mid-term exam assesses learning halfway through a course.",
    "text"
  );
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddExams(page) {
  // Add new exam
  await page.getByRole("link", { name: "Exam", exact: true }).click();
  await page.getByRole("button", { name: "Add New Exam" }).click();
  await fillInputAfterLabel(page, "Title *", "MidTerm exam date sheet", "text");
  await fillInputAfterLabel(
    page,
    "Description",
    "MidTerm exam date sheet announce",
    "text"
  );
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam Type$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "MidTerm" }).click();
  await page
    .locator(".border > div > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "Chemistry" }).click();
  await page.getByPlaceholder("Exam Duration").click();
  await page.getByPlaceholder("Exam Duration").fill("30");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  // await page.getByText("14").click();
  await page.getByRole("button", { name: "Apply" }).click();

  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^01$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Invigilator$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "John Doe" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Room$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Room" }).click();
  await page.getByPlaceholder("Total Marks").click();
  await page.getByPlaceholder("Total Marks").fill("40");
  await page.getByRole("button", { name: "Add New Subject" }).click();
  await page
    .locator("div:nth-child(4) > div > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("English").click();
  await page.locator('input[name="EXAM DURATION \\+ 1"]').click();
  await page.locator('input[name="EXAM DURATION \\+ 1"]').fill("30");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByText("14").nth(1).click();

  await page.getByRole("button", { name: "Apply" }).click();

  await page
    .locator(
      "div:nth-child(4) > .grid > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();

  await page.locator("div").filter({ hasText: /^02$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Invigilator$/ })
    .nth(3)
    .click();
  await page.locator("li").filter({ hasText: "John Doe" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Room$/ })
    .nth(3)
    .click();
  await page.locator("li").filter({ hasText: "Room" }).click();
  await page.locator('input[name="TOTAL_MARKS \\+ 1"]').click();
  await page.locator('input[name="TOTAL_MARKS \\+ 1"]').fill("40");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);

  // add second exam
  await page.getByRole("button", { name: "Add New Exam" }).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("final year exam date ");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("final year exam date sheet announce");
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam Type$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Annual" }).click();
  await page
    .locator(".border > div > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "Chemistry" }).click();
  await page.getByPlaceholder("Exam Duration").click();
  await page.getByPlaceholder("Exam Duration").fill("60");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Apply" }).click();

  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^03$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Invigilator$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "John Doe" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Room$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Room" }).click();
  await page.getByPlaceholder("Total Marks").click();
  await page.getByPlaceholder("Total Marks").fill("60");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Add New Subject" }).click();
  await page
    .locator("div:nth-child(4) > div > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "English" }).click();
  await page.locator('input[name="EXAM DURATION \\+ 1"]').click();
  await page.locator('input[name="EXAM DURATION \\+ 1"]').fill("60");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Apply" }).click();

  await page
    .locator(
      "div:nth-child(4) > .grid > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^04$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Invigilator$/ })
    .nth(3)
    .click();
  await page.locator("li").filter({ hasText: "John Doe" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Room$/ })
    .nth(3)
    .click();
  await page.locator("li").filter({ hasText: "Room" }).click();
  await page.locator('input[name="TOTAL_MARKS \\+ 1"]').click();
  await page.locator('input[name="TOTAL_MARKS \\+ 1"]').fill("60");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  // Published exam
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  // await page.waitForTimeout(1000);
  await clickUntilTargetVisible(page, "#examActionMidTermexamdatesheet","Publish");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator('#examActionMidTermexamdatesheet').click();
  // await page.locator("li").filter({ hasText: "Publish" }).click();
  await page.getByRole("button", { name: "Published" }).click();
  await closeToastMessage(page);

  // second data publish
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  // await page.waitForTimeout(1000);
  await clickUntilTargetVisible(page, "#examActionfinalyearexamdate","Publish");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator('#examActionfinalyearexamdate').click();
  // await page.locator("li").filter({ hasText: "Publish" }).click();
  await page.getByRole("button", { name: "Published" }).click();
  await closeToastMessage(page);
}
export async function AddExamsMarks(page) {

// add marks after published exam
  // add marks for chemistry
  await page.getByRole("cell", { name: "MidTerm exam date sheet" }).click();
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#examDetailsActionEnglish","Add Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#examDetailsActionEnglish").click();
  // await page.locator("li").filter({ hasText: "Add Marks" }).click();
  await page.locator('input[name="MARKS 0"]').click();
  await page.locator('input[name="MARKS 0"]').fill("40");
  await page.locator('input[name="Comments 0"]').click();
  await page.locator('input[name="Comments 0"]').fill("pass");
  await page.locator('input[name="MARKS 1"]').click();
  await page.locator('input[name="MARKS 1"]').fill("30");
  await page.locator('input[name="Comments 1"]').click();
  await page.locator('input[name="Comments 1"]').fill("fail");
  await page.getByRole("button", { name: "Submit" }).click();
  await closeToastMessage(page);

  // add subject marks for English
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#examDetailsActionChemistry","Add Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#examDetailsActionChemistry").click();
  // await page.locator("li").filter({ hasText: "Add Marks" }).click();
  await page.locator('input[name="MARKS 0"]').click();
  await page.locator('input[name="MARKS 0"]').fill("40");
  await page.locator('input[name="Comments 0"]').click();
  await page.locator('input[name="Comments 0"]').fill("pass");
  await page.locator('input[name="MARKS 1"]').click();
  await page.locator('input[name="MARKS 1"]').fill("30");
  await page.locator('input[name="Comments 1"]').click();
  await page.locator('input[name="Comments 1"]').fill("fail");
  await page.getByRole("button", { name: "Submit" }).click();
  await closeToastMessage(page);

  // second exam add marks after publish
  await page.getByRole("link", { name: "Exam", exact: true }).click();
  await page.getByRole("cell", { name: "final year exam date" }).click();
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#examDetailsActionChemistry","Add Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#examDetailsActionChemistry").click();
  // await page.locator("li").filter({ hasText: "Add Marks" }).click();
  await page.locator('input[name="MARKS 0"]').click();
  await page.locator('input[name="MARKS 0"]').fill("50");
  await page.locator('input[name="Comments 0"]').click();
  await page.locator('input[name="Comments 0"]').fill("pass");
  await page.locator('input[name="MARKS 1"]').click();
  await page.locator('input[name="MARKS 1"]').fill("30");
  await page.locator('input[name="Comments 1"]').click();
  await page.locator('input[name="Comments 1"]').fill("fail");
  await page.getByRole("button", { name: "Submit" }).click();
  await closeToastMessage(page);

  // add subject marks for English
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#examDetailsActionEnglish","Add Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#examDetailsActionEnglish").click();
  // await page.locator("li").filter({ hasText: "Add Marks" }).click();
  await page.locator('input[name="MARKS 0"]').click();
  await page.locator('input[name="MARKS 0"]').fill("50");
  await page.locator('input[name="Comments 0"]').click();
  await page.locator('input[name="Comments 0"]').fill("pass");
  await page.locator('input[name="MARKS 1"]').click();
  await page.locator('input[name="MARKS 1"]').fill("30");
  await page.locator('input[name="Comments 1"]').click();
  await page.locator('input[name="Comments 1"]').fill("fail");
  await page.getByRole("button", { name: "Submit" }).click();
  await closeToastMessage(page);

  // view student added marks
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#examDetailsActionChemistry","View Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#examDetailsActionChemistry").click();
  // await page.getByText("View Marks").click();
}
export async function AddSubjectResult(page) {

  // add subject exam result for Chemistry
  await page
    .locator("div")
    .filter({ hasText: /^Exam Result$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Subject Result" }).click();
  await page.getByRole("button", { name: "Add Subject Result" }).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("Subject result for Chemistry");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("Chemistry subject result added");
  await page
    .locator("div")
    .filter({ hasText: /^Select Subject$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Chemistry" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Grading Structure$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "PassAndFail Grading" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: "MidTerm exam date sheet" })
    .click();
  await page.getByPlaceholder("Weightage").click();
  await page.getByPlaceholder("Weightage").fill("40");
  await page.getByRole("button", { name: "Add New Exams" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam$/ })
    .nth(2)
    .click();
  await page.getByText("final year exam date").click();
  await page.locator('input[name="WEIGHTAGE \\+ 1"]').click();
  await page.locator('input[name="WEIGHTAGE \\+ 1"]').fill("60");
  await page.getByRole("button", { name: "Save" }).click();

  // generate subject result
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#SubjectResultActionSubjectresultforChemistry","Generate Result");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.getByRole('row', { name: 'Subject result for Chemistry' }).getByRole('button').click();
  // await page.getByText("Generate Result").click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);

  // publish subject result
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#SubjectResultActionSubjectresultforChemistry","View Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#SubjectResultActionSubjectresultforChemistry").click();
  // await page.locator("li").filter({ hasText: "View Marks" }).click();
  await page.getByRole("button", { name: "Published Result" }).click();
  await page.getByRole("button", { name: "Published", exact: true }).click();

  // add subject exam result for English
  await page.getByRole("link", { name: "Subject Result" }).click();
  await page.getByRole("button", { name: "Add Subject Result" }).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("Subject Exam Result for English");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("English subject result added");
  await page
    .locator("div")
    .filter({ hasText: /^Select Subject$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "English" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Grading Structure$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "PassAndFail Grading" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam$/ })
    .nth(2)
    .click();
  await page.getByText("MidTerm exam date sheet").click();
  await page.getByPlaceholder("Weightage").click();
  await page.getByPlaceholder("Weightage").fill("40");
  await page.getByRole("button", { name: "Add New Exams" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam$/ })
    .nth(2)
    .click();
  await page.getByText("final year exam date").click();
  await page.locator('input[name="WEIGHTAGE \\+ 1"]').click();
  await page.locator('input[name="WEIGHTAGE \\+ 1"]').fill("60");
  await page.getByRole("button", { name: "Save" }).click();

  // generate subject result for english
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#SubjectResultActionSubjectExamResultforEnglish","Generate Result");
  // await page.locator("#SubjectResultActionSubjectExamResultforEnglish").click();
  // await page.locator("#SubjectResultActionSubjectExamResultforEnglish").click();
  // await page.locator("li").filter({ hasText: "Generate Result" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);

  // publish subject result for english
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#SubjectResultActionSubjectExamResultforEnglish","View Marks");
  // await page.getByRole('cell', { name: 'Actions' }).click();
  // await page.locator("#SubjectResultActionSubjectExamResultforEnglish").click();
  // await page.locator("li").filter({ hasText: "View Marks" }).click();
  await page.getByRole("button", { name: "Published Result" }).click();
  await page.getByRole("button", { name: "Published", exact: true }).click();
}
export async function AddSectionResult(page) {
  // Add Section Result
  await page.getByRole("link", { name: "Section Result" }).click();
  await page.getByRole("button", { name: "Add Section Result" }).click();
  await page.getByPlaceholder("Title").click();
  await page
    .getByPlaceholder("Title")
    .fill("Section Result for English and Chemistry");
  await page.getByPlaceholder("Description").click();

  await page.getByPlaceholder("Description").fill("Section Result added");
  await page
    .locator("div")
    .filter({ hasText: /^Select Grading Structure$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "PassAndFail Grading" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam$/ })
    .nth(2)
    .click();
  await page.getByText("Subject Exam Result for").click();
  await page.getByRole("button", { name: "Add New" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Exam$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: "Subject result for Chemistry" })
    .click();
  await page
    .locator("div:nth-child(2) > div > div:nth-child(3) > .success > .flex")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Subject$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "1" }).click();
  await page.getByRole("button", { name: "Save" }).click();

  // generate section result
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#SectionResultActionSectionResultforEnglishandChemistry","Generate Result");
  // await page.locator("#SectionResultActionSectionResultforEnglishandChemistry").click();
  // await page.locator("#SectionResultActionSectionResultforEnglishandChemistry").click();
  // await page.locator("li").filter({ hasText: "Generate Result" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await closeToastMessage(page);

  // view section result
  // await page.waitForTimeout(1000);
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await clickUntilTargetVisible(page, "#SectionResultActionSectionResultforEnglishandChemistry","View Marks");
  // await page.locator("#SectionResultActionSectionResultforEnglishandChemistry").click();
  // await page.locator("#SectionResultActionSectionResultforEnglishandChemistry").click();
  // await page.locator("li").filter({ hasText: "View Marks" }).click();
  await page
    .locator(".w-44 > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "Student Summary" }).click();
  // await page.evaluate(() => {
  //   const table = document.getElementById("table-container");
  //   if (table) {
  //     table.scrollLeft = table.scrollWidth;
  //   }
  // });
  await page.getByRole("cell", { name: "View Result" }).first().click();
}
