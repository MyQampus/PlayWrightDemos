import { fillInputAfterLabel, closeToastMessage, clickUntilTargetVisible } from "./utils.js";
import { campusAdmin, staff, teacher, student, guardian, pickupPerson, studentInClass, existingUserSelect } from "./userData.js";


export async function AddCampusAdmin(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Users$/ })
    .nth(1)
    .click();
  await page.getByText("Campus Admin").click();
  await page.getByRole("button", { name: "Add Campus Admin" }).click();
  await fillInputAfterLabel(page, "First Name", campusAdmin.firstName, "text");
  await fillInputAfterLabel(page, "Last Name", campusAdmin.lastName, "text");
  await fillInputAfterLabel(page, "Gender", campusAdmin.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", campusAdmin.email, "text");
  await page.getByPlaceholder('2015550123').click();
  await page.getByPlaceholder('2015550123').type(campusAdmin.phone,{ delay: 100 });
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: campusAdmin.dob.year }).click();
  await page.getByRole("button", { name: campusAdmin.dob.month }).click();
  await page.getByText(campusAdmin.dob.day).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", campusAdmin.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", campusAdmin.address, "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "A12345678", "text");
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddStaff(page) {
  await page.getByRole("link", { name: "Staff", exact: true }).click();
  await page.getByRole("button", { name: "Add Staff" }).click();
  await fillInputAfterLabel(page, "First Name", staff.firstName, "text");
  await fillInputAfterLabel(page, "Last Name", staff.lastName, "text");
  await fillInputAfterLabel(page, "Gender", staff.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", staff.email, "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type(staff.phone,{ delay: 100 });
  await page.getByRole('button', { name: 'Select Date' }).first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: staff.dob.year }).click();
  await page.getByRole("button", { name: staff.dob.month }).click();
  await page.getByText(staff.dob.day, { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.getByText("1", { exact: true }).nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", staff.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", staff.address, "text");
  await fillInputAfterLabel(page, "Major Responsibility", staff.majorResponsibility, "singleSelect");
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
  await fillInputAfterLabel(page, "First Name", teacher.firstName, "text");
  await fillInputAfterLabel(page, "Last Name", teacher.lastName, "text");
  await fillInputAfterLabel(page, "Gender", teacher.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", teacher.email, "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type(teacher.phone,{ delay: 100 });
  await page.getByText("Date Of BirthSelect Date").click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: teacher.dob.year }).click();
  await page.getByRole("button", { name: teacher.dob.month }).click();
  await page.getByText(teacher.dob.day, { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByText("Join DateSelect Date").click();
  await page.locator('#datePickerYearSelector').nth(1).click();
  await page.locator('#datePickerYearSelector').nth(1).click();
  await page.locator('#datePickerYearSelector').nth(1).click();
  await page.locator('div:nth-child(8) > .flex-1 > .absolute > div > #datePickerYearSelector > button').first().click();
  await page.getByRole("button", { name: teacher.joinDate.year }).click();
  await page.getByRole("button", { name: teacher.joinDate.month }).click();
  await page.getByText(teacher.joinDate.day, { exact: true }).nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", teacher.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", teacher.address, "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "3434567897647", "text");
  await page.getByRole("button", { name: "Next" }).click();
  await page.locator('div:nth-child(2) > .min-w-1 > section > div > div').first().click();
  await page.locator('li').filter({ hasText: teacher.class }).click();
  await page.locator('div').filter({ hasText: /^Select Teacher Section$/ }).nth(2).click();
  await page.locator('li').filter({ hasText: teacher.section }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await closeToastMessage(page);
}
export async function AddStudent(page) {
  // Add student
  await page.getByRole("link", { name: "Students" }).first().click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await fillInputAfterLabel(page, "First Name", student.firstName, "text");
  await fillInputAfterLabel(page, "Last Name", student.lastName, "text");
  await fillInputAfterLabel(page, "Gender", student.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", student.email, "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type(student.phone,{ delay: 100 });
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: student.dob.year }).click();
  await page.getByRole("button", { name: student.dob.month }).click();
  await page.getByText(student.dob.day, { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", student.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", student.address, "text");
  await fillInputAfterLabel(page, "Registration Number", student.registrationNumber, "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "AB1234567", "text");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
  await closeToastMessage(page);
}
export async function AddStudentEnrollment(page) {
  // Student Enrollment
  await clickUntilTargetVisible(page, `#student${student.firstName}${student.lastName}`, 'Enrollment');
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div > .w-full")
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await fillInputAfterLabel(page, "Section *", studentInClass.section, "singleSelect");
  await fillInputAfterLabel(page, "Roll Number", studentInClass.registrationNumber, "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
}
export async function AddGuardian(page) {
  // Add guardian
  await page.getByRole("link", { name: "Guardians" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 2000 });
  await page.getByRole("button", { name: "Add Guardians" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 2000 });
  await fillInputAfterLabel(page, "First Name", guardian.firstName, "text");
  await fillInputAfterLabel(page, "Last Name", guardian.lastName, "text");
  await fillInputAfterLabel(page, "Gender", guardian.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", guardian.email, "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type(guardian.phone,{ delay: 100 });
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
  await page.getByRole("button", { name: guardian.dob.year }).click();
  await page.getByRole("button", { name: guardian.dob.month }).click();
  await page.getByText(guardian.dob.day, { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", guardian.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", guardian.address, "text");
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "AB123456", "text");
  await page.getByRole("button", { name: "Save" }).click();
  await closeToastMessage(page);
  //Associate Student to Guardian
  await clickUntilTargetVisible(page, `#guardianAction${guardian.firstName}${guardian.lastName}`, 'Associate Student');
  await fillInputAfterLabel(page, "Student", guardian.studentSelect, "singleSelect");
  await fillInputAfterLabel(page, "Relation", guardian.relation, "text");
  await page.locator(".slider").click();
  await page.getByRole("button", { name: "Associate" }).click();
  await closeToastMessage(page);
}
export async function AddStudentPickupPerson(page) {
  // Add student pickup person
  await page.getByRole("link", { name: "Student Pickup Person" }).click();
  await page.getByRole("button", { name: "Add Student Pickup Person" }).click();
  await fillInputAfterLabel(page, "First Name *", pickupPerson.firstName, "text");
  await fillInputAfterLabel(page, "Last Name *", pickupPerson.lastName, "text");
  await fillInputAfterLabel(page, "Gender", pickupPerson.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", pickupPerson.email, "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type(pickupPerson.phone,{ delay: 100 });
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: pickupPerson.dob.year }).click();
  await page.getByRole("button", { name: pickupPerson.dob.month }).click();
  await page.getByText(pickupPerson.dob.day, { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", pickupPerson.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", pickupPerson.address, "text");
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
  await fillInputAfterLabel(page, "Users *", existingUserSelect.usersSelectValue, "singleSelect");
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: teacher.class }).click();
  await fillInputAfterLabel(page, "Section *", teacher.section, "singleSelect");
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
  await fillInputAfterLabel(page, "First Name *", studentInClass.firstName, "text");
  await fillInputAfterLabel(page, "Last Name *", studentInClass.lastName, "text");
  await fillInputAfterLabel(page, "Gender", studentInClass.gender, "singleSelect");
  await fillInputAfterLabel(page, "Email *", studentInClass.email, "text");
  await page.getByPlaceholder("2015550123").click();
  await page.getByPlaceholder("2015550123").type(studentInClass.phone,{ delay: 100 });
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: studentInClass.dob.year }).click();
  await page.getByRole("button", { name: studentInClass.dob.month }).click();
  await page.getByText(studentInClass.dob.day, { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await fillInputAfterLabel(page, "Blood Group", studentInClass.bloodGroup, "singleSelect");
  await fillInputAfterLabel(page, "Address", studentInClass.address, "text")
  await fillInputAfterLabel(page, "Registration Number", studentInClass.registrationNumber, "text")
  // await fillInputAfterLabel(page, "Identity Type", "national identity card", "singleSelect");
  // await fillInputAfterLabel(page, "Identity Number *", "32278783", "text")
  await fillInputAfterLabel(page, "Section *", studentInClass.section, "singleSelect");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
  await closeToastMessage(page);
}