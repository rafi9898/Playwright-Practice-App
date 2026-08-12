import { test, expect } from "@playwright/test";

test("Exercise 15: Automate a Date Picker", async ({page}) => {
    await page.goto("/module-4/exercise-15");

    const dateInput = page.locator("#appointment-date");

    //Fill the date 
    //The Value expected -> YYYY-MM-DD

    await dateInput.fill("2026-12-31");

    //Verify result 
    const result = page.locator("#selected-date-msg");
    await expect(result).toContainText("2026-12-31");
})