import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Exercise 19: Automate File Uploads', async ({ page }) => {
  await page.goto('/module-4/exercise-19');

  // Create a dummy file for uploading
  const filePath = path.join(__dirname, 'test-upload.txt');
  fs.writeFileSync(filePath, 'Hello Playwright Upload!');

  const fileInput = page.locator('#file-upload');
  
  // Set the file to upload
  await fileInput.setInputFiles(filePath);

  // Click Upload
  await page.getByTestId('upload-btn').click();

  // Verify success message
  const result = page.locator('#upload-result');
  await expect(result).toBeVisible();
  await expect(result).toContainText('Successfully uploaded: test-upload.txt');

  // Cleanup
  fs.unlinkSync(filePath);
});
