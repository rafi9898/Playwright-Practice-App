import { test, expect } from '@playwright/test';

test('Exercise 11: Automate the Checkout Process', async ({ page }) => {
  await page.goto('/module-3/exercise-11');

  // Fill in the checkout form
  await page.getByTestId('checkout-name').fill('John Doe');
  await page.getByTestId('checkout-address').fill('123 Main St');
  await page.getByTestId('checkout-card').fill('1234567812345678');
  
  // Submit
  await page.getByTestId('checkout-submit').click();

  // Verify success message
  const successMsg = page.getByTestId('checkout-success');
  await expect(successMsg).toBeVisible();
  await expect(successMsg).toContainText('Thank you for your order, John Doe!');
});
