import { test, expect } from '@playwright/test';

test('Exercise 17: Accept and Dismiss Browser Dialogs', async ({ page }) => {
  await page.goto('/module-4/exercise-17');

  // Handle Alert
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('This is a simple alert!');
    await dialog.accept();
  });
  await page.getByTestId('trigger-alert-btn').click();
  await expect(page.locator('#dialog-result')).toHaveText('Alert accepted');

  // Handle Confirm (Dismiss)
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    await dialog.dismiss();
  });
  await page.getByTestId('trigger-confirm-btn').click();
  await expect(page.locator('#dialog-result')).toHaveText('Confirm dismissed');

  // Handle Prompt (Accept with text)
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    await dialog.accept('Playwright');
  });
  await page.getByTestId('trigger-prompt-btn').click();
  await expect(page.locator('#dialog-result')).toHaveText('Prompt answered with: Playwright');
});
