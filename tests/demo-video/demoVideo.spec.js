import { test, expect } from "@playwright/test";
import { baseUrl, email, domain, password } from "../../.env.js";
import SETUP_CONSTANTS from "../../constants/setup-constants.js";
const authFile = "./authenticated_user.json";
test.describe("test case for demo video", () => {
  test("test", async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto(`${baseUrl}/signin`);
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(email);
    await page.getByPlaceholder("Institute sub-domain").click();
    await page.getByPlaceholder("Institute sub-domain").fill(domain);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForTimeout(2000);
    // End of authentication steps.
    let signUpSlider = await page.evaluate(() => {
      // Access local storage and retrieve the data
      return localStorage.signUpSlider;
    });
    if (signUpSlider === "true") {
      await expect(page).toHaveURL(`${baseUrl}/setup-slider`);
      await page.getByPlaceholder("Email").click();
      //Create dynamic email for every testing cycle
      let currentSeconds = await Math.round(new Date().getTime() / 1000);
      let dynamicEmail = `testing${currentSeconds}@gmail.com`;
      await page.getByPlaceholder("Email").fill(dynamicEmail);
      await page.getByRole("button", { name: "Next" }).click();
      await page.waitForTimeout(1000);
      await page.getByPlaceholder("Campus Name").click();
      await page.getByPlaceholder("Campus Name").fill("pioneer");
      await page.getByRole("button", { name: "Next" }).click();
      await page.waitForTimeout(1000);
      await page.getByPlaceholder("Class Name").click();
      await page
        .getByPlaceholder("Class Name")
        .fill(SETUP_CONSTANTS.DEFAULT_CLASS);
      await page.getByPlaceholder("Section").click();
      await page
        .getByPlaceholder("Section")
        .fill(SETUP_CONSTANTS.DEFAULT_SECTION);
      await page.getByRole("button", { name: "Confirm" }).click();
    } else {
      await expect(page).toHaveURL(`${baseUrl}/quick-actions`);
    }
    //add campus
    await page.goto(`${baseUrl}/quick-actions`);
    await page
      .locator("div")
      .filter({ hasText: /^Select Campus$/ })
      .nth(2)
      .click();
    await page.getByText("pioneer").click();
    // add classes
    await page.getByRole("link", { name: "Classes" }).nth(1).click();
    await page.getByRole("button", { name: "Add Class" }).click();
    await page.getByPlaceholder("Class Title").click();
    await page.getByPlaceholder("Class Title").fill("9th class");
    await page.getByPlaceholder("Class Description").click();
    await page.getByPlaceholder("Class Description").fill("boys 9th class");
    await page.getByRole("button", { name: "Save" }).click();

    //edit class
    // await page.getByRole("link", { name: "Classes" }).click();
    // await page.locator("td").nth(3).click();
    // await page.locator("li").filter({ hasText: "Edit" }).click();
    // await page.getByPlaceholder("Class Title").click();
    // await page.getByPlaceholder("Class Title").fill("9th class");
    // await page.getByPlaceholder("Class Description").click();
    // await page.getByPlaceholder("Class Description").fill("Class name updated");
    // await page.getByRole("button", { name: "Update" }).click();
    //add section
    await page.getByRole("link", { name: "Sections" }).click();
    await page.getByRole("button", { name: "Add Section" }).click();
    await page.getByPlaceholder("Section Name").click();
    await page.getByPlaceholder("Section Name").fill("a section");
    await page.getByPlaceholder("Section Description").click();
    await page.getByPlaceholder("Section Description").fill("section for boys");
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.getByText("9th class").click();
    await page.getByRole("button", { name: "Save" }).click();

    // add campus admin
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
      .locator(
        ".flex > div > div:nth-child(2) > .min-w-1 > section > div > div"
      )
      .first()
      .click();
    await page.getByText("Qatar (‫قطر‬‎)", { exact: true }).click();
    await page.getByRole("button", { name: "Save" }).click();
    // add staff
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
    //add Teacher
    await page.getByRole("link", { name: "Teachers" }).first().click();
    await page.getByRole("button", { name: "Add Teacher" }).click();
    // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
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

    // Add student pickup person
    await page.getByRole("link", { name: "Student Pickup Person" }).click();
    // await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
    await page
      .getByRole("button", { name: "Add Student Pickup Person" })
      .click();
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

    // all users page
    await page.getByRole("link", { name: "All Users" }).click();
    await page.waitForTimeout(2000);

    //add room
    await page.getByRole("link", { name: "Rooms" }).click();
    await page.getByRole("button", { name: "Add Room" }).click();
    await page.getByPlaceholder("Room Title").click();
    await page.getByPlaceholder("Room Title").fill("Room 1");
    await page.getByRole("button", { name: "Save" }).click();

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
    // Add Syllabus Automater
    await page
      .locator("div")
      .filter({ hasText: /^Syllabus Automater$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Course Provider" }).click();
    await page.getByRole("button", { name: "Add Course" }).click();
    await page.getByPlaceholder("Course Name").click();
    await page.getByPlaceholder("Course Name").fill("Fedral Board");
    await page.getByPlaceholder("Course Description").click();
    await page
      .getByPlaceholder("Course Description")
      .fill("Information about the courses and deatil");
    await page.getByRole("button", { name: "Create" }).click();
    //Add subject syllabus template
    await page.getByRole("link", { name: "Subject Syllabus Template" }).click();
    await page.getByRole("button", { name: "Add New Template" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "Fedral Board" }).click();
    await page.getByPlaceholder("Subject Title").click();
    await page.getByPlaceholder("Subject Title").fill("Computer Science");
    await page.getByPlaceholder("Title", { exact: true }).click();
    await page.getByPlaceholder("Title", { exact: true }).fill("OOP");
    await page.getByPlaceholder("Grade").click();
    await page.getByPlaceholder("Grade").fill("Tenth");
    await page.getByPlaceholder("Year/Edition").click();
    await page.getByPlaceholder("Year/Edition").fill("2024");
    await page.getByRole("button", { name: "Create" }).click();
    await page.getByRole("cell", { name: "OOP" }).click();
    await page.getByText("OOP").click();
    await page.getByRole("button", { name: "Add Chapters" }).click();
    await page.getByPlaceholder("Chapter Title").click();
    await page.getByPlaceholder("Chapter Title").fill("Intro");
    await page.getByPlaceholder("Description").click();
    await page
      .getByPlaceholder("Description")
      .fill("Introduction to the chapter");
    await page.getByPlaceholder("Chapter Number").click();
    await page.getByPlaceholder("Chapter Number").fill("1");
    await page.getByRole("button", { name: "Create" }).click();
    await page.getByRole("button", { name: "Add Topics" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.getByText("Intro").nth(2).click();
    await page.getByPlaceholder("Title").click();
    await page.getByPlaceholder("Title").fill("First");
    await page.getByPlaceholder("Description").click();
    await page.getByPlaceholder("Description").fill("Science");
    await page.getByPlaceholder("Topic Number").click();
    await page.getByPlaceholder("Topic Number").fill("1");
    await page.getByRole("button", { name: "Create" }).click();
    await page.getByRole("button", { name: "Add Lesson" }).click();
    await page
      .locator(".flex > div > .min-w-1 > section > div > div > .w-full")
      .first()
      .click();
    await page.locator("li").filter({ hasText: "Theory" }).click();
    await page
      .locator("div:nth-child(2) > .min-w-1 > section > div > div")
      .first()
      .click();
    await page.getByText("Intro").nth(3).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(3)
      .click();
    await page.getByText("First").nth(1).click();
    await page.getByPlaceholder("Title").click();
    await page.getByPlaceholder("Title").fill("Managnment");
    await page.getByPlaceholder("Description").click();
    await page
      .getByPlaceholder("Description")
      .fill("Understanding the role of managnment in our life");
    await page.getByPlaceholder("Lesson Number").click();
    await page.getByPlaceholder("Lesson Number").fill("1");
    await page.getByRole("button", { name: "Create" }).click();

    // add grading structure flow
    await page
      .locator("div")
      .filter({ hasText: /^Grading Structures$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Non GPA Grading" }).click();
    await page.getByRole("button", { name: "Add Structure" }).click();
    await page.getByPlaceholder("Title", { exact: true }).click();
    await page
      .getByPlaceholder("Title", { exact: true })
      .fill("PassAndFail Grading");
    await page.getByPlaceholder("Description").click();
    await page
      .getByPlaceholder("Description")
      .fill(
        "A simple grading structure where students are evaluated based on whether they meet the required criteria."
      );
    await page.locator('input[name="GRADE_TITLE \\+ 0"]').click();
    await page.locator('input[name="GRADE_TITLE \\+ 0"]').fill("A");
    await page.getByRole("button", { name: "Add New Grade" }).click();
    await page.locator('input[name="GRADE_TITLE \\+ 1"]').click();
    await page.locator('input[name="GRADE_TITLE \\+ 1"]').fill("B");
    await page.locator('input[name="GRADE_VAL \\+ 1"]').click();
    await page.locator('input[name="GRADE_VAL \\+ 1"]').fill("80");
    await page.getByRole("button", { name: "Add New Grade" }).click();
    await page.locator('input[name="GRADE_TITLE \\+ 2"]').click();
    await page.locator('input[name="GRADE_TITLE \\+ 2"]').fill("C");
    await page.locator('input[name="GRADE_VAL \\+ 2"]').click();
    await page.locator('input[name="GRADE_VAL \\+ 2"]').fill("60");
    await page.locator('input[name="GRADE_TITLE \\+ 3"]').click();
    await page.locator('input[name="GRADE_TITLE \\+ 3"]').fill("F");
    await page.getByRole("button", { name: "Save" }).click();
    await page.waitForTimeout(1000);
    await page.locator(".w-full > div > div > .w-full").first().click();
    await page.locator("li").filter({ hasText: "9th class" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Exam Result$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Subject Result" }).click();
    await page.getByRole("button", { name: "Add Subject Result" }).click();
    await page
      .locator("div:nth-child(2) > .min-w-1 > section > div > div")
      .first()
      .click();
    await page.getByRole("button", { name: "Cancel" }).click();
    //Mark Attendance
    await page.locator(".min-w-1 > section > div > div").first().click();
    await page.locator(".bg-primary-gray-50 > div > div:nth-child(2)").click();
    await page
      .locator("div")
      .filter({ hasText: /^Attendance$/ })
      .nth(1)
      .click();
    await page.getByText("Campus Attendance").click();
    await page.getByRole("link", { name: "Campus Attendance" }).click();
    await page.getByRole("button", { name: "Mark Attendance In" }).click();
    await page
      .locator(
        "div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
      )
      .first()
      .click();
    await page.locator("span").filter({ hasText: /^20$/ }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "DRdanish rasheed" }).click();
    await page.getByRole("button", { name: "Mark", exact: true }).click();
    await page.getByRole("button", { name: "Mark Attendance Out" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "DRdanish rasheed" }).click();
    await page.getByRole("button", { name: "Mark", exact: true }).click();
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
    // Accept Payment fee
    // await page.getByRole("link", { name: "Receivable" }).click();
    // await page.evaluate(() => {
    //   const table = document.getElementById("table-container");
    //   if (table) {
    //     table.scrollLeft = table.scrollWidth;
    //   }
    // });

    // await page.locator("td:nth-child(19)").click();
    // await page
    //   .locator("#table-container li")
    //   .filter({ hasText: "Accept Payment" })
    //   .click();
    // await page.getByPlaceholder("Receiving Amount").click();
    // await page.getByPlaceholder("Receiving Amount").fill("2000");
    // await page.getByRole("button", { name: "Select Date" }).click();
    // await page.getByRole("button", { name: "Apply" }).click();
    // await page.getByPlaceholder("Payment Comment").click();
    // await page.getByPlaceholder("Payment Comment").fill("installment");
    // await page.getByPlaceholder("Payment Method").click();
    // await page.getByPlaceholder("Payment Method").fill("Cash");
    // await page.getByRole("button", { name: "Accept" }).click();
    // await page.waitForTimeout(1000);sss

    // await page.getByRole("link", { name: "Receivable" }).click();
    // await page.evaluate(() => {
    //   const table = document.getElementById("table-container");
    //   if (table) {
    //     table.scrollLeft = table.scrollWidth;
    //   }
    // });

    // await page.locator("td:nth-child(19)").click();
    // await page
    //   .locator("#table-container li")
    //   .filter({ hasText: "Accept Payment" })
    //   .click();
    // await page.getByPlaceholder("Receiving Amount").click();
    // await page.getByPlaceholder("Receiving Amount").fill("400");
    // await page.getByRole("button", { name: "Select Date" }).click();
    // await page.getByRole("button", { name: "Apply" }).click();
    // await page.getByPlaceholder("Payment Comment").click();
    // await page.getByPlaceholder("Payment Comment").fill("installment");
    // await page.getByPlaceholder("Payment Method").click();
    // await page.getByPlaceholder("Payment Method").fill("Cash");sss
    // await page.getByRole("button", { name: "Accept" }).click();
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
    await page
      .locator("div")
      .filter({ hasText: /^Attendance$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Section Attendance" }).click();
    await page.getByRole("button", { name: "Mark Section Attendance" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.getByText("a section").click();
    await page.getByPlaceholder("Attendance Title").click();
    await page.getByPlaceholder("Attendance Title").fill("Morning");
    await page
      .getByRole("row", { name: "MN Mustafa Nawaz" })
      .locator("span")
      .nth(3)
      .click();
    await page.getByRole("button", { name: "Submit" }).click();
    //Add Subject
    await page
      .locator("span")
      .filter({ hasText: "Select Section" })
      .first()
      .click();
    await page.locator("li").filter({ hasText: "a section" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Syllabus Manager$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Subjects" }).first().click();
    await page.getByRole("button", { name: "Add Subjects" }).click();
    await page.getByPlaceholder("Subject Title").click();
    await page.getByPlaceholder("Subject Title").fill("English");
    await page.getByPlaceholder("Concise Name").click();
    await page.getByPlaceholder("Concise Name").fill("EN");
    await page.getByRole("button", { name: "Create" }).click();
    await page
      .getByRole("row", { name: "English EN N/A" })
      .getByRole("img")
      .click();
    await page.getByText("Assign Teacher").click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
    await page.locator("header").filter({ hasText: "Enroll Teacher" }).click();
    await page.getByRole("button", { name: "Save" }).click();
    //add chapter
    await page.getByRole("link", { name: "Chapters" }).click();
    await page.getByRole("button", { name: "Add New Chapter" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "English" }).click();
    await page.getByPlaceholder("Chapter Title").click();
    await page.getByPlaceholder("Chapter Title").fill("Greetings & Essentials");
    await page.getByPlaceholder("Description").click();
    await page
      .getByPlaceholder("Description")
      .fill("Foundational language building blocks for everyday interactions");
    await page.getByPlaceholder("Chapter Number").click();
    await page.getByPlaceholder("Chapter Number").fill("1");
    await page.getByRole("button", { name: "Create" }).click();
    //add topic
    await page.getByRole("link", { name: "Topics" }).click();
    await page.getByRole("button", { name: "Add Topic" }).click();
    await page.getByText("Select Subject", { exact: true }).click();
    await page.locator("li").filter({ hasText: "English" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page
      .locator("li")
      .filter({ hasText: "Greetings & Essentials" })
      .click();
    await page.getByPlaceholder("Topic Title").click();
    await page.getByPlaceholder("Topic Title").fill("Daily Conversations");
    await page.getByPlaceholder("Topic Number").click();
    await page.getByPlaceholder("Topic Number").fill("1");
    await page.getByRole("button", { name: "Create" }).click();
    //add lesson
    await page.getByRole("link", { name: "Lessons" }).click();
    await page.getByRole("button", { name: "Add New Lesson" }).click();
    await page.getByPlaceholder("Lesson Name").click();
    await page.getByPlaceholder("Lesson Name").fill("Pronunciation Basics");
    await page
      .locator(
        ".modal-content__body > div:nth-child(2) > div > .min-w-1 > section > div > div"
      )
      .first()
      .click();
    await page.locator("li").filter({ hasText: "English" }).click();
    await page
      .locator(
        "div:nth-child(2) > div:nth-child(2) > .min-w-1 > section > div > div"
      )
      .first()
      .click();
    await page
      .locator("li")
      .filter({ hasText: "Greetings & Essentials" })
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "Daily Conversations" }).click();
    await page.getByPlaceholder("Lesson Number").click();
    await page.getByPlaceholder("Lesson Number").fill("1");
    await page.locator("textarea").click();
    await page
      .locator("textarea")
      .fill(
        "Master clear articulation with phonetics exercises. Practice vowel sounds and common diphthongs through interactive tongue-twisters and listening drills. Develop native-like rhythm and intonation patterns."
      );
    await page.getByRole("button", { name: "Create" }).click();
    //add lesson planner
    await page.getByRole("link", { name: "Lesson Planner" }).click();
    await page.getByRole("button", { name: "Add New Lesson" }).click();
    await page.getByPlaceholder("Lesson Name").click();
    await page.getByPlaceholder("Lesson Name").fill("Cultural Communication");
    await page
      .locator(
        ".modal-content__body > div:nth-child(2) > div > .min-w-1 > section > div > div"
      )
      .first()
      .click();
    await page.getByText("English").nth(1).click();
    await page
      .locator(
        "div:nth-child(2) > div:nth-child(2) > .min-w-1 > section > div > div"
      )
      .first()
      .click();
    await page
      .locator("li")
      .filter({ hasText: "Greetings & Essentials" })
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "Daily Conversations" }).click();
    await page.getByPlaceholder("Lesson Number").click();
    await page.getByPlaceholder("Lesson Number").fill("2");
    await page.locator("textarea").click();
    await page
      .locator("textarea")
      .fill(
        "Explore cultural context in language use. Understand formal vs informal registers, regional idioms, and non-verbal communication cues. Role-play scenarios including business meetings, social gatherings, and customer service interactions."
      );
    await page.getByRole("button", { name: "Create" }).click();
    //open Time Table
    await page
      .locator("div")
      .filter({ hasText: /^Time Table$/ })
      .nth(1)
      .click();
    //add time table automator
    await page.getByText("Time Table Automator").click();
    await page
      .getByRole("button", { name: "Add Time Table Automator" })
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Select Subject$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "English" }).click();
    await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
    await page
      .locator("div")
      .filter({ hasText: /^Select Teacher$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
    await page.waitForLoadState("domcontentloaded", { timeout: 20000 });
    await page
      .locator("div")
      .filter({ hasText: /^Select Room$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "Room" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select Day$/ })
      .nth(2)
      .click();
    await page
      .locator("li")
      .filter({ hasText: /^thursday$/ })
      .click();
    await page.locator("#TimeTableStartTimeId").click();
    await page.locator("div").filter({ hasText: /^10$/ }).first().click();
    await page.locator("div").filter({ hasText: /^00$/ }).click();
    await page.getByText("AM", { exact: true }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page.locator("#TimeTableEndTimeId").click();
    await page.locator("div").filter({ hasText: /^11$/ }).first().click();
    await page.locator("div").filter({ hasText: /^00$/ }).click();
    await page.getByText("AM", { exact: true }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page.getByRole("button", { name: "Save" }).click();
    //Add Current Time Table
    await page.getByText("Current Time Table").click();
    await page.getByRole("button", { name: "Add Current Time Table" }).click();
    await page
      .locator("form > div > div > .min-w-1 > section > div > div")
      .first()
      .click();
    await page.locator("li").filter({ hasText: "English" }).click();
    await page.getByText("Select").first().click();
    await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
    await page.locator(".flex-1 > div > div > .h-11").first().click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page
      .locator(
        "div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
      )
      .first()
      .click();
    await page.locator("div").filter({ hasText: /^03$/ }).first().click();
    await page.locator("div").filter({ hasText: /^46$/ }).click();
    await page.getByText("PM", { exact: true }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select Date$/ })
      .nth(2)
      .click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page
      .locator(
        ".flex > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div"
      )
      .first()
      .click();
    await page.locator("div").filter({ hasText: /^04$/ }).first().click();
    await page.locator("div").filter({ hasText: /^46$/ }).click();
    await page.getByText("PM", { exact: true }).click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page
      .locator("div:nth-child(3) > div > .min-w-1 > section > div > div")
      .first()
      .click();
    await page.locator("li").filter({ hasText: "Room 1" }).click();
    await page.getByRole("button", { name: "Save" }).click();
    //add period attendance
    await page
      .locator("div")
      .filter({ hasText: /^Attendance$/ })
      .nth(1)
      .click();
    await page.getByText("Period Attendance").click();
    await page.getByRole("button", { name: "Mark Attendance" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator(".absolute > .relative").click();
    await page
      .getByRole("cell", { name: "Present" })
      .locator("label span")
      .click();
    await page.getByRole("button", { name: "Mark", exact: true }).click();
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

    // add one more subject at class level
    await page
      .locator("div")
      .filter({ hasText: /^Syllabus Manager$/ })
      .nth(1)
      .click();
    await page.getByRole("link", { name: "Subjects" }).click();
    await page.getByRole("button", { name: "Add Subjects" }).click();
    await page.getByPlaceholder("Subject Title").click();
    await page.getByPlaceholder("Subject Title").fill("Chemistry");
    await page.getByPlaceholder("Concise Name").click();
    await page.getByPlaceholder("Concise Name").fill("che");
    await page.getByRole("button", { name: "Create" }).click();
    await page
      .getByRole("row", { name: "Chemistry che N/A" })
      .getByRole("cell")
      .nth(4)
      .click();
    await page.locator("li").filter({ hasText: "Assign Teacher" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Select$/ })
      .nth(2)
      .click();
    await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
    await page.locator(".w-full > section > div > div").first().click();
    await page.getByRole("button", { name: "Save" }).click();
    await page.context().storageState({ path: authFile });
  });
});
