import { test, expect } from "@playwright/test";
import fs from "fs";

test("Exercise 20: Download and Verify a File", async ({page}, testInfo) => {
    await page.goto("/module-4/exercise-20");

    // Start waiting for download before clicking
    const downloadPromise = page.waitForEvent("download");

    await page.locator("#download-btn").click();
    const download = await downloadPromise;

    //Wait for the download process 
    const suggestedFilename = download.suggestedFilename();
    expect(suggestedFilename).toBe("sample-document.txt");

    //Save the download file to a path
    const downloadPath = testInfo.outputPath(suggestedFilename);
    await download.saveAs(downloadPath);
    
    expect(fs.existsSync(downloadPath)).toBeTruthy();
})