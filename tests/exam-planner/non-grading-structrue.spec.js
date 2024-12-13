import { test, expect } from '@playwright/test';
import { baseUrl, email, domain, password } from '../../.env.js'
import { selectCampusAndSection } from "../../utils/utiils.js"
import SETUP_CONSTANTS from '../../constants/setup-constants.js'
test.describe.configure({ mode: 'serial' });

test.describe('Exam module test cases ', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await selectCampusAndSection(page)
    });
    test('create subject in class', async ({ page }) => {
        // Click on the heading 'Syllabus Manager'
        await page.getByRole('heading', { name: 'Syllabus Manager' }).click();

        // Click on the 'Subjects' link within the 'Syllabus Manager' section
        await page.getByRole('link', { name: 'Subjects' }).locator('a').click();

        // Click on the 'Add Subjects' button to start the process of adding a new subject
        await page.getByRole('button', { name: 'Add Subjects' }).click();

        // Click on the 'Subject Title' input field to focus it
        await page.getByPlaceholder('Subject Title').click();

        // Fill the 'Subject Title' input field with the subject name 'physics'
        await page.getByPlaceholder('Subject Title').fill('physics');

        // Click on the 'Concise Name' input field to focus it
        await page.getByPlaceholder('Concise Name').click();

        // Fill the 'Concise Name' input field with the concise name 'phy01'
        await page.getByPlaceholder('Concise Name').fill('phy01');

        // Click on the 'Create' button to finalize the creation of the new subject
        await page.getByRole('button', { name: 'Create' }).click();

        // Wait for 2 seconds to ensure that the subject creation process is completed
        await page.waitForTimeout(2000);
    });
    test(' add student in section', async ({ page }) => {

        // Click on the 'Users' section
        await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();

        // Click on the 'Students' link within the 'Users' section
        await page.getByText('Students').first().click();

        // Click on the 'Add Student' button to start the process of adding a new student
        await page.getByRole('button', { name: 'Add Student' }).click();

        // Click on the 'Enter First Name' input field to focus it
        await page.getByPlaceholder('Enter First Name').click();

        // Fill the 'Enter First Name' input field with the student's first name 'ali'
        await page.getByPlaceholder('Enter First Name').fill('ali');

        // Click on the 'Enter Last Name' input field to focus it
        await page.getByPlaceholder('Enter Last Name').click();

        // Fill the 'Enter Last Name' input field with the student's last name 'raza'
        await page.getByPlaceholder('Enter Last Name').fill('raza');

        // Click on the 'Email' input field to focus it
        await page.getByPlaceholder('Email').click();

        // Fill the 'Email' input field with the student's email 'aliraza@gmail.com'
        await page.getByPlaceholder('Email').fill('aliraza@gmail.com');

        // Click on the 'Add' button to add the student
        await page.getByRole('button', { name: 'Add', exact: true }).click();

        // Click on the 'Cancel' button to skip associating the student with a guardian
        await page.getByRole('button', { name: 'Cancel' }).click();

        // Wait for 2 seconds to ensure that the student addition process is completed
        await page.waitForTimeout(2000);
    });
    test('add non structure grading type', async ({ page }) => {
        /*
        * In this testcase we are creating grading structure type
        * Select Campus/Class and Section
        * Click on grading structure page and click on non GPA grading 
        * Modal will open and type title 
        * Then add Gradetitle and Grade value  
        * Here we are selecting 4 grade title and 4 grade values 
        * and press save button
        */
        // Navigate to the non-GPA grading structure page
        await page.goto(`${baseUrl}/grading-structure/non-gpa`);

        // Click on the 'Add Structure' button to open the modal for adding a new grading structure
        await page.getByRole('button', { name: 'Add Structure' }).click();

        // Click on the 'Title' input field to focus it
        await page.getByPlaceholder('Title', { exact: true }).click();

        // Fill the 'Title' input field with the title 'non GPA grading'
        await page.getByPlaceholder('Title', { exact: true }).fill('non GPA grading');

        // Click on the 'Add New Grade' button to add a new grade entry
        await page.getByRole('button', { name: 'Add New Grade' }).click();

        // Click on the 'Add New Grade' button again to add another grade entry
        await page.getByRole('button', { name: 'Add New Grade' }).click();

        // Click on the first grade title input field to focus it
        await page.locator('input[name="GRADE_TITLE \\+ 0"]').click();

        // Fill the first grade title input field with 'A+'
        await page.locator('input[name="GRADE_TITLE \\+ 0"]').fill('A+');

        // Click on the second grade title input field to focus it
        await page.locator('input[name="GRADE_TITLE \\+ 1"]').click();

        // Fill the second grade title input field with 'A'
        await page.locator('input[name="GRADE_TITLE \\+ 1"]').fill('A');

        // Click on the second grade value input field to focus it
        await page.locator('input[name="GRADE_VAL \\+ 1"]').click();

        // Fill the second grade value input field with '90'
        await page.locator('input[name="GRADE_VAL \\+ 1"]').fill('90');

        // Click on the third grade title input field to focus it
        await page.locator('input[name="GRADE_TITLE \\+ 2"]').click();

        // Fill the third grade title input field with 'A-'
        await page.locator('input[name="GRADE_TITLE \\+ 2"]').fill('A-');

        // Click on the third grade value input field to focus it
        await page.locator('input[name="GRADE_VAL \\+ 2"]').click();

        // Fill the third grade value input field with '70'
        await page.locator('input[name="GRADE_VAL \\+ 2"]').fill('70');

        // Click on the fourth grade title input field to focus it
        await page.locator('input[name="GRADE_TITLE \\+ 3"]').click();

        // Fill the fourth grade title input field with 'F'
        await page.locator('input[name="GRADE_TITLE \\+ 3"]').fill('F');

        // Click on the 'Save' button to save the new grading structure
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 5 seconds to ensure that the grading structure is saved successfully
        await page.waitForTimeout(5000);
    });
    test(' add exams type', async ({ page }) => {

        // Navigate to the exam planner types page
        await page.goto(`${baseUrl}/exam-planner/types`);

        // Click on the 'Add Exam Type' button to open the modal for adding a new exam type
        await page.getByRole('button', { name: 'Add Exam Type' }).click();

        // Click on the 'Exam Type' input field to focus it
        await page.getByPlaceholder('Exam Type').click();

        // Fill the 'Exam Type' input field with 'Assignment Type'
        await page.getByPlaceholder('Exam Type').fill('Assignment Type');

        // Click on the 'Save' button to save the new exam type
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 1 second to ensure that the exam type is saved successfully
        await page.waitForTimeout(1000);

        // Click on the 'Add Exam Type' button again to add another exam type
        await page.getByRole('button', { name: 'Add Exam Type' }).click();

        // Click on the 'Exam Type' input field to focus it
        await page.getByPlaceholder('Exam Type').click();

        // Fill the 'Exam Type' input field with 'Mid Term Exam'
        await page.getByPlaceholder('Exam Type').fill('Mid Term Exam');

        // Click on the 'Save' button to save the new exam type
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 1 second to ensure that the exam type is saved successfully
        await page.waitForTimeout(1000);

        // Click on the 'Add Exam Type' button again to add another exam type
        await page.getByRole('button', { name: 'Add Exam Type' }).click();

        // Click on the 'Exam Type' input field to focus it
        await page.getByPlaceholder('Exam Type').click();

        // Fill the 'Exam Type' input field with 'Final Term Exam'
        await page.getByPlaceholder('Exam Type').fill('Final Term Exam');

        // Click on the 'Save' button to save the new exam type
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 2 seconds to ensure that the exam type is saved successfully
        await page.waitForTimeout(2000);
    });
    test(' add exam schedule ', async ({ page }) => {

        // Navigate to the exam planner exams page
        await page.goto(`${baseUrl}/exam-planner/exams`);

        // Click on the 'Add New Exam' button to open the modal for adding a new exam
        await page.getByRole('button', { name: 'Add New Exam' }).click();

        // Click on the 'Title' input field to focus it
        await page.getByPlaceholder('Title').click();

        // Fill the 'Title' input field with 'mid term phy'
        await page.getByPlaceholder('Title').fill('mid term phy');

        // Click on the first 'Select' dropdown to choose the exam type
        await page.getByText('Select').first().click();

        // Select 'Assignment Type' from the dropdown
        await page.getByText('Assignment Type').click();

        // Click on the first 'Select' dropdown again to choose the subject
        await page.getByText('Select').first().click();

        // Select 'physics' from the dropdown
        await page.locator('li').filter({ hasText: /^physics$/ }).click();

        // Click on the 'Exam Duration' input field to focus it
        await page.getByPlaceholder('Exam Duration').click();

        // Fill the 'Exam Duration' input field with '90'
        await page.getByPlaceholder('Exam Duration').fill('90');

        // Click on the 'Select Date' button to open the date picker
        await page.getByRole('button', { name: 'Select Date' }).click();

        // Select the date '31' from the date picker
        await page.getByText('31', { exact: true }).click();

      //  await page.getByText('30').nth(1).click();

        // Wait for 1 second to ensure the date is selected
        await page.waitForTimeout(1000);

        // Click on the 'Apply' button to confirm the selected date
        await page.getByRole('button', { name: 'Apply' }).click();

        // Click on the 'Total Marks' input field to focus it
        await page.getByPlaceholder('Total Marks').click();

        // Fill the 'Total Marks' input field with '55'
        await page.getByPlaceholder('Total Marks').fill('55');

        // Click on the 'Save' button to save the new exam schedule
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 5 seconds to ensure the exam schedule is saved successfully
        await page.waitForTimeout(5000);
    });
    test(' add exam schedule  published', async ({ page }) => {

        // Wait for 3 seconds to ensure any previous actions are completed
        await page.waitForTimeout(3000);

        // Navigate to the exam planner exams page
        await page.goto(`${baseUrl}/exam-planner/exams`);

        // Click on the actions button (represented by an image) for the exam with title 'mid term phy' and type 'Assignment Type'
        await page.getByRole('row', { name: 'mid term phy Assignment Type' }).getByRole('img').click();

        // Click on the 'Publish' option in the actions dropdown
        await page.getByText('Publish', { exact: true }).click();

        // Click on the 'Published' button to confirm the publishing action
        await page.getByRole('button', { name: 'Published' }).click();

        // Wait for 2 seconds to ensure the exam schedule is published successfully
        await page.waitForTimeout(2000);
    });
    test(' add student marks ', async ({ page }) => {

        // Navigate to the exam planner exams page
        await page.goto(`${baseUrl}/exam-planner/exams`);

        // Click on the exam with title 'mid term phy'
        // await page.click('text=mid term phy');
        await page.getByRole('cell', { name: 'mid term phy' }).click();


        // Wait for 2 seconds to ensure the page loads completely
        await page.waitForTimeout(2000);

        // Scroll to a specific position (example: scrolling right by 500px)
        await page.evaluate(() => {
            const table = document.getElementById('table-container'); // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
            }
        });

        // Wait for 1 second to ensure the scroll action is completed
        await page.waitForTimeout(1000);

        // Click on the action button in the 9th column of the row
        await page.locator('td:nth-child(9)').click();

        // Click on the 'Add Marks' option from the dropdown menu
        await page.locator('li').filter({ hasText: 'Add Marks' }).click();

        // Fill in the marks for the student
        await page.fill('[placeholder="Marks"]', '22');

        // Click on the 'Submit' button to save the marks
        await page.getByRole('button', { name: 'Submit' }).click();

        // Wait for 3 seconds to ensure the marks are saved successfully
        await page.waitForTimeout(3000);
    });
    test(' add  subject result', async ({ page }) => {

        // Navigate to the subject result page
        await page.goto(`${baseUrl}/exam-result/subject-result`);

        // Click on the 'Add Subject Result' button
        await page.getByRole('button', { name: 'Add Subject Result' }).click();

        // Click on the title input field
        await page.getByPlaceholder('Title').click();

        // Fill the title input field with 'physics exam'
        await page.getByPlaceholder('Title').fill('physics exam');

        // Click on the first 'Select' dropdown to choose the subject
        await page.getByText('Select').first().click();

        // Select 'physics' from the dropdown menu
        await page.locator('li').filter({ hasText: 'physics' }).click();

        // Click on the first 'Select' dropdown to choose the grading type
        await page.getByText('Select').first().click();

        // Select 'non GPA grading' from the dropdown menu
        await page.locator('li').filter({ hasText: 'non GPA grading' }).click();

        // Click on the 'Select' dropdown to choose the exam
        await page.getByText('Select').click();

        // Select 'mid term phy' from the dropdown menu
        await page.getByText('mid term phy').click();

        // Click on the weightage input field
        await page.getByPlaceholder('Weightage').click();

        // Fill the weightage input field with '100'
        await page.getByPlaceholder('Weightage').fill('100');

        // Click on the 'Save' button to save the subject result
        await page.getByRole('button', { name: 'Save' }).click();

        // Wait for 5 seconds to ensure the subject result is saved successfully
        await page.waitForTimeout(5000);
    });
    test('genrate subject and pulish', async ({ page }) => {

        // Navigate to the subject result page
        await page.goto(`${baseUrl}/exam-result/subject-result`);

        // Scroll to the end of the table horizontally to view actions
        await page.evaluate(() => {
            const table = document.getElementById('table-container'); // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
            }
        });

        // Click on the action button in the sixth column of the table
        await page.locator('td:nth-child(6)').click();

        // Click on 'Generate Result' option
        await page.getByText('Generate Result').click();

        // Click on the 'Confirm' button
        await page.getByRole('button', { name: 'Confirm' }).click();

        // Wait for 1 second to ensure the result generation is processed
        await page.waitForTimeout(1000);

        // Scroll to the end of the table horizontally to view actions again
        await page.evaluate(() => {
            const table = document.getElementById('table-container'); // Get the table element
            if (table) {
                table.scrollLeft = table.scrollWidth; // Scroll to the end of the table horizontally
            }
        });

        // Click on the action button in the sixth column of the table
        await page.locator('td:nth-child(6)').click();

        // Click on 'View Marks' option
        await page.getByText('View Marks').click();

        // Click on the 'Published Result' button
        await page.getByRole('button', { name: 'Published Result' }).click();

        // Click on the 'Published' button to confirm the publishing of the result
        await page.getByRole('button', { name: 'Published', exact: true }).click();
    });
    test('add  section result', async ({ page }) => {

        // Navigate to the section result page
        await page.goto(`${baseUrl}/exam-result/section-result`);

        // Click on the 'Add Section Result' button
        await page.getByRole('button', { name: 'Add Section Result' }).click();

        // Click on the 'Title' placeholder
        await page.getByPlaceholder('Title').click();

        // Fill in the title with 'physics result'
        await page.getByPlaceholder('Title').fill('physics result');

        // Click on the grading structure dropdown
        await page.locator('.flex > div > .min-w-1 > section > div > div > .w-full').first().click();

        // Select 'non GPA grading' from the dropdown
        await page.getByText('non GPA grading').click();

        // Click on the subject exam dropdown
        await page.locator('div:nth-child(4) > div:nth-child(2) > div > div > div > div > .min-w-1 > section > div > div > .w-full').click();

        // Select 'physics exam' from the dropdown
        await page.getByText('physics exam').click();

        // Click on the 'Select' dropdown
        await page.getByText('Select').click();

        // Select '1' from the dropdown for minimum passing subject
        await page.getByText('1', { exact: true }).click();

        // Click on the 'Save' button
        await page.getByRole('button', { name: 'Save' }).click();

        // Click on the action button in the fifth column of the table
        await page.locator('td').nth(4).click();

        // Select 'Generate Result' from the dropdown
        await page.locator('li').filter({ hasText: 'Generate Result' }).click();

        // Click on the 'Confirm' button
        await page.getByRole('button', { name: 'Confirm' }).click();

        // Click on the action button in the fifth column of the table again
        await page.locator('td').nth(4).click();

        // Select 'View Marks' from the dropdown
        await page.getByText('View Marks').click();

        // Click on the 'Published Result' button
        await page.getByRole('button', { name: 'Published Result' }).click();

        // Click on the 'Published' button to confirm the publishing of the result
        await page.getByRole('button', { name: 'Published', exact: true }).click();
    });
});