require('dotenv').config();

/**
 * Configuration module for eBay API credentials
 * Loads environment variables and provides configuration object
 */

// Validate required environment variables
const requiredEnvVars = [
  'CLIENT_ID_SANDBOX',
  'CLIENT_SECRET_SANDBOX',
  'CLIENT_ID_PRODUCTION',
  'CLIENT_SECRET_PRODUCTION',
  'OAUTH_TOKEN',
  'DEV_ID',
  'APP_ID',
  'CERT_ID'
];

// Check for missing environment variables
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
  console.error('Missing required environment variables:', missingVars);
  console.error('Please check your .env file and ensure all required variables are set.');
  process.exit(1);
}

// Parse SANDBOX from environment variable (default to true for safety)
const SANDBOX = process.env.SANDBOX === 'false' ? false : true;

// eBay API Configuration
const config = {
  // Environment setting
  SANDBOX,

  // API Credentials
  CLIENT_ID: SANDBOX ? process.env.CLIENT_ID_SANDBOX : process.env.CLIENT_ID_PRODUCTION,
  CLIENT_SECRET: SANDBOX ? process.env.CLIENT_SECRET_SANDBOX : process.env.CLIENT_SECRET_PRODUCTION,
  OAUTH_TOKEN: process.env.OAUTH_TOKEN,

  // Developer credentials
  DEV_ID: process.env.DEV_ID,
  APP_ID: process.env.APP_ID,
  CERT_ID: process.env.CERT_ID,

  // API Base URL
  EBAY_API_BASE_URL: SANDBOX ? 'https://api.sandbox.ebay.com' : 'https://api.ebay.com',

  // Log current environment
  logEnvironment() {
    console.log(`eBay API Environment: ${SANDBOX ? 'SANDBOX' : 'PRODUCTION'}`);
    console.log(`API Base URL: ${this.EBAY_API_BASE_URL}`);
  }
};

// Validate that we have the correct credentials for the current environment
if (!config.CLIENT_ID || !config.CLIENT_SECRET) {
  console.error(`Missing credentials for ${SANDBOX ? 'SANDBOX' : 'PRODUCTION'} environment`);
  console.error('Please check your .env file and ensure the correct environment variables are set.');
  process.exit(1);
}

module.exports = config;