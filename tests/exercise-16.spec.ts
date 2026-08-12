import { test, expect } from "@playwright/test";

test("Exercise 16: Handle Modal Windows", async ({page}) => {
    await page.goto("/module-4/exercise-16");

    //Open the modal
    await page.locator("#open-modal-btn").click();

    //Verify modal is visible 
    const modal = page.locator("#simple-modal");
    await expect(modal).toBeVisible();
    await expect(modal).toContainText("Information Modal");

    //Close the modal
    await page.locator("#close-modal-btn").click();

    //Verify modal is hidden 
     await expect(modal).toBeHidden();
})