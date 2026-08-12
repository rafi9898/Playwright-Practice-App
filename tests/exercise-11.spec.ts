import { test, expect } from "@playwright/test";

test("Exercise 11: Complete the Checkout Process", async ({page}) => {
    await page.goto("/module-3/exercise-11");

    //Fill in the checkout form 
    const name = "Rafal Podraza";
    await page.locator("#name").fill(`${name}`);
    await page.locator("#address").fill("123 Main St");
    await page.locator("#city").fill("Warsaw");
    await page.locator("#zip").fill("00-001");
    await page.locator("#card").fill("123456789");

    //Submit
    await page.locator("#submit-order-btn").click();

    //Verify success message
    const successMsg = page.locator("#order-success");
    await expect(successMsg).toBeVisible();
    await expect(successMsg).toContainText(`Thank you for your purchase, ${name}!`)
})