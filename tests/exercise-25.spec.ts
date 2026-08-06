import { test, expect } from '@playwright/test';

test('Exercise 25: Manage Cookies and Local Storage', async ({ page, context }) => {
  await page.goto('/module-5/exercise-25');

  // --- Local Storage ---
  await page.getByTestId('save-storage-btn').click();
  
  // Read local storage via evaluate
  const storageValue = await page.evaluate(() => localStorage.getItem('playwright_course'));
  expect(storageValue).toBe('advanced_automation');
  
  await expect(page.locator('#storage-result')).toContainText('Item saved to LocalStorage');

  // --- Cookies ---
  await page.getByTestId('save-cookie-btn').click();
  
  // Read cookies via context
  const cookies = await context.cookies();
  const testCookie = cookies.find(c => c.name === 'test_cookie');
  expect(testCookie).toBeDefined();
  expect(testCookie?.value).toBe('pw_cookie_value');

  await expect(page.locator('#cookie-result')).toContainText('Cookie has been saved');
});
