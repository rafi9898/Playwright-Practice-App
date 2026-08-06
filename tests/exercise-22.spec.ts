import { test, expect } from '@playwright/test';

test('Exercise 22: Interact with Pop-up Windows', async ({ page, context }) => {
  await page.goto('/module-5/exercise-22');

  const popupPromise = context.waitForEvent('page');
  
  // Trigger popup (window.open)
  await page.getByTestId('open-popup-btn').click();
  
  const popup = await popupPromise;
  await popup.waitForLoadState();

  // Interact with popup
  await expect(popup.locator('h1')).toHaveText('Pop-up Window Content');
  
  // Close the popup from inside itself
  await popup.getByTestId('close-popup-btn').click();

  // Wait for popup to be closed
  expect(popup.isClosed()).toBeTruthy();
});
