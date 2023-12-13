import rimraf from 'rimraf'
import { FullConfig } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config({ override: true })

async function globalSetup(config: FullConfig): Promise<void> {
  // * Remove folder
  await new Promise((resolve) => {
    rimraf(`./reports/allure/results`, resolve)
  })

  // * Get variable from playwright config
  const { baseURL } = config.projects[0].use
  console.log(`BaseURL : ${baseURL} (baseURL is undefined because value is set later!)`)
}

export default globalSetup
