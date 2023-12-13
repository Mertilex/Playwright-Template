import { quantitysEndpoint } from '@_api/endpoints/quantitys.endpoint'
import { expect } from '@playwright/test'
import { Product } from '@_src_api/product.model'
import { productsUrls } from '@_api/endpoints/products.endpoint'
import { test } from '@_fixtures_api/api.fixture'

test.describe('Products', () => {
  test('Quantitys endpoint should return code 200 and success status', async ({ requestApi }) => {
    // Given
    const expectedStatus = 'success'
    const expectedResponseCode = 200

    // When
    const response = await requestApi.get(quantitysEndpoint)

    // Then
    const code = response.status()
    expect(code).toBe(expectedResponseCode)
    const jsonBody = await response.json()
    expect(jsonBody.status).toEqual(expectedStatus)
  })

  test('Products search should return non empty list with all products', async ({ requestApi }) => {
    // Given
    const expectedProductName = 'Apple Juice (1000ml)'
    const expectedStatus = 'success'
    const expectedResponseCode = 200

    // When
    const response = await requestApi.get(productsUrls.search())

    // Then
    const code = response.status()
    expect(code).toBe(expectedResponseCode)

    const jsonBody = await response.json()
    expect(jsonBody.status).toEqual(expectedStatus)

    const found = jsonBody.data.find((product: Product) => product.name === expectedProductName)
    expect(found).not.toBeUndefined()
  })
})
