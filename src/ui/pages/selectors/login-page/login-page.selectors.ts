import { Locator } from '@_common/locators/locator'
import { LocatorTypes } from '@_common/locators/locator-types'

export const loginPageSelectors = {
  //TODO: Add here additional params if necessary to support more complex cases like this: page.getByRole('heading', { name: 'Sign up' }) 
  emailInput: new Locator('#email', LocatorTypes.ByLocator),
  passwordInput: new Locator('#password', LocatorTypes.ByLocator),
  loginButton: new Locator('#loginButton', LocatorTypes.ByLocator)
}
