import { test, expect } from "@playwright/test";

test("Exercise 25: Use Cookies and Local Storage", async ({page, context}) => {
    await page.goto("/module-5/exercise-25");

    //Set Local Storage
    await page.locator("#save-storage-btn").click();
    await page.reload();

    //Read local storage via evaluate 
    const storageValue = await page.evaluate(() => localStorage.getItem('playwright_test_key'));
    expect(storageValue).toBe("PlaywrightLocalStorageValue");

    //Read cookies via context 
    const cookies = await context.cookies();
    const testCookie = cookies.find(c => c.name === 'playwright_cookie');
    expect(testCookie).toBeDefined();
    expect(testCookie?.value).toBe("PlaywrightCookieValue");
})