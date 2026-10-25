import { test, expect } from '@playwright/test';

// 1. File Level Hook (Applies to all tests in this file)
test.beforeAll(async () => {
  console.log('Setup global configurations...');
});

// 2. Scoped Hook inside a Describe Group
test.describe('Shopping Cart Tests', () => {
  
  // Runs before each test inside this describe block
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
  });

  test('should display empty cart message', async ({ page }) => {
    await expect(page.locator('.empty-message')).toBeVisible();
  });

  test('should allow adding items', async ({ page }) => {
    await page.click('#add-item-btn');
    await expect(page.locator('.cart-count')).toHaveText('1');
  });

  // Runs after each test inside this describe block
  test.afterEach(async ({ page }) => {
    console.log('Cleaning up cart state...');
  });
});

test.afterAll(async () => {
  console.log('Teardown complete.');
});
