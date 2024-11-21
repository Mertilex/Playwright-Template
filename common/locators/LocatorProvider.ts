import { Page } from '@playwright/test'
import { LocatorTypes } from './locator-types'
import { Locator } from './locator'

export class LocatorProvider {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
      }
  
    GetLocator(locator: Locator) {
      switch(locator.type) {
        case LocatorTypes.ByLabel: {
          return this.page.getByLabel(locator.locatorStr)
        }

        case LocatorTypes.ByAltText: {
          throw new Error('Not implemented exception.')
        }

        case LocatorTypes.ByLocator: {
          return this.page.locator(locator.locatorStr)
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