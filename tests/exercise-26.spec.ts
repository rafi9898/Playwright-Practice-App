import { test, expect } from '@playwright/test';

test('Exercise 26: Create Test Data Using an API', async ({ page, request }) => {
  // First, use APIRequestContext to create a new user
  const response = await request.post('/api/users', {
    data: {
      name: 'Playwright Tester',
      email: 'tester@playwright.dev'
    }
  });
  
  expect(response.ok()).toBeTruthy();
  const userData = await response.json();
  expect(userData.name).toBe('Playwright Tester');

  // Now, navigate to UI and verify the data appears
  await page.goto('/module-6/exercise-26');
  
  const usersList = page.locator('#users-list');
  await expect(usersList).toBeVisible();
  
  // The UI should fetch the users on load and display the new user
  await expect(usersList).toContainText('Playwright Tester');
  await expect(usersList).toContainText('tester@playwright.dev');
});
