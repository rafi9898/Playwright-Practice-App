import { test, expect } from "@playwright/test";

test("Exercise 10: Remove a Product from the Cart", async ({page}) => {
    await page.goto("/module-3/exercise-10");

    const cartItems = page.locator(".cart-item");
    const removeBtns = page.getByTestId(/remove-btn-.*/);

    //Initial count is 2
    await expect(cartItems).toHaveCount(2);

    //Remove first item
    await removeBtns.first().click();

    //Verify only 1 item remains
     await expect(cartItems).toHaveCount(1);
})