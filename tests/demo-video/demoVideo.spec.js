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
  AddSectionFeeTestCase,
  AddMonthlyFeeGeneratorTestCase,
  AddFeeDiscountTypeTestCase,
  AddFeeDiscountAndViewTestCase,
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
import { AddExams, AddExamTypes, AddExamsMarks, AddSubjectResult, AddSectionResult } from "./exam.js";
import { AddAnnouncemnetType, AddStaffAnnouncemnets, AddGuardianAnnouncement, AddStudentAnnouncement, AddTeacherAnnouncement } from "./Announcements.js";
import { AddSupportQuery } from "./SupportQuery.js";
import { AddAppointmentCategories, AddAppoinmentAvailability } from "./appointment.js";
const authFile = "./authenticated_user.json";
test.describe("test case for demo video", () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await loginSetup(page, baseUrl, email, domain, password);
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
    await AddStudentInClass(page);
    await AddGradingStructure(page);
    await AddFeeType(page);
    await AddStudentFee(page);
    await AcceptStudentFee(page);
    await ReceivedAndAcceptPayment(page);
    await AddSectionFeeTestCase(page);
    await AddMonthlyFeeGeneratorTestCase(page);
    await AddFeeDiscountTypeTestCase(page);
    await AddFeeDiscountAndViewTestCase(page);
    await AddSyllabusAutomater(page);
    await AddSubjectSyllabusTemplate(page);
    await AddSubject(page);
    await AddChapter(page);
    await AddTopic(page);
    await AddLesson(page);
    await AddLessonPlanner(page);
    await AddTimeTableAutomator(page);
    await AddCurrentTimeTable(page);
    await AddCampusAttendance(page);
    await AddPeriodAttendance(page);
    await AddSectionAttendance(page);
    await AddSubjectInClass(page);
    await AddExamTypes(page);
    await AddExams(page);
    await AddExamsMarks(page);
    await AddSubjectResult(page);
    await AddSectionResult(page);
    await AddAnnouncemnetType(page);
    await AddStaffAnnouncemnets(page);
    await AddStudentAnnouncement(page);
    await AddGuardianAnnouncement(page);
    await AddTeacherAnnouncement(page);
    await AddSupportQuery(page);
    await AddAppointmentCategories(page);
    await AddAppoinmentAvailability(page);
    await page.context().storageState({ path: authFile });
  });
});
