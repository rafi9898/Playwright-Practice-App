import { test, expect } from '@playwright/test';

test('Exercise 13: Handle Standard and Custom Dropdowns', async ({ page }) => {
  await page.goto('/module-4/exercise-13');

  // Standard Dropdown (HTML <select>)
  const standardSelect = page.locator('#standard-select');
  await standardSelect.selectOption('option2');
  await expect(standardSelect).toHaveValue('option2');
  await expect(page.locator('#standard-result')).toHaveText('Selected: option2');

  // Custom Dropdown (divs)
  const customDropdownBtn = page.locator('.custom-dropdown-button');
  await customDropdownBtn.click();
  
  // Wait for dropdown to open and click an option
  const option = page.locator('.custom-dropdown-item', { hasText: 'Custom Option 3' });
  await option.click();
  
  // Verify selected text
  await expect(customDropdownBtn).toHaveText('Custom Option 3');
});
