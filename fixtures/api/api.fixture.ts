import { Request } from '@_api/request'
import { getToken } from '@_src_api/login.action'
import { test as base } from '@playwright/test'

type ApiRequest = {
  requestApiLogged: Request
  requestApi: Request
}

export const test = base.extend<ApiRequest>({
  requestApiLogged: async ({ request }, use) => {
    const token = await getToken(request)
    const newApiContext = new Request(request)
    newApiContext.setHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    })
    await use(newApiContext)
  },
  requestApi: async ({ request }, use) => {
    const newApiContext = new Request(request)
    await use(newApiContext)
  },
})
