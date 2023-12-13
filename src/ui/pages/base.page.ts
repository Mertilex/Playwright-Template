import { Page } from '@playwright/test'
import { closeWelcomeBanner } from '@_src_ui/helpers/dialogue.helper'

export class BasePage {
  readonly page: Page
  protected url = '/'

  constructor(page: Page) {
    this.page = page
  }

  async navigateToURL(): Promise<void> {
    await this.page.goto(this.url)
    await this.page.waitForLoadState('domcontentloaded')
    await closeWelcomeBanner(this.page)
  }
}
