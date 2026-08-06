import { test, expect } from '@playwright/test';

test('Exercise 28: Intercept and Mock a Network Request', async ({ page }) => {
  // Intercept the API call and provide mock data
  await page.route('/api/products', async route => {
    const mockData = [
      { id: 999, name: 'Mocked Super Product', price: 9999.99, stock: 1 }
    ];
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockData)
    });
  });

  // Navigate to the page that fetches products
  await page.goto('/module-6/exercise-28');

  // Verify the UI displays the mocked data instead of the real backend data
  const productList = page.locator('#mocked-products-list');
  await expect(productList).toBeVisible();
  await expect(productList).toContainText('Mocked Super Product');
  await expect(productList).toContainText('$9999.99');
});
