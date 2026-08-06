import { test, expect } from '@playwright/test';

test('Exercise 15: Automate a Date Picker', async ({ page }) => {
  await page.goto('/module-4/exercise-15');

  const dateInput = page.getByTestId('date-input');
  
  // Fill the date directly (simulating typing into the date picker)
  // The value expected by HTML date inputs is YYYY-MM-DD
  await dateInput.fill('2026-12-31');

  // Verify result
  const result = page.getByTestId('date-result');
  await expect(result).toContainText('2026-12-31');
});
