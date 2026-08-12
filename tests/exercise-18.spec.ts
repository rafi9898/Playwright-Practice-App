import { test, expect } from "@playwright/test";

test("Exercise 18: Perform Drag and Drop", async ({page}) => {
    await page.goto("/module-4/exercise-18");

    const dragSource = page.locator("#drag-item-item-b");
    const dropTarget = page.locator("#target-area");

    //Perform drag and drop
    await dragSource.dragTo(dropTarget);

    //Verify success
    const successSource = page.locator(".dropped-item");
    await expect(successSource).toContainText("Item B");
})