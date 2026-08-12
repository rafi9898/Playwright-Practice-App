import { test, expect } from "@playwright/test";
import {DropdownPage} from "./pages/DropdownPage";

test("Exercise 13: Handle Dropdown Lists", async ({page}) => {
    const dropdownPage = new DropdownPage(page);

    await dropdownPage.goto();

    await dropdownPage.selectStandardOption("red");
    await dropdownPage.verifyStandadrdSelection("red");

    await dropdownPage.selectCustomOption("Option B");
    await dropdownPage.verifyCustomSelection("Option B");
})