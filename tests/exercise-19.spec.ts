import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("Exercise 19: Upload and Validate a File", async ({page}) => {
    await page.goto("/module-4/exercise-19");

    //Create a dummy file for uploading
    const filePath = path.join(__dirname, 'test-upload.txt');
    fs.writeFileSync(filePath, "Hello from playwright! Example File");

    const fileInput = page.locator("#file-upload");

    // Set the file to upload
    await fileInput.setInputFiles(filePath);

    // Click Upload 
    await page.locator("#upload-btn").click();

    //Verify success message
    const result = page.locator("#upload-success");
    await expect(result).toBeVisible();
    await expect(result).toContainText("was successfully uploaded!");

    // Cleanup
    fs.unlinkSync(filePath);
})