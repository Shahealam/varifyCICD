// @ts-check
import { test, expect } from '@playwright/test';

test('Verify DemoQA page title', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page).toHaveTitle(/demosite/i);
});

test('Navigate to Elements category', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.getByText('Elements', { exact: true }).click();

  await expect(page).toHaveURL(/elements/);

  await expect(
    page.getByRole('heading', { name: 'Elements' })
  ).toBeVisible();
});