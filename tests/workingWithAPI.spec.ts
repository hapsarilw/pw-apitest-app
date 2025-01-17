import { test, expect } from "@playwright/test";
import tags from '../test-data/tags.json'

test.beforeEach(async ({ page }) => {
  await page.route(
    "*/**/api/tags",
    async (route) => {
      await route.fulfill({
        body: JSON.stringify(tags),
      });
    }
  );

  await page.goto('https://conduit.bondaracademy.com/')
});

test("has title", async ({ page }) => {
  await page.waitForTimeout(5000)     
  await expect(page.locator(".navbar-brand")).toHaveText("conduit");
});
