import { LocatorTypes } from '@_common/locators/locator-types'

export class Locator {
    readonly locatorStr: string 
    //TODO: For now only flat string is supported. Add params when it will be necessary to support more complex cases. 
    //E.g.: page.getByRole('heading', { name: 'Sign up' })
    readonly type: LocatorTypes

    constructor(locatorStr: string, locatorTypes: LocatorTypes) {
        this.locatorStr = locatorStr
        this.type = locatorTypes
    }
  }