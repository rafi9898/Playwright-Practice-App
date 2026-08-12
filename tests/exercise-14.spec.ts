import { test, expect } from "@playwright/test";

test("Exercise 14: Work with Checkboxes and Radio Buttons", async ({page}) => {
    await page.goto("/module-4/exercise-14");

    //Radio button
    const radioVanilla = page.locator("#flavor-vanilla");
    await radioVanilla.check();
    await expect(radioVanilla).toBeChecked();

    //checkboxes 
    const checkSprinkles = page.locator("#topping-sprinkles");
    const checkNuts = page.locator("#topping-nuts");

    await checkSprinkles.check();
    await checkNuts.check();

    await expect(checkSprinkles).toBeChecked();
    await expect(checkNuts).toBeChecked();

    //Verify the summary result
    const resultFlavor = page.locator("#result-flavor");
    const resultToppings = page.locator("#result-toppings");
    await expect(resultFlavor).toContainText("Vanilla");
    await expect(resultToppings).toContainText("sprinkles, nuts");
})