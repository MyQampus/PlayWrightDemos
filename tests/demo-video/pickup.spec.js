import { test, expect } from "@playwright/test";
import { baseUrl, email, domain, password } from "../../.env.js";
import { loginSetup } from "./login.js";
import {
  AddPickupAssignee,
  AssignPickupPersonToStudent,
  CreateRequest,
  RespondToRequest,
  PickedStudentUp,
} from "./Pickup.js";

const authFile = "./authenticated_user.json";
test.describe("test case for Pickup Feature", () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await loginSetup(page, baseUrl, email, domain, password);
  });
  test("test", async () => {
    await AssignPickupPersonToStudent(page);
    await AddPickupAssignee(page);
    await CreateRequest(page);
    await RespondToRequest(page);
    await PickedStudentUp(page);
    await page.context().storageState({ path: authFile });
  });
});
