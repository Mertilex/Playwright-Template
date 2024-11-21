import { Page } from '@playwright/test'
import { closeWelcomeBanner } from '@_src_ui/helpers/dialogue.helper'
import { LocatorProvider } from '../../../common/locators/LocatorProvider'

export class BasePage {
  readonly page: Page
  readonly locatorProvider: LocatorProvider

  protected url = '/'

  constructor(page: Page) {
    this.page = page
    this.locatorProvider = new LocatorProvider(this.page)
  }

  async navigateToURL(): Promise<void> {
    await this.page.goto(this.url)
    await this.page.waitForLoadState('domcontentloaded')

    await closeWelcomeBanner(this.page)
  }
}
