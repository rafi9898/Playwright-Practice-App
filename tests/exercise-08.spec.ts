import { test, expect } from "@playwright/test";

test("Exercise 8: Add a Product to the Shopping Cart", async ({page}) => {
    await page.goto("/module-3/exercise-8");

    const cartBadge = page.getByTestId("cart-badge");

    //Verify initial cart state 
    await expect(cartBadge).toHaveText("Cart: 0 items");

    //Click Add to Cart for product ID 1
    await page.getByTestId("add-to-cart-1").click();
    await expect(cartBadge).toHaveText("Cart: 1 items")

    //Click Add to Cart for product ID 2
    await page.getByTestId("add-to-cart-2").click();
    await expect(cartBadge).toHaveText("Cart: 2 items")
})