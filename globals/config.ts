// * Global config, reading from env variables
export const customTimeoutInMilliseconds =
  process.env.E2E_CUSTOM_TIMEOUT_IN_MILLISECONDS === undefined
    ? 20000
    : parseInt(process.env.E2E_CUSTOM_TIMEOUT_IN_MILLISECONDS)

// variables and settings
export const customerEmail = 'bender@juice-sh.op'
export const customerPass = 'OhG0dPlease1nsertLiquor!'
