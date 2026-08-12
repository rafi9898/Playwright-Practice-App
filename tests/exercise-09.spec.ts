import { test, expect } from "@playwright/test";

test("Exercise 9: Update Product Quantity", async ({page}) => {
    await page.goto("/module-3/exercise-9");

    const quantityInput = page.getByTestId("quantity-input");
    const totalPrice = page.getByTestId("total-price");

    //Verify initial state
    await expect(quantityInput).toHaveValue('1');
    await expect(totalPrice).toHaveText("$49.99");

    //Increase quantity to 3
    await quantityInput.fill("3");

    //Verify price updates
    await expect(totalPrice).toHaveText("$149.97");
})