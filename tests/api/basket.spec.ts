import { basketEndpoint } from '@_api/endpoints/basket.endpoint'
import { test } from '@_fixtures_api/api.fixture'
import { expect } from '@playwright/test'

test.describe('Basket for customer', () => {
  test('Basket should return code 200 for logged user', async ({ requestApiLogged }) => {
    // Given
    const expectedResponseCode = 200

    // When
    const response = await requestApiLogged.get(basketEndpoint)

    // Then
    const code = response.status()
    expect(code).toBe(expectedResponseCode)
  })

  test('Basket should return code 500 for non logged user', async ({ requestApi }) => {
    // Given
    const expectedResponseCode = 500

    // When
    const response = await requestApi.get(basketEndpoint)

    // Then
    const code = response.status()
    expect(code).toBe(expectedResponseCode)
  })
})
