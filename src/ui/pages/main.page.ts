import { Page } from '@playwright/test'
import { BasePage } from '@_src_ui/pages/base.page'

export class MainPage extends BasePage {
  cartButton = this.page.getByLabel('Show the shopping cart')

  constructor(page: Page) {
    super(page)
  }
}
