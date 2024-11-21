import { Page } from '@playwright/test'
import { MainPage } from '@_src_ui/pages/main.page'
import { BasePage } from '@_src_ui/pages/base.page'
import { loginPageSelectors } from '@_src_ui/pages/selectors/login-page/login-page.selectors'
import { waitForResponse } from '@_src_ui/helpers/wait.helper'
import { MethodType } from '@_common/enums/api.enums'
import { LocatorTypes } from '../../../common/locators/locator-types'

export class LoginPage extends BasePage {
  //TODO: Add here additional params if necessary to support more complex cases like this: page.getByRole('heading', { name: 'Sign up' }) 
  passwordInput = this.locatorProvider.GetLocator(loginPageSelectors.passwordInput.locator, LocatorTypes.ByLocator)
  loginButton = this.locatorProvider.GetLocator(loginPageSelectors.loginButton.locator, LocatorTypes.ByLocator)
  emailInput = this.locatorProvider.GetLocator(loginPageSelectors.emailInput.locator, LocatorTypes.ByLocator)

  protected url = '/#/login'

  constructor(page: Page) {
    super(page)
  }

  async login(email: string, pass: string): Promise<MainPage> {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(pass)

    const responsePromise = waitForResponse(this.page, '/rest/user/login', 200, MethodType.POST)
    await this.loginButton.click()
    await responsePromise

    return new MainPage(this.page)
  }
}
