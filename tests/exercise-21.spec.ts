import { test, expect } from "@playwright/test";

test("Exercise 21: Work with Multiple Tabs", async ({page, context}) => {
    await page.goto("/module-5/exercise-21");

    //Start waiting for new page before clicking 
    const pagePromise = context.waitForEvent('page');

    //Click the link that opens in new tab
    await page.locator("#new-tab-link").click();

    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    //Verify we are on the new page
    await expect(newPage).toHaveTitle(/Playwright/)

    //We can close the new page
    await newPage.close();

    //Original page is still intact
    await expect(page.locator("#new-tab-link")).toBeVisible();
})