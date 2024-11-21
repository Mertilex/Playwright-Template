import { Locator } from '@_common/locators/locator'
import { LocatorTypes } from '@_common/locators/locator-types'

export const mainPageSelectors = {
    //TODO: Add here additional params if necessary to support more complex cases like this: page.getByRole('heading', { name: 'Sign up' })
    cartbutton: new Locator('Show the shopping cart', LocatorTypes.ByLabel)
}