import { expect } from "@playwright/test";
export async function fillInputAfterLabel(
  page,
  labelText,
  inputText,
  fieldType,
  index = 0 // Default to first occurrence
) {
  labelText = labelText.trim();
  const labels = await page.locator(`label:text(\"${labelText}\")`).all(); // Get all matching labels
  if (labels.length > index) {
    const label = labels[index]; // Select specific label instance
    const labelSiblingDiv = await label
      .locator("xpath=following-sibling::div")
      .first();
    await labelSiblingDiv.click();
    if (fieldType === "text" || fieldType === "textarea") {
      const input = labelSiblingDiv.locator("input, textarea"); // Handle both input and textarea
      const existingValue = await input.evaluate((el) => el.value.trim());
      if (!existingValue) {
        await page.waitForTimeout(500);
        await input.type(inputText, { delay: 100 });
      }
    } else if (fieldType === "singleSelect") {
      await page.waitForTimeout(500);
      const listItems = await page.locator("li").all();
      for (const item of listItems) {
        const text = await item.textContent();
        if (text && text.trim().toLowerCase() === inputText.toLowerCase()) {
          await item.scrollIntoViewIfNeeded();
          await item.waitFor({ state: "visible" });
          await item.click();
          break;
        }
      }
    }
  }
}

export async function closeToastMessage(page) {
  const toast = page.locator(".ui-toast__actions");
  await expect(toast).toBeVisible({timeout: 2000});
  if(toast) await toast.first().click();
  await expect(toast).not.toBeVisible({timeout: 2000});
}
export async function clickUntilTargetVisible(
  page,
  triggerSelector,
  targetText,
) {
  const trigger = page.locator(triggerSelector);
  for (let attempt = 1; attempt <= 10; attempt++) {
    await trigger.click();
    const target = page.locator(`${triggerSelector} li`).filter({ hasText: targetText });
    try {
      await target.waitFor({ state: 'visible', timeout: 500 });
      await target.click();
      return;
    } catch (err) {
      if (attempt === 10) {
        throw new Error(`Failed to find and click "${targetText}" after ${10} attempts.`);
      }
      await page.waitForTimeout(300);
    }
  }
}

export async function timeClick(page,time) {
  const timeElement = await page.locator(`div.meridiem >> text=${time}`);
  const isSelected = await timeElement.evaluate((el) => {
    return el.classList.contains('bg-primary-purple-100') && el.classList.contains('text-primary-purple-600');
  });
  if (!isSelected) {
    await timeElement.click();
  }
}