import { Page } from '@playwright/test'
import { BasePage } from '@_src_ui/pages/base.page'
import { mainPageSelectors } from '@_src_ui/pages/selectors/main-page/main-page.selectors'

export class MainPage extends BasePage {
  //TODO: Add here additional params if necessary to support more complex cases like this: page.getByRole('heading', { name: 'Sign up' }) 
  cartButton = this.locatorProvider.GetLocator(mainPageSelectors.cartbutton.locator, mainPageSelectors.cartbutton.type) 

  constructor(page: Page) {
    super(page)
  }
}
