import {
  fillInputAfterLabel,
  closeToastMessage,
  clickUntilTargetVisible,
  timeClick,
} from "./utils.js";
export async function AssignPickupPersonToStudent(page) {
  const StudentActions = await page.getByRole("button", {
    name: "Add Student",
  });
  if (!(await StudentActions.isVisible())) {
    await page.getByRole("link", { name: "Students" }).first().click();
  }
  await page.getByRole("button", { name: "Add Student" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").press("CapsLock");
  await page.getByPlaceholder("Enter First Name").fill("Ali");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").press("CapsLock");
  await page.getByPlaceholder("Enter Last Name").fill("Hmad");
  await page.locator(".slider").click();
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
  await page
    .getByRole("link", { name: "Student Pickup Person" })
    .first()
    .click();
  await page.getByRole("button", { name: "Add Student Pickup Person" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("hmad");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("naeem");
  await page.locator(".slider").click();
  await page.getByRole("button", { name: "Save" }).click();
  await clickUntilTargetVisible(
    page,
    "#pickupPersonActionhmadnaeem",
    "Associate Student"
  );
  await fillInputAfterLabel(page, "Student *", "AHAli Hmad", "singleSelect");
  await page.getByPlaceholder("Relation with Student").click();
  await page.getByPlaceholder("Relation with Student").fill("father");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddPickupAssignee(page) {
  await page
    .locator("div")
    .filter({ hasText: /^SASuper Adminsuperadmin@gmail\.com$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Control Panel" }).locator("a").click();
  const classSelected = await page.getByText("9th class").first();
  if (await classSelected.isVisible()) {
    await classSelected.click();
    await page
      .locator("section")
      .filter({ hasText: /^9th class9th class10 Class$/ })
      .getByRole("img")
      .nth(2)
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Select Class$/ })
      .first()
      .click();
  }
  await page
    .locator("div")
    .filter({ hasText: /^Features Settings$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Pickup", exact: true }).click();
  await page.locator("div:nth-child(2) > div > .border").first().click();
  await page.locator("div").filter({ hasText: /^01$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "AM");

  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div:nth-child(2) > .w-56 > div > .relative > div > .border")
    .click();
  await page.locator("div").filter({ hasText: /^08$/ }).first().click();
  await page.locator("div").filter({ hasText: /^00$/ }).click();
  await timeClick(page, "PM");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByText("Select Title").click();
  await page.getByText("Michael Johnson").click();
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByText("Exit Control Panel").click();
  await page.goto("http://localhost:8080/quick-actions");
}

export async function CreateRequest(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Pickup Request Centre$/ })
    .nth(1)
    .click();
  await page.getByText("Active Requests").click();
  await page.getByRole("button", { name: "Create Pickup Request" }).click();
  await page
    .locator(".lg\\:px-6 > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page
    .getByRole("cell", { name: "Select Pickup Person hmad" })
    .getByRole("listitem")
    .click();

  await page
    .getByRole("row", { name: "AH Ali Hmad hmad naeem hmad" })
    .getByRole("button")
    .click();
  await closeToastMessage(page);
}
export async function RespondToRequest(page) {
  await page.getByRole("heading", { name: "Student Dispatcher" }).click();
  await page.getByText("Active Requests").nth(1).click();
  await clickUntilTargetVisible(
    page,
    "#pickupStudentActionAliHmad",
    "Respond Request"
  );
  await page
    .locator("div")
    .filter({ hasText: /^Select Response$/ })
    .nth(2)
    .click();
  await page.getByText("Student is on the way. Be").click();
  await page.getByRole("button", { name: "Send" }).click();
  await closeToastMessage(page);
}
export async function PickedStudentUp(page) {
  await page.getByRole("heading", { name: "Pickup Request Centre" }).click();
  await page.getByText("Active Requests").first().click();
  await page.getByRole("button", { name: "Student Picked Up" }).click();
  await page
    .getByRole("button", { name: "Student Picked up", exact: true })
    .click();
  await closeToastMessage(page);
}
export async function CheckForRequests(page) {
  await page.getByText("All Requests").click();
  await page.getByRole("heading", { name: "Student Dispatcher" }).click();
  await page.getByRole("link", { name: "All Requests" }).locator("a").click();
  await page.getByText("Active Requests").click();
}
