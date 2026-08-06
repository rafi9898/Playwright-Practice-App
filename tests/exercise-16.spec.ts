import { test, expect } from '@playwright/test';

test('Exercise 16: Handle Modals and Overlays', async ({ page }) => {
  await page.goto('/module-4/exercise-16');

  // Open the modal
  await page.getByTestId('open-modal-btn').click();

  // Verify modal is visible
  const modal = page.locator('.modal-content');
  await expect(modal).toBeVisible();
  await expect(modal).toContainText('Important Information');

  // Close the modal
  await page.getByTestId('close-modal-btn').click();

  // Verify modal is hidden
  await expect(modal).toBeHidden();
});
