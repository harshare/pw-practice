import { test, expect } from '@playwright/test';

test('simple test', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
    
    await expect(page.locator(".login_logo")).toBeVisible();
})