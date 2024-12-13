import { test, expect } from "@playwright/test";
import { baseUrl, email, domain, password } from "../../.env.js";
import { selectCampusAndSection } from "../../utils/utiils.js";
import SETUP_CONSTANTS from "../../constants/setup-constants.js";
import { describe } from "node:test";

let currentSeconds = Math.round(new Date().getTime() / 1000);
let subjectName = `programing${currentSeconds}`;
let conciseName = `pro${currentSeconds}`;
let isAnteMeridiem = new Date().getHours() < 12;

describe("Campus and Section Attendances", () => {
  test("create student at section level", async ({ page }) => {
   
    // Select the campus and section (custom function assumed)
    await selectCampusAndSection(page);
    
    // Locate the "Users" section on the page and click on it (clicking the second match of "Users" text)
    await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();
    
    // Locate and click on the "Students" option in the list
    await page.getByRole("list").getByText("Students").click();
    
    // Click the "Add Student" button
    await page.getByRole("button", { name: "Add Student" }).click();
    
    // Click on the "First Name" input field to activate it
    await page.getByPlaceholder("Enter First Name").click();
    
    // Fill in the "First Name" input with the value "abdul"
    await page.getByPlaceholder("Enter First Name").fill("abdul");
    
    // Click on the "Last Name" input field to activate it
    await page.getByPlaceholder("Enter Last Name").click();
    
    // Fill in the "Last Name" input with the value "rahman"
    await page.getByPlaceholder("Enter Last Name").fill("rahman");
    
    // Click on the "Email" input field to activate it
    await page.getByPlaceholder("Email").click();
    
    // Generate a dynamic email based on the current time (seconds since epoch)
    let currentSeconds = await Math.round(new Date().getTime() / 1000);
    let dynamicEmail = `testing${currentSeconds}@gmail.com`;
    
    // Fill in the "Email" input with the dynamically generated email
    await page.getByPlaceholder("Email").fill(dynamicEmail);
    
    // Click the "Add" button to submit the form and create the student
    await page.getByRole("button", { name: "Add", exact: true }).click();
    
    // Click the "Cancel" button to close the modal (if it's still open)
    await page.getByRole("button", { name: "Cancel" }).click();
    
    // Wait for 2 seconds to allow any asynchronous actions to complete
    await page.waitForTimeout(2000);
});

test("mark Campus Attendance", async ({ page }) => {
  
    // Navigate to the quick actions page
    await page.goto(`${baseUrl}/quick-actions`);
    
    // Click on "Select Campus" dropdown
    await page.getByText("Select Campus", { exact: true }).click();
    
    // Select the default campus from the dropdown
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
    
    // Wait for 1 second to allow any asynchronous actions to complete
    await page.waitForTimeout(3000);
    
    // Locate the "Attendance" section on the page and click on it (clicking the second match of "Attendance" text)
    await page.locator('div').filter({ hasText: /^Attendance$/ }).nth(1).click();
    
    // Click on "Campus Attendance" in the menu
    await page.getByText("Campus Attendance").click();
    
    // Click the "Mark Attendance In" button
    await page.getByRole("button", { name: "Mark Attendance In" }).click();
    
    // Open the date selector by clicking on "Select Date"
 //   await page.locator("div").filter({ hasText: /^Select Date$/ }).nth(2).click();
    
    // Apply the selected date by clicking the "Apply" button
  //  await page.getByRole("button", { name: "Apply" }).click();
    
    // Click to open the student selection dropdown
    await page.locator("div").filter({ hasText: /^Select$/ }).nth(3).click();
    
    // Select the first student in the dropdown list
    await page.locator(".options > ul > li > div").first().click();
    
    // Click the "Mark" button to submit the attendance
    await page.getByRole("button", { name: "Mark", exact: true }).click();
});

test("mark Section Attendance", async ({ page }) => {
  
    // Select the campus and section (custom function assumed)
    await selectCampusAndSection(page);
    
    // Navigate directly to the section attendance page
    await page.goto(`${baseUrl}/attendance/section/students`);
    
    // Click the "Mark Section Attendance" button
    await page.getByRole("button", { name: "Mark Section Attendance" }).click();
    
    // Open the date selector by clicking on "Select Date"
  //  await page.getByRole("button", { name: "Select Date" }).click();
    
    // Apply the selected date by clicking the "Apply" button
  //  await page.getByRole("button", { name: "Apply" }).click();
    
    // Click on the "Attendance Title" input field to activate it
    await page.getByPlaceholder("Attendance Title").click();
    
    // Fill in the "Attendance Title" input with the value "morning attendance"
    await page.getByPlaceholder("Attendance Title").fill("morning attendance ");
    
    // Click on the "Select All" checkbox to select all students
    await page.getByRole('cell', { name: 'Select All' }).locator('label span').click();
    
    // Wait for 1 second to allow any asynchronous actions to complete
    await page.waitForTimeout(1000);
    
    // Click the "Submit" button to save the attendance
    await page.getByRole("button", { name: "Submit" }).click();
});

});
