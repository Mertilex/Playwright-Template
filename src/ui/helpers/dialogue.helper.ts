import { Page } from 'playwright'

export async function closeWelcomeBanner(page: Page): Promise<void> {
  const dialog = page.locator('#mat-dialog-0')
  if (await dialog.isVisible()) {
    await page.getByLabel('Close Welcome Banner').click()
  }
}
