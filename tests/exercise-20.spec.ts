import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Exercise 20: Automate File Downloads', async ({ page }) => {
  await page.goto('/module-4/exercise-20');

  // Start waiting for download before clicking.
  const downloadPromise = page.waitForEvent('download');
  
  await page.getByTestId('download-btn').click();
  
  const download = await downloadPromise;

  // Wait for the download process to complete and save it to a temporary path
  const suggestedFilename = download.suggestedFilename();
  expect(suggestedFilename).toBe('playwright-cheat-sheet.pdf');

  // Save the downloaded file to a path
  const downloadPath = await download.path();
  expect(fs.existsSync(downloadPath)).toBeTruthy();
});
