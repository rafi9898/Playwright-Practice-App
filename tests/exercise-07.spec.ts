import { test, expect } from '@playwright/test';

test('Exercise 7: Sort Products by Price', async ({ page }) => {
  await page.goto('/module-3/exercise-7');

  const sortSelect = page.getByTestId('sort-select');
  const productPrices = page.locator('.product-price');

  // Sort Low to High
  await sortSelect.selectOption('asc');
  
  let prices = await productPrices.allTextContents();
  // Strip '$' and convert to numbers
  let numPrices = prices.map(p => parseFloat(p.replace('$', '')));
  
  // Assert sorted correctly
  let isSortedAsc = numPrices.every((val, i, arr) => !i || val >= arr[i - 1]);
  expect(isSortedAsc).toBeTruthy();

  // Sort High to Low
  await sortSelect.selectOption('desc');
  
  prices = await productPrices.allTextContents();
  numPrices = prices.map(p => parseFloat(p.replace('$', '')));
  
  let isSortedDesc = numPrices.every((val, i, arr) => !i || val <= arr[i - 1]);
  expect(isSortedDesc).toBeTruthy();
});
