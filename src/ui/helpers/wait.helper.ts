import { MethodType } from '@_common/enums/api.enums'
import { Page, Response } from '@playwright/test'

export async function waitForResponse(
  page: Page,
  expectedUrl: string,
  expectedStatusCode: number,
  expectedMethod?: MethodType,
  timeoutValue = 5000,
): Promise<Response> {
  try {
    return await page.waitForResponse(
      (response) => {
        const urlMatches = response.url().includes(expectedUrl)
        const statusCodeMatches = response.status() === expectedStatusCode
        const methodMatches = !expectedMethod || response.request().method() === expectedMethod

        return urlMatches && statusCodeMatches && methodMatches
      },
      { timeout: timeoutValue },
    )
  } catch (error) {
    throw new Error(
      `Timeout ${timeoutValue}ms exceeded while waiting for response including URL: ${expectedUrl}, expected status code: ${expectedStatusCode}, expected method: ${expectedMethod}.`,
    )
  }
}
