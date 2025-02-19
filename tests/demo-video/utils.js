export async function fillInputAfterLabel(
  page,
  labelText,
  inputText,
  fieldType
) {
  labelText = labelText.trim();
  const labels = await page.locator(`label:text("${labelText}")`).all(); // Get all matching labels

  for (const label of labels) {
    const labelSiblingDiv = await label
      .locator("xpath=following-sibling::div")
      .first();
    await labelSiblingDiv.click();

    if (fieldType === "text") {
      const input = labelSiblingDiv.locator("input");
      const existingValue = await input.evaluate((el) => el.value.trim()); // Get current value

      if (!existingValue) {
        await input.fill(inputText);
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
