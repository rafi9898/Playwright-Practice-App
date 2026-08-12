import { test, expect } from "@playwright/test";

test("Exercise 27: Validate an API Response", async ({request}) => {
    //Direct API testing without using UI page
    const response = await request.get('/api/products');

    //Validate Status Code
    expect(response.status()).toBe(200);

    //Validate Headers
    const headers = response.headers();
    expect(headers['content-type']).toContain("application/json");
    expect(headers['x-custom-header']).toBe("Playwright-Test");

    //Validate Response Body 
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    //Check structure of first product
    const firstProduct = body[0];
    expect(firstProduct).toHaveProperty("id");
    expect(firstProduct).toHaveProperty("name");
    expect(firstProduct).toHaveProperty("price");
    expect(firstProduct).toHaveProperty("stock");
})