const productsEndpoint = '/rest/products'

export const productsUrls = {
  search: (query?: string): string => `${productsEndpoint}/search?q=${query ?? ''}`,
}
