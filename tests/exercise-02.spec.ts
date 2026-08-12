import { test, expect } from "@playwright/test";

test("Exercise 2: Validate Incorrect Login Credentials", async ({page}) => {
    //Scenario A: Missing credentials
    await page.goto("/module-2/exercise-2");

    await page.locator("#login-btn").click();
    await expect(page.getByTestId('login-error')).toBeVisible();
    await expect(page.getByTestId('login-error')).toHaveText("Username and password are required.");


    //Scenario B: Invalid credentials
    await page.locator("#username").fill("wronguser");
    await page.locator("#password").fill("wrongpass");
    await page.locator("#login-btn").click();

    await expect(page.getByTestId("login-error")).toBeVisible();
    await expect(page.getByTestId("login-error")).toHaveText("Invalid credentials. Please try again.");
})