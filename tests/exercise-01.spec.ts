import { test, expect } from '@playwright/test';

test('Exercise 1: Automate a Login Form', async ({ page }) => {
  await page.goto('/module-2/exercise-1');

  // Fill in correct credentials
  await page.getByTestId('username-input').fill('admin');
  await page.getByTestId('password-input').fill('admin123');

  // Click login
  await page.getByTestId('login-button').click();

  // Assert successful login message
  const successMessage = page.locator('#welcome-message');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText('You have successfully logged in.');
});
