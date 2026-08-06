import { test, expect } from '@playwright/test';

test.describe('Exercise 30: End-to-End E-Commerce Scenario', () => {
  test('Complete purchase flow from registration to summary', async ({ page }) => {
    // Navigate to E2E scenario
    await page.goto('/module-7/exercise-30');
    
    // 1. Registration
    await page.getByTestId('reg-username').fill('e2e_user');
    await page.getByTestId('reg-password').fill('secret123');
    await page.getByTestId('reg-submit').click();
    
    // Verify transition to login
    await expect(page.getByTestId('reg-success-msg')).toBeVisible();
    
    // 2. Login
    await page.getByTestId('login-username').fill('e2e_user');
    await page.getByTestId('login-password').fill('secret123');
    await page.getByTestId('login-submit').click();
    
    // 3. Shop - Add product to cart
    await expect(page.locator('#e2e-shop')).toBeVisible();
    await page.getByTestId('e2e-add-1').click(); // Add 'Playwright Mastery Course'
    
    // 4. Cart verification
    await expect(page.locator('#e2e-cart')).toBeVisible();
    await expect(page.getByTestId('cart-item-name')).toHaveText('Playwright Mastery Course');
    await page.getByTestId('checkout-btn').click();
    
    // 5. Checkout Details
    await expect(page.locator('#e2e-checkout-form')).toBeVisible();
    await page.getByTestId('checkout-address').fill('Playwright Ave 123');
    await page.getByTestId('checkout-card').fill('1111222233334444');
    await page.getByTestId('checkout-submit').click();
    
    // 6. Final Summary
    await expect(page.locator('#e2e-summary')).toBeVisible();
    const successMsg = page.getByTestId('e2e-success-message');
    await expect(successMsg).toBeVisible();
    await expect(successMsg).toContainText('Thank you for your purchase. Your order number is');
  });
});
