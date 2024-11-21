import { Page } from '@playwright/test'
import { LocatorTypes } from './locator-types'

export class LocatorProvider {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
      }
  
    GetLocator(locatorStr: string, locatorType: LocatorTypes) {
      switch(locatorType) {
        case LocatorTypes.ByLabel: {
          return this.page.getByLabel(locatorStr)
        }

        case LocatorTypes.ByAltText: {
          throw new Error('Not implemented exception.')
        }

        case LocatorTypes.ByLocator: {
          return this.page.locator(locatorStr)
        }

        case LocatorTypes.ByPlaceholder: {
          throw new Error('Not implemented exception.')
        }

        case LocatorTypes.ByRole: {
          throw new Error('Not implemented exception.')
        }

        case LocatorTypes.ByTestId: {
          throw new Error('Not implemented exception.')
        }

        case LocatorTypes.ByText: {
          throw new Error('Not implemented exception.')
        }

        case LocatorTypes.ByTitle: {
          throw new Error('Not implemented exception.')
        }

        default: {
          throw new Error('Not supported Locator Type exception.')
        }
      }
    }
}