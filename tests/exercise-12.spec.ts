import { test, expect } from '@playwright/test';

test('Exercise 12: Validate Order Summary and Taxes', async ({ page }) => {
  await page.goto('/module-3/exercise-12');

  const subtotal = await page.getByTestId('subtotal').textContent();
  const tax = await page.getByTestId('tax').textContent();
  const total = await page.getByTestId('total').textContent();

  const subtotalNum = parseFloat(subtotal?.replace('$', '') || '0');
  const taxNum = parseFloat(tax?.replace('$', '') || '0');
  const totalNum = parseFloat(total?.replace('$', '') || '0');

  // Assert correct tax calculation (23% of subtotal)
  expect(taxNum).toBeCloseTo(subtotalNum * 0.23, 2);

  // Assert total is subtotal + tax
  expect(totalNum).toBeCloseTo(subtotalNum + taxNum, 2);
});
