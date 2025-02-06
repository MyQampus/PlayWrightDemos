export async function AddExamType(page) {
  // add exam type
  await page
    .locator("div")
    .filter({ hasText: /^Exam Planner$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Exam Types" }).click();
  await page.getByRole("button", { name: "Add Exam Type" }).click();
  await page.getByPlaceholder("Exam Type").click();
  await page.getByPlaceholder("Exam Type").fill("Annual");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("Held Annual Exam in December");
  await page.getByRole("button", { name: "Save" }).click();

  // Add new exam
  await page.getByRole("link", { name: "Exam", exact: true }).click();
  await page.getByRole("button", { name: "Add New Exam" }).click();
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("final year exam date ");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("final year exam date sheet announce");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
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
  await page.getByText("15").click();
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
    .locator("div:nth-child(3) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "ali nawaz" }).click();
  await page.getByPlaceholder("Total Marks").click();
  await page.getByPlaceholder("Total Marks").fill("100");
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.getByText("Room 1").click();
  await page.getByRole("button", { name: "Add New Subject" }).click();
  await page
    .locator("div:nth-child(4) > div > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("English").click();
  await page.locator('input[name="EXAM DURATION \\+ 1"]').click();
  await page.locator('input[name="EXAM DURATION \\+ 1"]').fill("60");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByText("15").nth(3).click();

  await page.getByRole("button", { name: "Apply" }).click();

  await page
    .locator(
      "div:nth-child(4) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
    )
    .first()
    .click();
  await page.locator("div").filter({ hasText: /^02$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator(
      "div:nth-child(4) > div:nth-child(3) > div > .min-w-1 > section > div > div"
    )
    .first()
    .click();
  await page.locator("li").filter({ hasText: "ali nawaz" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.getByText("Room").nth(3).click();
  await page.locator('input[name="TOTAL_MARKS \\+ 1"]').click();
  await page.locator('input[name="TOTAL_MARKS \\+ 1"]').fill("100");
  await page.getByRole("button", { name: "Save" }).click();

  // Published exam
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.waitForTimeout(1000);
  await page
    .getByRole("row", { name: "final year exam date Annual" })
    .getByRole("cell")
    .nth(4)
    .click();
  await page.locator("li").filter({ hasText: "Publish" }).click();
  await page.getByRole("button", { name: "Published" }).click();

  // add marks after published exam

  await page.getByRole("cell", { name: "final year exam date" }).click();
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page
    .getByRole("row", { name: "Chemistry 2025-02-15 01:00 PM" })
    .locator("div")
    .click();
  await page.locator("li").filter({ hasText: "Add Marks" }).click();
  await page.locator('input[name="MARKS 0"]').click();
  await page.locator('input[name="MARKS 0"]').fill("90");
  await page.locator('input[name="Comments 0"]').click();
  await page.locator('input[name="Comments 0"]').fill("pass");
  await page.locator('input[name="MARKS 1"]').click();
  await page.locator('input[name="MARKS 1"]').fill("30");
  await page.locator('input[name="Comments 1"]').click();
  await page.locator('input[name="Comments 1"]').fill("fail");
  await page.getByRole("button", { name: "Submit" }).click();

  // view student added marks
  await page.waitForTimeout(1000);
  await page
    .getByRole("row", { name: "Chemistry 2025-02-15 01:00 PM" })
    .locator("div")
    .click();
  await page.getByText("View Marks").click();
  await page
    .getByRole("row", { name: "DR danish rasheed 90 pass" })
    .locator("div")
    .nth(3)
    .click();

  // add subject exam result

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
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "Chemistry" }).click();
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "PassAndFail Grading" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.getByText("final year exam date").click();
  await page.getByPlaceholder("Weightage").click();
  await page.getByPlaceholder("Weightage").fill("30");
  await page.getByRole("button", { name: "Save" }).click();

  // generate subject result

  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page
    .getByRole("row", { name: "Subject result for Chemistry" })
    .locator("div")
    .click();
  await page.getByText("Generate Result").click();
  await page.getByRole("button", { name: "Confirm" }).click();

  // publish subject result
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page
    .getByRole("row", { name: "Subject result for Chemistry" })
    .locator("div")
    .click();
  await page.locator("li").filter({ hasText: "View Marks" }).click();
  await page.getByRole("button", { name: "Published Result" }).click();
  await page.getByRole("button", { name: "Published", exact: true }).click();
}
