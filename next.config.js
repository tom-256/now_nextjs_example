require('dotenv').config()
module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      
    }
    return config
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    TEST_VAR: process.env.TEST_VAR,
    GCLOUD_CREDENTIALS: process.env.GCLOUD_CREDENTIALS,
  }
}
