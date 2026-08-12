import { test, expect } from "@playwright/test";

test("Exercise 4: Work with Dynamic Elements", async ({page}) => {
    await page.goto("/module-2/exercise-4");

    //Wait for the button to appear and click it. The button has a dynamic ID that changes every reload. Use a locator based on text or data attributes.

    const dynamicBtn = page.getByTestId("dynamic-button");

    // Wait for it and click
    await dynamicBtn.click();

    // Assert the success message
    const message = page.locator("#dynamic-message");
    await expect(message).toBeVisible();
    await expect(message).toHaveText("Dynamic button clicked!");
})