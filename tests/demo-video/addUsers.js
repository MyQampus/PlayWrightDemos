export async function AddCampusAdmin(page) {
  await page
    .locator("div")
    .filter({ hasText: /^Users$/ })
    .nth(1)
    .click();
  await page.getByText("Campus Admin").click();
  await page.getByRole("button", { name: "Add Campus Admin" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("Ahmed");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("hassan");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div > .w-full")
    .first()
    .click();
  await page.getByText("male").nth(1).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("ahmed@gmail.com");
  await page.getByPlaceholder("3012345678").click();
  await page.getByPlaceholder("3012345678").fill("3214567890");
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "1978" }).click();
  await page.getByRole("button", { name: "Oct" }).click();
  await page.getByText("20").click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("other");
  await page
    .locator(
      "div:nth-child(5) > div > .min-w-1 > section > div > div > .w-full"
    )
    .click();
  await page.getByText("AB-").click();
  await page.getByPlaceholder("Address").click();
  await page
    .getByPlaceholder("Address")
    .fill("sector a street 4 house 20 Okera");
  await page
    .locator("div:nth-child(6) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("national identity card").click();
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("3520567324201");
  await page
    .locator(".flex > div > div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("Qatar (‫قطر‬‎)", { exact: true }).click();
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddStaff(page) {
  await page.getByRole("link", { name: "Staff", exact: true }).click();
  await page.getByRole("button", { name: "Add Staff" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("ali");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("nawaz");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("male").nth(1).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("alinawaz@gmail.com");
  await page.getByPlaceholder("3012345678").click();
  await page.getByPlaceholder("3012345678").fill("3014567899");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2001" }).click();
  await page.getByRole("button", { name: "Jan" }).click();
  await page.getByText("1", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page
    .locator(
      "div:nth-child(2) > .flex-1 > .absolute > div > .j-calendar-control > button"
    )
    .first()
    .click();
  await page.getByText("1", { exact: true }).nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div:nth-child(5) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "A+" }).click();
  await page.getByPlaceholder("Address").click();
  await page.getByPlaceholder("Address").fill("sector z street 5 house 50 ");
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("islam");
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("teaching").click();
  await page
    .locator("div:nth-child(7) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page
    .locator("li")
    .filter({ hasText: "national identity card" })
    .click();
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("52776778876");
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddTeacher(page) {
  await page.getByRole("link", { name: "Teachers" }).first().click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Add Teacher" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Talha");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("Arshad");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^male$/ })
    .click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("talha@gmail.com");
  await page.getByPlaceholder("3012345678").click();
  await page.getByPlaceholder("3012345678").fill("3456789234");
  await page.getByText("Date Of BirthSelect Date").click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2018" }).click();
  await page.getByRole("button", { name: "Feb" }).click();
  await page.getByText("8", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByText("Join DateSelect Date").click();
  await page.locator("#datePickerYearSelector").nth(1).click();
  await page.locator("#datePickerYearSelector").nth(1).click();
  await page.getByRole("button", { name: "2025" }).click();
  await page.getByRole("button", { name: "Jan" }).click();
  await page.getByText("2", { exact: true }).nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page
    .locator("div:nth-child(5) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "A+" }).click();
  await page.getByPlaceholder("Address").click();
  await page.getByPlaceholder("Address").fill("street 7 sector f house 76");
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: "national identity card" })
    .click();
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("islam");
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("3434567897646");
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddStudent(page) {
  // Add student
  await page.getByRole("link", { name: "Students" }).first().click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("danish");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("rasheed");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("danish@gmail.com");
  await page.getByPlaceholder("3012345678").click();
  await page.getByPlaceholder("3012345678").fill("3211965347");
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
  await page.getByText("2", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("islam");
  await page
    .locator("div:nth-child(5) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "A-" }).click();
  await page.getByPlaceholder("Address").click();
  await page.getByPlaceholder("Address").fill("street 19 sector 17 ");
  await page.getByPlaceholder("Registration Number").click();
  await page.getByPlaceholder("Registration Number").fill("673");
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("national identity card").click();
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("565678865");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
}
export async function AddStudentEnrollment(page) {
  // Student Enrollment
  await page.evaluate(() => {
    const table = document.getElementById("table-container");
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.waitForTimeout(1000);
  await page.locator("td:nth-child(17)").click();
  await page.locator("li").filter({ hasText: "Enrollment" }).click();
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div > .w-full")
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page.getByPlaceholder("Roll Number").click();
  await page.getByPlaceholder("Roll Number").fill("1");
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddGuardian(page) {
  // Add guardian
  await page.getByRole("link", { name: "Guardians" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page.getByRole("button", { name: "Add Guardians" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("zaeem");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("Ali");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("zaeem@gmail.com");
  await page.getByPlaceholder("3012345678").click();
  await page.getByPlaceholder("3012345678").fill("3202345678");
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
  await page.getByText("2", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("islam");
  await page
    .locator("div:nth-child(5) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "A+" }).click();
  await page.getByPlaceholder("Address").click();
  await page.getByPlaceholder("Address").fill("sector p street 3 house # 78");
  await page
    .locator("div:nth-child(6) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.getByText("national identity card").click();
  // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("322487789037478");
  await page.getByRole("button", { name: "Save" }).click();
}
export async function AddStudentPickupPerson(page) {
  // Add student pickup person
  await page.getByRole("link", { name: "Student Pickup Person" }).click();
  // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page.getByRole("button", { name: "Add Student Pickup Person" }).click();
  // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("ijaz");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("ahmad");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^male$/ })
    .click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("ijaz@gmail.com");
  await page.getByPlaceholder("3012345678").click();
  await page.getByPlaceholder("3012345678").fill("3459876543");
  await page
    .locator("div")
    .filter({ hasText: /^Select Date$/ })
    .first()
    .click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.getByRole("button", { name: "2036" }).click();
  await page.getByRole("button", { name: "Feb" }).click();
  await page.getByText("2", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("islam");
  await page
    .locator("div:nth-child(5) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "A+" }).click();
  await page.getByPlaceholder("Address").click();
  await page.getByPlaceholder("Address").fill("street 17 sector c");
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page
    .locator("li")
    .filter({ hasText: "national identity card" })
    .click();
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("67897653678");
  await page.getByRole("button", { name: "Save" }).click();
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
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
  await page
    .locator("div")
    .filter({ hasText: /^Select$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page.getByRole("button", { name: "Save" }).click();
}

export async function AddStudentInClass(page) {
  // Add Student in class
  await page
    .locator("div")
    .filter({ hasText: /^Select Class$/ })
    .nth(2)
    .click();
  await page.locator("li").filter({ hasText: "9th class" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Users$/ })
    .nth(1)
    .click();
  await page.getByRole("link", { name: "Students" }).first().click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("Mustafa");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("Nawaz");
  await page
    .locator(".flex > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page
    .locator("li")
    .filter({ hasText: /^male$/ })
    .click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("mustafa@gmail.com");
  await page
    .locator("div")
    .filter({ hasText: /^\+92$/ })
    .click();
  await page.getByPlaceholder("3012345678").fill("3027834322");
  await page.getByRole("button", { name: "Select Date" }).click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector").first().click();
  await page.locator("#datePickerYearSelector > button").first().click();
  await page.getByRole("button", { name: "2013" }).click();
  await page.getByRole("button", { name: "Mar" }).click();
  await page.getByText("3", { exact: true }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await page.getByPlaceholder("Religion").click();
  await page.getByPlaceholder("Religion").fill("islam");
  await page
    .locator("div:nth-child(5) > div > .min-w-1 > section > div > div")
    .first()
    .click();
  await page.locator("li").filter({ hasText: "A-" }).click();
  await page.getByPlaceholder("Address").click();
  await page.getByPlaceholder("Address").fill("sector a phase 11");
  await page.getByPlaceholder("Registration Number").click();
  await page.getByPlaceholder("Registration Number").fill("1");
  await page
    .locator("div:nth-child(2) > .min-w-1 > section > div > div > .w-full")
    .click();
  await page.getByText("national identity card").click();
  await page.getByPlaceholder("Enter Identity No").click();
  await page.getByPlaceholder("Enter Identity No").fill("31243423432");
  await page.locator("#studentSection").getByText("Select Section").click();
  await page.locator("li").filter({ hasText: "a section" }).click();
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
}
