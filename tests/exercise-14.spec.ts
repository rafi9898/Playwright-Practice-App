import { test, expect } from '@playwright/test';

test('Exercise 14: Select Checkboxes and Radio Buttons', async ({ page }) => {
  await page.goto('/module-4/exercise-14');

  // Radio button
  const radioVanilla = page.locator('input[type="radio"][value="Vanilla"]');
  await radioVanilla.check();
  await expect(radioVanilla).toBeChecked();

  // Checkboxes
  const checkSprinkles = page.locator('input[type="checkbox"][value="Sprinkles"]');
  const checkCherry = page.locator('input[type="checkbox"][value="Cherry"]');
  
  await checkSprinkles.check();
  await expect(checkSprinkles).toBeChecked();
  
  await checkCherry.check();
  await expect(checkCherry).toBeChecked();

  // Verify the summary result
  const summary = page.locator('#ice-cream-summary');
  await expect(summary).toContainText('You ordered Vanilla with Sprinkles, Cherry');
});
