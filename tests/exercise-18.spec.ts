import { test, expect } from '@playwright/test';

test('Exercise 18: Drag and Drop an Element', async ({ page }) => {
  await page.goto('/module-4/exercise-18');

  const dragSource = page.locator('#draggable-item');
  const dropTarget = page.locator('#dropzone');

  // Perform drag and drop
  await dragSource.dragTo(dropTarget);

  // Verify success
  const successMsg = page.locator('#drop-success');
  await expect(successMsg).toBeVisible();
  await expect(successMsg).toHaveText('Item dropped successfully!');
});
