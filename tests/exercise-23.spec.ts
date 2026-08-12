import { test, expect } from "@playwright/test";

test("Exercise 23: Automate an Embedded iframe", async ({page}) => {
    await page.goto("/module-5/exercise-23");

    //Locate the iframe
    const frameLocator = page.frameLocator("#test-iframe");

    //Interact with elements inside the frame
    await frameLocator.locator("#iframe-btn").click();

    //Verify action inside frame
    await expect(frameLocator.locator("#iframe-success-msg")).toContainText("Button inside iframe clicked!");
})