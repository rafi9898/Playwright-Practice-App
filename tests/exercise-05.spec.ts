import { test, expect } from '@playwright/test';

test('Exercise 5: Automate a Search Feature', async ({ page }) => {
  await page.goto('/module-2/exercise-5');

  const searchInput = page.locator('#search-input');
  const searchBtn = page.locator('#search-btn');

  // Search for a specific product
  await searchInput.fill('headphones');
  await searchBtn.click();

  // Validate the results
  const productCards = page.locator('.product-item');
  
  // Wait for results to load (there's a simulated 1s delay)
  await expect(productCards).toHaveCount(1);
  await expect(productCards.first().locator('.product-name')).toContainText('Headphones');
});
