import { customerEmail, customerPass } from '@_globals/config'
import { expect, test } from '@playwright/test'
import { LoginPage } from '@_src_ui/pages/login.page'

test.describe('Login', () => {
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.navigateToURL()
  })

  test('valid user', async () => {
    // Given
    const userEmail = customerEmail
    const userPass = customerPass

    // When
    const mainPage = await loginPage.login(userEmail, userPass)

    // Then
    expect(mainPage.cartButton).toBeVisible()
  })
})
