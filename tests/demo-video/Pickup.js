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
  await fillInputAfterLabel(page, "First Name *", "Ali", "text");
  await fillInputAfterLabel(page, "Last Name *", "Hmad", "text");
  await page.locator(".slider").click();
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
  await closeToastMessage(page);
  await page.getByRole("link", { name: "Guardians" }).first().click();
  await clickUntilTargetVisible(
    page,
    "#guardianActionTomCruise",
    "Associate Student"
  );
  await fillInputAfterLabel(page, "Student *", "AHAli Hmad", "singleSelect");
  await fillInputAfterLabel(page, "Relation *", "Father", "text");
  await page.getByRole("button", { name: "Associate" }).click();

  await page
    .getByRole("link", { name: "Student Pickup Person" })
    .first()
    .click();
  await page.getByRole("button", { name: "Add Student Pickup Person" }).click();
  await fillInputAfterLabel(page, "First Name *", "Hmad", "text");
  await fillInputAfterLabel(page, "Last Name *", "Naeem", "text");
  await page.locator(".slider").click();
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  await clickUntilTargetVisible(
    page,
    "#pickupPersonActionHmadNaeem",
    "Associate Student"
  );
  await fillInputAfterLabel(page, "Student *", "AHAli Hmad", "singleSelect");
  await fillInputAfterLabel(page, "Relation with Student *", "Father", "text");
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
  await closeToastMessage(page);
  await page.getByText("Exit Control Panel").click();
}

export async function CreateRequest(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Pickup Manager$/ })
    .nth(1)
    .click();
  await page.getByText("Active Requests").click();
  await page.getByRole("button", { name: "Create Pickup Request" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Pickup Person$/ })
    .nth(3)
    .click();
  await page
    .getByRole("cell", { name: "Select Pickup Person Hmad" })
    .getByRole("listitem")
    .click();
  await page
    .getByRole("row", { name: "AH Ali Hmad Hmad Naeem N/A N/" })
    .getByRole("button")
    .click();
  await closeToastMessage(page);
}
export async function RespondToRequest(page) {
  await page.locator("#pickupsuper_adminAction").click();
  await page.locator("text=Respond Request").click();
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
  await page.getByRole("button", { name: "Student Picked Up" }).click();
  await page
    .getByRole("button", { name: "Student Picked up", exact: true })
    .click();
  await closeToastMessage(page);
  await page.getByText("All Requests").click();
  await page.waitforTimeout(2000);
}
