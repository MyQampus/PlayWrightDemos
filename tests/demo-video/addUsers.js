import { fillInputAfterLabel, closeToastMessage, clickUntilTargetVisible } from "./utils.js";


export async function AddCampusAdmin(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Users$/ })
    .nth(1)
    .click();
  await page.getByText("Campus Admin").click();
  await page.getByRole("button", { name: "Add Campus Admin" }).click();
  await fillInputAfterLabel(page, "First Name", "John", "text");
  await fillInputAfterLabel(page, "Last Name", "Smith", "text");
  await fillInputAfterLabel(page, "Gender", "male", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "john.smith@gmail.com", "text");
  await page.getByPlaceholder('2015550123').click();
  await page.getByPlaceholder('2015550123').type('2098765455',{ delay: 100 });
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "1996" }).click();
  await page.getByRole("button", { name: "Oct" }).click();
  await page.getByText("15").click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "AB+", "singleSelect");
  await fillInputAfterLabel(page, "Address", "320 Main St, Springfield", "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "A12345678", "text");
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddStaff(page) {
  await page.getByRole("link", { name: "Staff", exact: true }).click();
  await page.getByRole("button", { name: "Add Staff" }).click();
  await fillInputAfterLabel(page, "First Name", "John", "text");
  await fillInputAfterLabel(page, "Last Name", "Doe", "text");
  await fillInputAfterLabel(page, "Gender", "male", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "john.doe@gmail.com", "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type("2014567899",{ delay: 100 });
  await page.getByRole('button', { name: 'Select Date' }).first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2001" }).click();
  await page.getByRole("button", { name: "Jan" }).click();
  await page.getByText("8", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.getByText("1", { exact: true }).nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "A+", "singleSelect");
  await fillInputAfterLabel(page, "Address", "123 Main St, Springfield", "text");
  await fillInputAfterLabel(page, "Major Responsibility", "Teaching", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "52776778876", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddTeacher(page) {
  await page.getByRole("link", { name: "Teachers" }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Add Teacher" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await fillInputAfterLabel(page, "First Name", "Michael", "text");
  await fillInputAfterLabel(page, "Last Name", "Johnson", "text");
  await fillInputAfterLabel(page, "Gender", "male", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "michael.johnson@gmail.com", "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type("2056789234",{ delay: 100 });
  await page.getByText("Date Of BirthSelect Date").click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2001" }).click();
  await page.getByRole("button", { name: "Feb" }).click();
  await page.getByText("8", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByText("Join DateSelect Date").click();
  await page.locator("#datePickerYearSelector").nth(1).click();
  await page.locator("#datePickerYearSelector").nth(1).click();
  await page.getByRole("button", { name: "2025" }).click();
  await page.getByRole("button", { name: "Jan" }).click();
  await page.getByText("4", { exact: true }).nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "AB+", "singleSelect");
  await fillInputAfterLabel(page, "Address", "456 Elm St, Metropolis", "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "3434567897647", "text");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddStudent(page) {
  // Add student
  await page.getByRole("link", { name: "Students" }).first().click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await fillInputAfterLabel(page, "First Name", "David", "text");
  await fillInputAfterLabel(page, "Last Name", "Lodge", "text");
  await fillInputAfterLabel(page, "Gender", "male", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "david.lodge@gmail.com", "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type("2019653471",{ delay: 100 });
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2013" }).click();
  await page.getByRole("button", { name: "Feb" }).click();
  await page.getByText("13", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "A-", "singleSelect");
  await fillInputAfterLabel(page, "Address", "123 University Ave, Birmingham", "text");
  await fillInputAfterLabel(page, "Registration Number", "673", "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "AB1234567", "text");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
  await closeToastMessage(page);
}
export async function AddStudentEnrollment(page) {
  // Student Enrollment
  await clickUntilTargetVisible(page, '#studentDavidLodge', 'Enrollment');
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div > .w-full")
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page.locator('div').filter({ hasText: /^Select Sections$/ }).nth(2).click();
  await page.locator('li').filter({ hasText: 'a section' }).click();
  await fillInputAfterLabel(page, "Roll Number", "1", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddGuardian(page) {
  // Add guardian
  await page.getByRole("link", { name: "Guardians" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 2000 });
  await page.getByRole("button", { name: "Add Guardians" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 2000 });
  await fillInputAfterLabel(page, "First Name", "Emily", "text");
  await fillInputAfterLabel(page, "Last Name", "Johnson", "text");
  await fillInputAfterLabel(page, "Gender", "female", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "emily.johnson@gmail.com", "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type("2023456784",{ delay: 100 });
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "1995" }).click();
  await page.getByRole("button", { name: "May" }).click();
  await page.getByText("18", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "A+", "singleSelect");
  await fillInputAfterLabel(page, "Address", "564 Elm Street, London", "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "AB123456", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  //Associate Student to Guardian
  await clickUntilTargetVisible(page, '#guardianActionEmilyJohnson', 'Associate Student');
  await fillInputAfterLabel(page, "Student", "DLdavid lodge", "singleSelect");
  await fillInputAfterLabel(page, "Relation", "Father", "text");
  await page.locator(".slider").click();
  await page.getByRole("button", { name: "Associate" }).click();
  await closeToastMessage(page);
}
export async function AddStudentPickupPerson(page) {
  // Add student pickup person
  await page.getByRole("link", { name: "Student Pickup Person" }).click();
  await page.getByRole("button", { name: "Add Student Pickup Person" }).click();
  await fillInputAfterLabel(page, "First Name *", "Sophia", "text");
  await fillInputAfterLabel(page, "Last Name *", "Williams", "text");
  await fillInputAfterLabel(page, "Gender", "female", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "sophia.williams@gmail.com", "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type("2098765457",{ delay: 100 });
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2003" }).click();
  await page.getByRole("button", { name: "Mar" }).click();
  await page.getByText("22", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "B+", "singleSelect");
  await fillInputAfterLabel(page, "Address", "123 Main Street, Springfield", "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "D1233456", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function OpenAllUserPage(page) {
  // all users page
  await page.getByRole("link", { name: "All Users" }).click();
  await page.waitForTimeout(2000);
}
export async function AddExistingUserAsTeacher(page) {
  // add existing user as teacher
  await page
    .locator("div")
    .filter({ hasText: /^Users$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Teachers" }).click();
  await page.getByRole("button", { name: "Add Existing User" }).click();
  await fillInputAfterLabel(page, "Users *", "JDjohn doe", "singleSelect");
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await fillInputAfterLabel(page, "Sections *", "a section", "singleSelect");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddStudentInClass(page) {
  // Add Student in class
  await page
    .locator("div")
    .filter({ hasText: /^Select Class$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page.getByRole("link", { name: "Students" }).first().click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await fillInputAfterLabel(page, "First Name *", "James", "text");
  await fillInputAfterLabel(page, "Last Name *", "Smith", "text");
  await fillInputAfterLabel(page, "Gender", "male", "singleSelect");
  await fillInputAfterLabel(page, "Email *", "james.smith@gmail.com", "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type("2027834322",{ delay: 100 });
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2013" }).click();
  await page.getByRole("button", { name: "Mar" }).click();
  await page.getByText("16", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", "A-", "singleSelect");
  await fillInputAfterLabel(page, "Address", "75 Consett Rd, Hillingdon", "text")
  await fillInputAfterLabel(page, "Registration Number", "1", "text")
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "32278783", "text")
  await fillInputAfterLabel(page, "Section *", "a section", "singleSelect");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
  await closeToastMessage(page);
}