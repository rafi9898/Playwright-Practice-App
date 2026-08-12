import { test, expect } from "@playwright/test";

test("Exercise 29: Test Failed API Responses", async ({page}) => {
    await page.goto("/module-6/exercise-29");

    //Click the fetch button
    await page.locator("#fetch-error-btn").click();

    //Verify the application propely handled the 500 status 
    const errorContainer = page.locator("#error-message-container");
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer).toContainText("Database connection failed");
})