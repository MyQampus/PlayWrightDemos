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
    await page.getByRole('cell', { name: 'a section' }).click();
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
