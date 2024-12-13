import { test, expect } from "@playwright/test";
import { baseUrl, email, domain, password } from "../../.env.js";
import { selectCampusAndSection } from "../../utils/utiils.js";
import SETUP_CONSTANTS from "../../constants/setup-constants.js";

let currentSeconds = Math.round(new Date().getTime() / 1000);
let subjectName = `programing${currentSeconds}`;
let conciseName = `pro${currentSeconds}`;
let isAnteMeridiem = new Date().getHours() < 12;

test.describe.configure({ mode: "serial" });

test.skip("create student at section level", async ({ page }) => {
  /*
   * In this testcase we are creating student in section
   * First we select campus
   * Click on add student button and add student Fname and L name and his/her email and press add button
   * Next we are clicking on skip buttton we not associate student with guardian
   * now select class and section and press  enroll button
   */
  await selectCampusAndSection(page);
  await page.getByRole("list").getByText("Students").click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("abdul");
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("rahman");
  await page.getByPlaceholder("Email").click();
  let currentSeconds = await Math.round(new Date().getTime() / 1000);
  let dynamicEmail = `testing${currentSeconds}@gmail.com`;
  await page.getByPlaceholder("Email").fill(dynamicEmail);
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.waitForTimeout(2000);
});

test.describe("create period and mark period attendance ", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await selectCampusAndSection(page);
  });

  test.skip("create subject in class", async ({ page }) => {
    /*
     * In this testcase we are creating subject at class level
     * Select first campus name and class name
     * Click on syllabus manager and click onadd subject
     * Write subject name and consice name
     * Press create button
     */

    await page.getByRole("heading", { name: "Syllabus Manager" }).click();
    await page.getByRole("link", { name: "Subjects" }).locator("a").click();
    await page.getByRole("button", { name: "Add Subjects" }).click();
    await page.getByPlaceholder("Subject Title").click();
    await page.getByPlaceholder("Subject Title").fill(subjectName);
    await page.getByPlaceholder("Concise Name").click();
    await page.getByPlaceholder("Concise Name").fill(conciseName);
    await page.getByRole("button", { name: "Create" }).click();
    await page.waitForTimeout(3000);
  });
  test.skip("create period in section", async ({ page }) => {
    /*
     * In this testcase we are creating period
     * First we are selecting campus, class and section
     * Click on tim/table and select period page
     * Click on add period button which is on right sight bar then add period modal will open
     * select subject name
     * Select date and start time
     * Select date and end time
     * Press save button
     */
    await page.getByRole("heading", { name: "Time Table" }).click();
    await page.getByText("Period", { exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole("button", { name: "Add Period" }).click();
    await page.waitForTimeout(3000);
    // Select Subject
    await page.locator("div > div > .min-w-1 > section > div > div").first().click();
    await page.waitForTimeout(500);
    await page.getByText(subjectName).click();
    // Date 1 which is datetime
    await page.locator('div > div > .h-11').first().click();

    await page.getByRole("button", { name: "Apply" }).click();
    // Time 1 is start time of the period
    await page.locator('.flex > div:nth-child(2) > div > .relative > div > div').first().click();
    await page.locator('div').filter({ hasText: /^01$/ }).first().click();
    await page.getByText('00', { exact: true }).click();
    await page.getByRole('button', { name: 'Apply' }).click();
    // if (isAnteMeridiem)
    // await page.locator("div").filter({ hasText: /^AMPM$/ }).locator("div").nth(2).click();
    /* 
        *  we are creating period 2:00 Pm to 3:00 Pm on word 
        * Here we insert condition where we are checking time is AM or Pm 
        * if current time is AM then select the toogle button and convert into PM
   
    */
    await page.locator('div:nth-child(2) > div:nth-child(2) > div > .relative > div > div').first().click();
    await page.locator('div').filter({ hasText: /^01$/ }).first().click();
    await page.locator('div').filter({ hasText: /^00$/ }).click();
    await page.getByRole('button', { name: 'Apply' }).click();
    // Date 2
    await page.getByRole('button', { name: 'Select Date' }).last().click();
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "Apply" }).click();
    // Time 2
    // 2pm Period time start from 1:00 PM to 2:00 PM
    await page.locator('.mt-3 > div > div:nth-child(2) > div:nth-child(2) > div > .relative > div > div').first().click();
    await page.locator('div').filter({ hasText: /^02$/ }).first().click();
    await page.locator('div').filter({ hasText: /^00$/ }).click();
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000)
  });
  test.skip("Mark Period Attendance", async ({ page }) => {
    /*
     * In this testcase we are marking period attendance
     * Select campus , class and section
     *  Click on period attendance  and select date and select period and press save button
     * marks student attendance
     */
    await page.goto(`${baseUrl}/attendance/period/students`);
    await page.waitForTimeout(5000);
    await page.getByRole("button", { name: "Mark Attendance" }).click();
    await page.waitForTimeout(2000);
    await page.locator("div").filter({ hasText: /^Select Date$/ }).first().click();
    await page.getByRole("button", { name: "Apply" }).click();
    await page.waitForTimeout(4000);
    await page.locator("div").filter({ hasText: /^Select$/ }).nth(2).click();
    await page.locator("li").filter({ hasText: subjectName }).click();
    await page.getByRole("button", { name: "Mark", exact: true }).click();
  });
  `                                                                                                                                           `;
});
