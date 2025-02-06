export async function AddSubject(page) {
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
}
export async function AddChapter(page) {
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
}
export async function AddTopic(page) {
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
}
export async function AddLesson(page) {
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
}
export async function AddLessonPlanner(page) {
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
}
export async function AddTimeTableAutomator(page) {
  //open Time Table
  await page
    .locator("div")
    .filter({ hasText: /^Time Table$/ })
    .nth(1)
    .click();
  //add time table automator
  await page.getByText("Time Table Automator").click();
  await page.getByRole("button", { name: "Add Time Table Automator" }).click();
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
}
export async function AddCurrentTimeTable(page) {
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
}
export async function AddSubjectInClass(page) {
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
   await page.evaluate(() => {
     const table = document.getElementById("table-container");
     if (table) {
       table.scrollLeft = table.scrollWidth;
     }
   });
   const subjectAction = await page.locator("#subjectAction0");
   await subjectAction.click();

   await page.locator("#subjectAction0").click();

   // await page.locator("td#subjectAction0 div.icon").click();
   await page.locator("li").filter({ hasText: "Assign Teacher" }).click();
   await page
     .locator("div")
     .filter({ hasText: /^Select$/ })
     .nth(2)
     .click();
   await page.locator("li").filter({ hasText: "ANali nawaz" }).click();
   await page.locator(".w-full > section > div > div").first().click();
   await page.getByRole("button", { name: "Save" }).click();

}
