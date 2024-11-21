import { Page } from '@playwright/test'
import { BasePage } from '@_src_ui/pages/base.page'
import { mainPageSelectors } from '@_src_ui/pages/selectors/main-page/main-page.selectors'

export class MainPage extends BasePage {
  cartButton = this.page.getByLabel(mainPageSelectors.cartbutton)

  constructor(page: Page) {
    super(page)
  }
}
