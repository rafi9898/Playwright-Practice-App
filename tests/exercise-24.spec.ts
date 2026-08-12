import { test, expect } from "@playwright/test";

test("Exercise 24: Test Browser Navigation", async ({page}) => {
    await page.goto("/module-5/exercise-24");

    //Navigate to subpage 
    await page.locator("#navigate-btn").click();

    //Verify URL and content on subpage 
    await expect(page).toHaveURL("/module-5/exercise-24/subpage");
    await expect(page.locator("h2")).toHaveText("You are on the Subpage!");

    //Go back using browser history
    await page.goBack();
    await expect(page).toHaveURL("/module-5/exercise-24");
    await expect(page.locator("h2")).toContainText("Exercise 24");

    //Go forward 
    await page.goForward();
    await expect(page).toHaveURL("/module-5/exercise-24/subpage");
})