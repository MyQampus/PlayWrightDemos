import { test, expect } from "@playwright/test";
import { baseUrl, email, domain, password } from "../../.env.js";
import { loginSetup } from "./login.js";
import {
  AddCampus,
  AddClass,
  AddSection,
  AddRoom,
  AddGradingStructure,
} from "./campusClassAdd.js";
import {
  AddCampusAdmin,
  AddStaff,
  AddTeacher,
  AddStudent,
  AddStudentEnrollment,
  AddGuardian,
  AddStudentPickupPerson,
  OpenAllUserPage,
  AddExistingUserAsTeacher,
  AddStudentInClass,
} from "./addUsers.js";
import {
  AddSyllabusAutomater,
  AddSubjectSyllabusTemplate,
} from "./syllabusAutomater.js";
import {
  AddCampusAttendance,
  AddSectionAttendance,
  AddPeriodAttendance,
} from "./Attendance.js";
import {
  AddFeeType,
  AddStudentFee,
  AcceptStudentFee,
  ReceivedAndAcceptPayment,
} from "./FeeManager.js";
import {
  AddSubject,
  AddChapter,
  AddTopic,
  AddLesson,
  AddLessonPlanner,
  AddTimeTableAutomator,
  AddCurrentTimeTable,
  AddSubjectInClass,
} from "./syllabusManager.js";
import { ExamTestCases } from "./exam.js";
import { AddSupportQuery } from "./SupportQuery.js";
const authFile = "./authenticated_user.json";
test.describe("test case for demo video", () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await loginSetup(page, baseUrl, email, domain, password);
    await page.goto(`${baseUrl}/quick-actions`);
  });
  test("test", async () => {
    await AddCampus(page);
    await AddClass(page);
    await AddSection(page);
    await AddCampusAdmin(page);
    await AddStaff(page);
    await AddTeacher(page);
    await AddStudent(page);
    await AddStudentEnrollment(page);
    await AddGuardian(page);
    await AddStudentPickupPerson(page);
    await OpenAllUserPage(page);
    await AddRoom(page);
    await AddExistingUserAsTeacher(page);
    await AddSyllabusAutomater(page);
    await AddSubjectSyllabusTemplate(page);
    await AddGradingStructure(page);
    await AddCampusAttendance(page);
    await AddFeeType(page);
    await AddStudentFee(page);
    await AcceptStudentFee(page);
    await ReceivedAndAcceptPayment(page);
    await AddStudentInClass(page);
    await AddSectionAttendance(page);
    await AddSubject(page);
    await AddChapter(page);
    await AddTopic(page);
    await AddLesson(page);
    await AddLessonPlanner(page);
    await AddTimeTableAutomator(page);
    await AddCurrentTimeTable(page);
    await AddPeriodAttendance(page);
    await AddSubjectInClass(page);
    await ExamTestCases(page);
    await AddSupportQuery(page);
    await page.context().storageState({ path: authFile });
  });
});
