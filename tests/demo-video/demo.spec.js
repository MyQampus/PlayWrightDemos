import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

let browser;
let page;

// beforeAll(async () => {
//   browser = await chromium.launch({ headless: false }); // Browser launch 
//   const context = await browser.newContext(); // made new context 
//   page = await context.newPage(); // Page create 
// });

test.skip('Signup Flow', async ({ page }) => {
  await page.goto('https://dev.myqampus.com/signin');
  await page.goto('https://dev.myqampus.com/');
  await page.getByRole('button', { name: 'LogIn / SignUp' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Abdul');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Rehman');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('abdul23@yopmail.com');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Institute Name').click();
  await page.getByPlaceholder('Institute Name').fill('ilm');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Register' }).click();
});
test.skip('setup slider', async ({ page }) => {

  await page.getByPlaceholder('Institute Name').click();
  await page.getByPlaceholder('Institute Name').fill('London institute school');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Email').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Email').fill('superadmin1@gmail.com');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Email').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Email').fill('superadmin11@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Class Name').click();
  await page.getByPlaceholder('Class Name').fill('10 class');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Section').click();
  await page.getByPlaceholder('Section').fill('A section');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm' }).click();
})
test.skip('Create campus', async ({ page }) => {
  await page.goto(`${baseUrl}/quick-actions`);
  await page.getByRole('list').getByText('Campuses').click();
  await page.getByRole('button', { name: 'Add Campus' }).click();
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('Lahore campus');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('lahore');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(3000);
});
test.skip("create student at section level", async ({ page }) => {
  await selectCampusAndSection(page);
  await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();
  await page.getByRole("list").getByText("Students").click();
  await page.getByRole("button", { name: "Add Student" }).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Enter First Name").click();
  await page.getByPlaceholder("Enter First Name").fill("abdul");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Enter Last Name").click();
  await page.getByPlaceholder("Enter Last Name").fill("rahman");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Email").click();

  // Generate a dynamic email based on the current time (seconds since epoch)
  let currentSeconds = await Math.round(new Date().getTime() / 1000);
  let dynamicEmail = `testing${currentSeconds}@gmail.com`;
  await page.getByPlaceholder("Email").fill(dynamicEmail);
  await page.getByRole("button", { name: "Add", exact: true }).click();

  // Click the "Cancel" button to close the modal (if it's still open)
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.waitForTimeout(2000);
});

test.skip("mark Campus Attendance", async ({ page }) => {

  await page.goto(`${baseUrl}/quick-actions`);

  await page.getByText("Select Campus", { exact: true }).click();

  await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();

  await page.waitForTimeout(3000);

  // Locate the "Attendance" section on the page and click on it (clicking the second match of "Attendance" text)
  await page.locator('div').filter({ hasText: /^Attendance$/ }).nth(1).click();
  await page.getByText("Campus Attendance").click();
  await page.getByRole("button", { name: "Mark Attendance In" }).click();
  await page.waitForTimeout(1000);

  await page.locator("div").filter({ hasText: /^Select$/ }).nth(3).click();

  await page.locator(".options > ul > li > div").first().click();
  await page.getByRole("button", { name: "Mark", exact: true }).click();
});

test.skip("mark Section Attendance", async ({ page }) => {
  await selectCampusAndSection(page);
  await page.goto(`${baseUrl}/attendance/section/students`);
  await page.getByRole("button", { name: "Mark Section Attendance" }).click();

  await page.getByPlaceholder("Attendance Title").click();
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Attendance Title").fill("morning attendance ");
  await page.getByRole('cell', { name: 'Select All' }).locator('label span').click();

  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Submit" }).click();
});
test.skip("create period in section", async ({ page }) => {

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
  await page.waitForTimeout(1000);

  await page.locator('div').filter({ hasText: /^01$/ }).first().click();
  await page.getByText('00', { exact: true }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  /* 
      *  we are creating period 2:00 Pm to 3:00 Pm on word 
      * Here we insert condition where we are checking time is AM or Pm 
      * if current time is AM then select the toogle button and convert into PM
 
  */
  await page.locator('div:nth-child(2) > div:nth-child(2) > div > .relative > div > div').first().click();
  await page.locator('div').filter({ hasText: /^01$/ }).first().click();
  await page.locator('div').filter({ hasText: /^00$/ }).click();
  await page.waitForTimeout(1000);

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
test.skip('create fee type', async ({ page }) => {
  await page.goto(`${baseUrl}/fee/types`);
  await page.getByRole('button', { name: 'Add Fee Type' }).click();
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Fee Type').click();
  await page.getByPlaceholder('Fee Type').fill('monthly fee');
  await page.waitForTimeout(1000)

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000)
});
test.skip('create discount type', async ({ page }) => {
  await page.goto(`${baseUrl}/fee/discount-types`);
  await page.getByRole('button', { name: 'Add Discount Type' }).click();
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Discount Title').fill('sports base');
  await page.waitForTimeout(1000)

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
});

test.skip('create section fee', async ({ page }) => {
  await page.goto(`${baseUrl}/fee/section`);
  await page.getByRole('button', { name: 'Add Section Fee' }).click();
  await page.getByText('Select').first().click();
  await page.waitForTimeout(1000)

  await page.getByText('monthly fee', { exact: true }).click();
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Amount').fill('150');
  await page.waitForTimeout(1000)

  await page.getByRole('button', { name: 'Select Date' }).click();
  await page.waitForTimeout(1000)

  await page.getByText('31', { exact: true }).click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Save' }).click()
  await page.waitForTimeout(2000);
});
test.skip('received student fee', async ({ page }) => {
  await page.goto(`${baseUrl}/fee/receivable`);
  // Scroll the table horizontally to the end
  await page.evaluate(() => {
    const table = document.getElementById('table-container');
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.getByRole('row', { name: 'AR ali raza' }).getByRole('img').first().click();
  await page.waitForTimeout(1000)
  await page.locator('#table-container').getByText('Accept Payment').click();
  await page.waitForTimeout(1000)
  await page.getByPlaceholder('Receiving Amount').fill('1');
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Select Date' }).click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Accept' }).click();
});
test.skip('add fine to student', async ({ page }) => {

  await page.goto(`${baseUrl}/fee/receivable`);

  await page.evaluate(() => {
    const table = document.getElementById('table-container');
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.getByRole('row', { name: 'AR ali raza' }).getByRole('img').first().click();
  await page.getByText('Add Fine').click();
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Fine Amount').fill('50');
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Fine Reason').click();
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Fine Reason').fill('fighting ');
  await page.waitForTimeout(1000)

  await page.getByRole('button', { name: 'Add', exact: true }).click();
});
test.skip('add discount to student', async ({ page }) => {
  await page.goto(`${baseUrl}/fee/receivable`);
  // Scroll the table horizontally to the end
  await page.evaluate(() => {
    const table = document.getElementById('table-container');
    if (table) {
      table.scrollLeft = table.scrollWidth;
    }
  });
  await page.getByRole('row', { name: 'AR ali raza' }).getByRole('img').first().click();
  await page.getByText('Add Discount').click();
  await page.waitForTimeout(1000);
  await page.getByText('Select', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.locator('li').filter({ hasText: 'sports base' }).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Discount Amount').fill('100');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
});

test.skip('Exam module test cases ', () => {

  test.beforeEach(async ({ page }) => {
    await selectCampusAndSection(page)
  });
  test('create subject in class', async ({ page }) => {
    await page.getByRole('heading', { name: 'Syllabus Manager' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Subjects' }).locator('a').click();
    await page.getByRole('button', { name: 'Add Subjects' }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Subject Title').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Subject Title').fill('physics');

    await page.getByPlaceholder('Concise Name').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Concise Name').fill('phy01');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(2000);
  });
  test(' add student in section', async ({ page }) => {

    await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();

    await page.getByText('Students').first().click();

    await page.getByRole('button', { name: 'Add Student' }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter First Name').click();

    await page.getByPlaceholder('Enter First Name').fill('ali');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter Last Name').click();
    await page.getByPlaceholder('Enter Last Name').fill('raza');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('aliraza@gmail.com');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add', exact: true }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.waitForTimeout(2000);
  });
  test('add non structure grading type', async ({ page }) => {

    await page.goto(`${baseUrl}/grading-structure/non-gpa`);

    await page.getByRole('button', { name: 'Add Structure' }).click();

    await page.getByPlaceholder('Title', { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Title', { exact: true }).fill('non GPA grading');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add New Grade' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add New Grade' }).click();
    await page.locator('input[name="GRADE_TITLE \\+ 0"]').click();
    await page.locator('input[name="GRADE_TITLE \\+ 0"]').fill('A+');
    await page.waitForTimeout(1000);
    await page.locator('input[name="GRADE_TITLE \\+ 1"]').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="GRADE_TITLE \\+ 1"]').fill('A');
    await page.locator('input[name="GRADE_VAL \\+ 1"]').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="GRADE_VAL \\+ 1"]').fill('90');
    await page.waitForTimeout(1000);
    await page.locator('input[name="GRADE_TITLE \\+ 2"]').click();
    await page.locator('input[name="GRADE_TITLE \\+ 2"]').fill('A-');
    await page.waitForTimeout(1000);
    await page.locator('input[name="GRADE_VAL \\+ 2"]').click();
    await page.locator('input[name="GRADE_VAL \\+ 2"]').fill('70');
    await page.locator('input[name="GRADE_TITLE \\+ 3"]').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="GRADE_TITLE \\+ 3"]').fill('F');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);
  });
  test(' add exams type', async ({ page }) => {
    await page.goto(`${baseUrl}/exam-planner/types`);
    await page.getByRole('button', { name: 'Add Exam Type' }).click();
    await page.getByPlaceholder('Exam Type').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Exam Type').fill('Assignment Type');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add Exam Type' }).click();
    await page.getByPlaceholder('Exam Type').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Exam Type').fill('Mid Term Exam');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add Exam Type' }).click();
    await page.getByPlaceholder('Exam Type').click();
    await page.getByPlaceholder('Exam Type').fill('Final Term Exam');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
  });
  test(' add exam schedule ', async ({ page }) => {
    await page.goto(`${baseUrl}/exam-planner/exams`);
    await page.getByRole('button', { name: 'Add New Exam' }).click();
    await page.getByPlaceholder('Title').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Title').fill('mid term phy');
    await page.waitForTimeout(1000);
    await page.getByText('Select').first().click();
    await page.getByText('Assignment Type').click();
    await page.waitForTimeout(1000);
    await page.getByText('Select').first().click();
    await page.locator('li').filter({ hasText: /^physics$/ }).click();
    await page.getByPlaceholder('Exam Duration').click();
    await page.getByPlaceholder('Exam Duration').fill('90');
    await page.getByRole('button', { name: 'Select Date' }).click();
    await page.getByText('31', { exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.getByPlaceholder('Total Marks').click();
    await page.getByPlaceholder('Total Marks').fill('55');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);
  });
  test(' add exam schedule  published', async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.goto(`${baseUrl}/exam-planner/exams`);
    await page.getByRole('row', { name: 'mid term phy Assignment Type' }).getByRole('img').click();
    await page.getByText('Publish', { exact: true }).click();
    await page.getByRole('button', { name: 'Published' }).click();
    await page.waitForTimeout(2000);
  });
  test(' add student marks ', async ({ page }) => {
    await page.goto(`${baseUrl}/exam-planner/exams`);
    await page.getByRole('cell', { name: 'mid term phy' }).click();
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      const table = document.getElementById('table-container');
      if (table) {
        table.scrollLeft = table.scrollWidth;
      }
    });
    await page.waitForTimeout(1000);
    await page.locator('td:nth-child(9)').click();
    await page.locator('li').filter({ hasText: 'Add Marks' }).click();
    await page.fill('[placeholder="Marks"]', '22');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);
  });
  test(' add  subject result', async ({ page }) => {
    await page.goto(`${baseUrl}/exam-result/subject-result`);
    await page.getByRole('button', { name: 'Add Subject Result' }).click();
    await page.getByPlaceholder('Title').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Title').fill('physics exam');
    await page.getByText('Select').first().click();
    await page.waitForTimeout(1000);
    await page.locator('li').filter({ hasText: 'physics' }).click();
    await page.getByText('Select').first().click();
    await page.waitForTimeout(1000);
    await page.locator('li').filter({ hasText: 'non GPA grading' }).click();
    await page.getByText('Select').click();
    await page.waitForTimeout(1000);
    await page.getByText('mid term phy').click();
    await page.getByPlaceholder('Weightage').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Weightage').fill('100');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);
  });
  test('genrate subject and pulish', async ({ page }) => {

    await page.goto(`${baseUrl}/exam-result/subject-result`);
    await page.evaluate(() => {
      const table = document.getElementById('table-container');
      if (table) {
        table.scrollLeft = table.scrollWidth;
      }
    });
    await page.locator('td:nth-child(6)').click();
    await page.getByText('Generate Result').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(1000);

    // Scroll to the end of the table horizontally to view actions again
    await page.evaluate(() => {
      const table = document.getElementById('table-container');
      if (table) {
        table.scrollLeft = table.scrollWidth;
      }
    });
    await page.locator('td:nth-child(6)').click();
    await page.getByText('View Marks').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Published Result' }).click();
    await page.getByRole('button', { name: 'Published', exact: true }).click();
  });
  test('add  section result', async ({ page }) => {
    await page.goto(`${baseUrl}/exam-result/section-result`);
    await page.getByRole('button', { name: 'Add Section Result' }).click();
    await page.getByPlaceholder('Title').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Title').fill('physics result');
    await page.locator('.flex > div > .min-w-1 > section > div > div > .w-full').first().click();
    await page.getByText('non GPA grading').click();
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(4) > div:nth-child(2) > div > div > div > div > .min-w-1 > section > div > div > .w-full').click();
    await page.getByText('physics exam').click();
    await page.getByText('Select').click();
    await page.waitForTimeout(1000);
    await page.getByText('1', { exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('td').nth(4).click();
    await page.waitForTimeout(1000);
    await page.locator('li').filter({ hasText: 'Generate Result' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.locator('td').nth(4).click();
    await page.waitForTimeout(1000);
    await page.getByText('View Marks').click();
    await page.getByRole('button', { name: 'Publshed Result' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Published', exact: true }).click();
    await page.waitForTimeout(1000);
  })
})
