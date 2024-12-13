import { test } from "@playwright/test";
import { baseUrl, password } from "../../.env.js";
import SETUP_CONSTANTS from "../../constants/setup-constants.js";
import { selectCampusAndSection } from "../../utils/utiils.js";
test.describe("Test Case of Guardian", () => {
  test.skip("Add student for Guardian", async ({ page }) => {
   /*
    * Goto quick Action
    * Click => Select Campus
    * Select Campus
    * Select Class and Section 
    */
    await selectCampusAndSection(page);
    /*
     * Goto the Student Page
     * Click => Add student
     */
    await page.goto(`${baseUrl}/Students`);

    // await page.locator('div').filter({ hasText: /^Users$/ }).nth(1).click();
    // await page.getByRole('link', { name: 'Students' }).first().click();
    // await page.getByRole('button', { name: 'Add Student' }).click();
     await page.getByRole("list").getByText("Students").click();
     await page.getByRole("button", { name: "Add Student" }).click();
    /*
    * Fill out : First Name and Last Name
    * Fill out : Email
    * Click => Add Button
    * Click cancel button for not create guardian
    */
    await page.getByPlaceholder("Enter First Name").fill("usman");
    await page.getByPlaceholder("Enter Last Name").fill("ali");
    await page.getByPlaceholder("Email").fill("usmanali@gmail.com");
    await page.getByRole("button", { name: "Add", exact: true }).click();
    await page.getByRole("button", { name: "Cancel" }).click();
  });
  test.skip("test of Guardian", async ({ page }) => {
    await page.goto(`${baseUrl}/quick-actions`);
   /*
    * Goto quick Action
    * Click => Select Campus
    * Select Campus
    */
    await page.getByText("Select Campus", { exact: true }).click();
    await page.getByText(SETUP_CONSTANTS.DEFAULT_CAMPUS).click();
   /*
    * GoTo Guardian
    * Click Add Guardian
    */
  
   await page.goto(`${baseUrl}/guardians`);
    await page.getByRole("button", { name: "Add Guardians" }).click();
   /*
    * Fill out First Name
    * Click the Last naName
    * Click Email and fill
    * Click save button
    */
    await page.getByPlaceholder("Enter First Name").fill("ahmad");
    await page.getByPlaceholder("Enter Last Name").fill("shah");
    await page.getByPlaceholder("Email").fill("ahmadshah@gmail.com");
    await page.getByRole("button", { name: "Save" }).click();
  /*
   * Click to the action dropdown
   * Click the Edit List
   * Fill out: First Name
   * Fill out: Last Name 
   * Click the Update Button
   */
    await page.waitForTimeout(2000);
    await page.getByRole("row", { name: "ahmadshah@gmail.com" }).locator("td:nth-child(11)").click();
    await page.locator("li").filter({ hasText: "Edit" }).click();
    await page.getByPlaceholder("Enter First Name").fill("talha");
    await page.getByPlaceholder("Enter Last Name").fill("saeed");
    await page.getByRole("button", { name: "Update" }).click();
    await page.waitForTimeout(1000);
   /*
    * Click the action Button
    * Click the Associate Student
    */
    await page.getByRole("row", { name: "ahmadshah@gmail.com" }).locator("td:nth-child(11)").click();
    await page.locator("li").filter({ hasText: "Associate Student" }).click();
   /*
    * Click => select
    * Select Guardian Student
    */
    await page.getByText("Select", { exact: true }).click();
    await page.locator("li").filter({ hasText: "usman ali" }).click();
   /*
    * Click to the Relation
    * Filled the Relation
    * Click => Associate Button
    */
    await page.getByPlaceholder("Relation").click();
    await page.getByPlaceholder("Relation").fill("Son");
    await page.getByRole("button", { name: "Associate" }).click();
    /*
    * Click the action Button
    * Click the Disable
    * Click the Disable Button
    */
    await page.getByRole("row", { name: "ahmadshah@gmail.com" }).locator("td:nth-child(11)").click();
    await page.locator("li").filter({ hasText: "Disable Login" }).click();
    await page.getByRole("button", { name: "Disable" }).click();
    /*
    * Click the action Button
    * Click the Enable
    * Click the Enable Button
    */
    await page.getByRole("row", { name: "ahmadshah@gmail.com" }).locator("td:nth-child(11)").click();
    await page.locator("li").filter({ hasText: "Enable Login" }).click();
    await page.getByRole("button", { name: "Enable" }).click();
    /*
    * Click the action Button
    * Click the Deactive User
    */
    await page.getByRole("row", { name: "ahmadshah@gmail.com" }).locator("td:nth-child(11)").click();
    await page.locator("li").filter({ hasText: "Deactivate User" }).click();
    /*
    * Click the Password Input
    * Fill out Password from env
    * Click Deactive Button
    */
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Deactivate" }).click();
    await page.waitForTimeout(2000);
    //Goto the Student
    await page.getByRole("list").getByText("Students").click();
    /*
    * Click => action Button
    * Select Deactive Button
    * Click => Password
    * Fill the Password
    * Click Deactive Button
    */
    await page.getByRole("row", { name: "usmanali@gmail.com" }).locator("td:nth-child(15)").click();
    await page.locator("li").filter({ hasText: "Deactivate User" }).click();
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Deactivate" }).click();
    await page.waitForTimeout(2000);
    });
});
