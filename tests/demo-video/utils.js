export async function fillInputAfterLabel(
  page,
  labelText,
  inputText,
  fieldType
) {
  const label = await page.locator(`label:text("${labelText}")`);
  const labelSiblingDiv = await label
    .locator("xpath=following-sibling::div")
    .first();
  await labelSiblingDiv.click();
  if ((fieldType === "text")) {
    await labelSiblingDiv.locator("input").fill(`${inputText}`);
  } else if ((fieldType === "singleSelect")) {
    await page.getByText(`${inputText}`).click();
  }
}
