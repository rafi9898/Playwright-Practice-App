import { test, expect } from "@playwright/test";

test("Exercise 22: Handle Pop-Up Windows", async ({page, context}) => {
    await page.goto("/module-5/exercise-22");

    const popupPromise = context.waitForEvent("page");

    //Trigger popup
    await page.locator("#open-popup-btn").click();

    const popup = await popupPromise;
    await popup.waitForLoadState();

    //Interact with popup
    await expect(popup.locator("h2")).toHaveText("Exercise 22: Handle Pop-Up Windows");

    //Wait for popup to be closed and close popup
    await popup.close();
    expect(popup.isClosed()).toBeTruthy();
})