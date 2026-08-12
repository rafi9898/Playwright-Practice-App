import { test, expect } from "@playwright/test";

test("Exercise 6: Filter Products by Category", async ({page}) => {
    await page.goto("/module-3/exercise-6");

    const categoryFilter = page.getByTestId("category-filter");
    const productCards = page.getByTestId("product-card");
    const productCategories = page.locator(".product-category");

    // Initailly there are 6 products 
    await expect(productCards).toHaveCount(6);

    // Filter by "Gaming"
    await categoryFilter.selectOption("Gaming");

    // Verify only Gaming products are shown 
     await expect(productCards).toHaveCount(2);

     const count = await productCategories.count();
     for(let i = 0; i < count; i++) {
        await expect(productCategories.nth(i)).toHaveText("Gaming");
     }
})