import path from 'path'
import AdmZip from 'adm-zip'

// * Save report to a zip
async function globalTeardown() {
  const reportPath = path.join(__dirname, `../reports/playwright`)
  const zip = AdmZip()
  zip.addLocalFolder(reportPath, `../reports/playwright/report`, new RegExp('[\\s\\S]*'), 777)
  zip.writeZip(`./playwright-report.zip`, null)
}

export default globalTeardown
