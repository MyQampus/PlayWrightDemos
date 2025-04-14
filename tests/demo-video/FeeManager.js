import { fillInputAfterLabel, closeToastMessage, clickUntilTargetVisible } from "./utils.js";

export async function AddFeeType(page) {
  // add fee type
  await page
    .locator("div")
    .filter({ hasText: /^Fee Manager$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Fee Types" }).click();
  await page.getByRole("button", { name: "Add Fee Type" }).click();
  await fillInputAfterLabel(page, "Fee Type *", "monthly fee", "text");
  await fillInputAfterLabel(page, "Description", "student monthly tuition fee", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  await page
    .getByRole("row", { name: "monthly fee student monthly" })
    .getByRole("img")
    .click();
}
export async function AddStudentFee(page) {
  // add student fee
  await page.getByRole("link", { name: "Receivable" }).click();
  await page.getByRole("button", { name: "Add Student Fee" }).click();
  await fillInputAfterLabel(page, "Fee Title *", "monthly tuition fee", "text");
  await fillInputAfterLabel(page, "Student Name *", "DLdavid lodge", "singleSelect");
  await fillInputAfterLabel(page, "Fee Type *", "monthly fee", "singleSelect");
  await fillInputAfterLabel(page, "Amount *", "5000", "text");
  await fillInputAfterLabel(page, "Payment Method", "cash", "text");
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Class *", "9th class", "singleSelect");
  await fillInputAfterLabel(page, "Section *", "a section", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AcceptStudentFee(page) {
  // Accept Payment fee
  async function acceptPayment(amount) {
  await clickUntilTargetVisible(page, "#receivableActionDavidLodge0","Accept Payment");
    // Fill payment details
    const amountField = page.getByPlaceholder("Receiving Amount");
    await amountField.click();
    await amountField.fill(amount);
    await page.getByRole("button", { name: "Select Date" }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    await fillInputAfterLabel(page, "Payment Comment", "installment", "text");
    await fillInputAfterLabel(page, "Payment Method", "Cash", "text");
    // Submit payment
    await page.getByRole("button", { name: "Accept" }).click();
    await closeToastMessage(page);
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
  // Process payments
  await acceptPayment("2000");
}
export async function ReceivedAndAcceptPayment(page) {
  await page.getByRole("link", { name: "Received" }).click();
  await page.getByRole("link", { name: "Accept Payment" }).click();
  await page
    .locator(".w-\\[250px\\] > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "david lodge" }).click();
  await page.locator(".w-full > section > div > .h-11").click();
  await page.locator("li").filter({ hasText: "monthly tuition fee" }).click();
  await page.locator(".w-full > section > div > div").first().click();
  await fillInputAfterLabel(page, "Receiving Amount", "100", "text");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .nth(2)
    .click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByRole("button", { name: "Accept" }).click();
  await closeToastMessage(page);
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
  await fillInputAfterLabel(page, "Fee Type *", "monthly fee", "singleSelect");
  await fillInputAfterLabel(page, "Amount", "1000", "text");
  await fillInputAfterLabel(page, "Payment Method", "cash", "text");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "CLass *", "9th class", "singleSelect");
  await fillInputAfterLabel(page, "Section *", "a section", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddMonthlyFeeGeneratorTestCase(page) {
  await page.getByRole("link", { name: "Monthly Fee Generator" }).click();
  await page.getByRole("button", { name: "Add Monthly Fee Generator" }).click();
  await fillInputAfterLabel(page, "Fee Types *", "monthly fee", "singleSelect");
  await fillInputAfterLabel(page, "Amount", "2000", "text");
  await fillInputAfterLabel(page, "Fee Generation Date *", "2", "text");
  await fillInputAfterLabel(page, "Due Date of Fee Payment *", "10", "text");
  await fillInputAfterLabel(page, "Class *", "9th class", "singleSelect");
  await fillInputAfterLabel(page, "Section *", "a section", "singleSelect");
  await page.getByRole("button", { name: "Add Custom Fee" }).click();
  await fillInputAfterLabel(page,"Student ","david lodge","singleSelect");
  await fillInputAfterLabel(page, "Fee Amount", "3000", "text");
  await fillInputAfterLabel(page, "Reason", "Attend one more subject", "text");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await closeToastMessage(page);
}
export async function AddFeeDiscountTypeTestCase(page) {
  await page.getByRole("link", { name: "Discount Types" }).click();
  await page.getByRole("button", { name: "Add Discount Type" }).click();
  await fillInputAfterLabel(page, "Discount Title *", "Merit-Based Discounts", "text");
  await fillInputAfterLabel(page, "Discount Description", "Awarded to students based on academic performance or achievements.", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddFeeDiscountAndViewTestCase(page) {
  await page.getByRole("link", { name: "Receivable" }).click();
  await clickUntilTargetVisible(page, "#receivableActionDavidLodge2",'Add Discount');
  await fillInputAfterLabel(page, "Discount Type *", "Merit-Based Discounts", "singleSelect");
  await fillInputAfterLabel(page, "Discount Amount", "200", "text");
  await fillInputAfterLabel(page, "Discount Comment", "For current month", "text");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await closeToastMessage(page);
  await page.getByRole("link", { name: "Student Discount List" }).click();
}