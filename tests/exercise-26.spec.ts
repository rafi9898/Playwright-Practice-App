import { test, expect } from "@playwright/test";

test("Exercise 26: Create Test Data Using an API", async ({page, request}) => {
    //First, use APIREQUESTContext to create new user
    const response = await request.post('/api/users', {
        data: {
            name: 'Rafal Podraza',
            email: 'example@rafalpodraza.com'
        }
    })

    expect(response.ok()).toBeTruthy();
    const userData = await response.json();
    expect(userData.name).toBe('Rafal Podraza')

    //Now, navigate to UI and verify
    await page.goto("/module-6/exercise-26");

    const userList = page.locator("#users-list");
    await expect(userList).toBeVisible();

    //The UI should fetch the users on load and display the new user
    await expect(userList).toContainText("Rafal Podraza");
     await expect(userList).toContainText("example@rafalpodraza.com");
})