import { Locator } from '@_common/locators/locator'
import { LocatorTypes } from '@_common/locators/locator-types'

export const loginPageSelectors = {
  emailInput: new Locator('#email', LocatorTypes.ByLocator),
  passwordInput: new Locator('#password', LocatorTypes.ByLocator),
  loginButton: new Locator('#loginButton', LocatorTypes.ByLocator)
}
