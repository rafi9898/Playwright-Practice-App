import { test, expect } from "@playwright/test";

test("Exercise 17: Work with Browser Dialogs", async ({page}) => {
    await page.goto("/module-4/exercise-17");

    //Handle Alert
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("This is a simple alert message!");
        await dialog.accept();
    })

    await page.locator("#alert-btn").click();
    await expect(page.locator("#dialog-result")).toHaveText("Result: Alert was triggered");

    //Handle Confirm (Dismiss)
    page.once("dialog", async dialog => {
        expect(dialog.type()).toBe("confirm");
        await dialog.dismiss();
    })

    await page.locator("#confirm-btn").click();
    await expect(page.locator("#dialog-result")).toHaveText("Result: Confirm dismissed");

    //Handle Prompt (Accept with text)
    page.once("dialog", async dialog => {
        expect(dialog.type()).toBe("prompt");
        await dialog.accept("Playwright");
    })
    
    await page.locator("#prompt-btn").click();
    await expect(page.locator("#dialog-result")).toHaveText("Result: Prompt returned: Playwright");
})