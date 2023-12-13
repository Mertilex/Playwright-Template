import { test as base } from '@playwright/test'

// * Example
export const test = base.extend({
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL!)
    await use(page)
  },
})
