export async function AddFeeType(page) {
  // add fee type
  await page
    .locator("div")
    .filter({ hasText: /^Fee Manager$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Fee Types" }).click();
  await page.getByRole("button", { name: "Add Fee Type" }).click();
  await page.getByPlaceholder("Fee Type").click();
  await page.getByPlaceholder("Fee Type").fill("monthly fee");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill("student monthly tuition fee");
  await page.getByRole("button", { name: "Save" }).click();
  await page
    .getByRole("row", { name: "monthly fee student monthly" })
    .getByRole("img")
    .click();
}
export async function AddStudentFee(page) {
  // add student fee
  await page.getByRole("link", { name: "Receivable" }).click();
  await page.getByRole("button", { name: "Add Student Fee" }).click();
  await page.getByPlaceholder("Fee Title").click();
  await page.getByPlaceholder("Fee Title").fill("monthly tuition fee");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div > .w-full")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "DRdanish rasheed" }).click();
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div > .w-full")
    .first()
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^monthly fee$/ })
    .click();
  await page.getByPlaceholder("Amount").click();
  await page.getByPlaceholder("Amount").fill("2500");
  await page.getByPlaceholder("Payment Method").click();
  await page.getByPlaceholder("Payment Method").fill("credit card");
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator(
      "div:nth-child(5) > div > .min-w-1 > section > div > div > .w-full"
    )
    .first()
    .click();
  await page.getByText("9th class").click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(3)
    .click();
  await page.getByText("a section").click();
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AcceptStudentFee(page) {
  // Accept Payment fee
  async function acceptPayment(amount) {
    await page.getByRole("cell", { name: "a section" }).click();
    await page.locator("#receivableAction0").click();

    await page
      .locator("#table-container li")
      .filter({ hasText: "Accept Payment" })
      .click();

    // Fill payment details
    const amountField = page.getByPlaceholder("Receiving Amount");
    await amountField.click();
    await amountField.fill(amount);

    // Handle date selection
    await page.getByRole("button", { name: "Select Date" }).click();
    await page.getByRole("button", { name: "Apply" }).click();

    // Fill other fields
    await page.getByPlaceholder("Payment Comment").click();
    await page.getByPlaceholder("Payment Comment").fill("installment");

    await page.getByPlaceholder("Payment Method").click();
    await page.getByPlaceholder("Payment Method").fill("Cash");

    // Submit payment
    await page.getByRole("button", { name: "Accept" }).click();

    // Close invoice dialog
    await page
      .locator("header")
      .filter({ hasText: "Print Fee Invoice" })
      .getByRole("img")
      .click();

    // Add proper wait condition instead of timeout if possible
    await page.waitForTimeout(1000);
  }

  // Main execution flow
  await page.getByRole("link", { name: "Receivable" }).click();

  // Scroll table horizontally
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  // Process payments
  await acceptPayment("2000");
}
export async function ReceivedAndAcceptPayment(page) {
  await page.getByRole("link", { name: "Received" }).click();
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.waitForTimeout(1000);
  await page.getByRole("link", { name: "Accept Payment" }).click();
  await page
    .locator(".w-\\[250px\\] > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "danish rasheed" }).click();
  await page.locator(".w-full > section > div > .h-11").click();
  await page.locator("li").filter({ hasText: "monthly tuition fee" }).click();
  await page.locator(".w-full > section > div > div").first().click();
  await page.getByPlaceholder("Receiving Amount").click();
  await page.getByPlaceholder("Receiving Amount").fill("100");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByRole("button", { name: "Accept" }).click();
  await page.getByRole("button", { name: "Print" }).click();
  await page
    .locator("header")
    .filter({ hasText: "Print Fee Invoice" })
    .getByRole("img")
    .click();
}
export async function AddSectionFeeTestCase(page) {
  await page.getByRole("link", { name: "Section Fee" }).click();
  await page.getByRole("button", { name: "Add Section Fee" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^monthly fee$/ })
    .click();
  await page.getByPlaceholder("Amount").click();
  await page.getByPlaceholder("Amount").fill("1000");
  await page.getByPlaceholder("Payment Method").click();
  await page.getByPlaceholder("Payment Method").fill("cash");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.getByText("15").click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByText("Class *Select").click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page.getByText("Section *Select").click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page.getByRole("button", { name: "Save" }).click();
}

export async function AddMonthlyFeeGeneratorTestCase(page) {
  await page.getByRole("link", { name: "Monthly Fee Generator" }).click();
  await page.getByRole("button", { name: "Add Monthly Fee Generator" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^monthly fee$/ })
    .click();
  await page.getByPlaceholder("Amount").click();
  await page.getByPlaceholder("Amount").fill("2000");
  await page.locator('input[name="Generate_on_day_of_month"]').click();
  await page.locator('input[name="Generate_on_day_of_month"]').fill("2");
  await page.locator('input[name="Due Date of Fee Payment"]').click();
  await page.locator('input[name="Due Date of Fee Payment"]').fill("10");
  await page.getByText("Class *Select").click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page.getByText("Section *Select").click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page.getByRole("button", { name: "Add Custom Fee" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "danish rasheed" }).click();
  await page.getByPlaceholder("Fee Amount").click();
  await page.getByPlaceholder("Fee Amount").fill("3000");
  await page.getByPlaceholder("Reason").click();
  await page.getByPlaceholder("Reason").fill("Attend one more subject ");
  await page.getByRole("button", { name: "Add", exact: true }).click();
}

export async function AddFeeDiscountTypeTestCase(page) {
  await page.getByRole("link", { name: "Discount Types" }).click();
  await page.getByRole("button", { name: "Add Discount Type" }).click();
  await page.getByPlaceholder("Discount Title").click();
  await page.getByPlaceholder("Discount Title").fill("Merit-Based Discounts\t");
  await page.getByPlaceholder("Description").click();
  await page
    .getByPlaceholder("Description")
    .fill(
      "Awarded to students based on academic performance or achievements.\t"
    );
  await page.getByRole("button", { name: "Save" }).click();
}

export async function AddFeeDiscountAndViewTestCase(page) {
  await page.getByRole("link", { name: "Receivable" }).click();
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.locator("#receivableAction0 div").click();
  await page.locator("li").filter({ hasText: "Add Discount" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "Merit-Based Discounts" }).click();
  await page.getByPlaceholder("Discount Amount").click();
  await page.getByPlaceholder("Discount Amount").fill("200");
  await page.getByPlaceholder("Discount Comment").click();
  await page.getByPlaceholder("Discount Comment").fill("For current month");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("link", { name: "Student Discount List" }).click();
}
