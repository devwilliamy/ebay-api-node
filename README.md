# eBay API Node.js Item Description Updater

A Node.js application for bulk updating eBay item descriptions using the eBay Trading API. This tool allows you to systematically update item descriptions across multiple listings with custom HTML templates.

## Features

- Bulk update eBay item descriptions
- Support for different vehicle types and variants (Car, SUV, Truck)
- HTML template management
- Comprehensive logging with Winston
- Error handling and retry logic
- Support for both sandbox and production environments

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ebay-api-node
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables (see Configuration section below)

## Configuration

### Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Fill in your eBay API credentials in the `.env` file

### eBay API Credentials

You'll need the following credentials from eBay:

- **Client ID** (for both sandbox and production)
- **Client Secret** (for both sandbox and production)
- **Developer ID**
- **Application ID**
- **Certificate ID**
- **OAuth User Token**

### Getting OAuth User Token

To get your OAuth User Token, visit the eBay API Test Tool:
https://developer.ebay.com/my/api_test_tool?index=0&api=trading&call=GetItem&variation=xml&env=production

Follow the instructions to generate your user token for the Trading API.

### Sandbox vs Production

Set the `SANDBOX` variable in `index.js`:
- `const SANDBOX = true;` - For testing with sandbox environment
- `const SANDBOX = false;` - For production environment

## Usage

### Basic Structure

The application uses a modular structure with:

1. **HTML Templates** - Located in `20250918_html/` folder
2. **Item ID Arrays** - Located in `20250918/` folder organized by vehicle type
3. **Main Execution** - In the `runMain()` function

### Adding New Item Batches

To add a new batch of items to update:

1. **Create HTML Template** (if needed):
```javascript
// Example: 20250918_html/my-new-template-html.js
const my_new_template_html = `
<div>
  <h1>Your HTML Content Here</h1>
  <p>Custom description for your items</p>
</div>
`;

module.exports = my_new_template_html;
```

2. **Create Item ID Array**:
```javascript
// Example: 20250918/my-items/my-item-list.js
const myItemIds = [
  123456789012,
  123456789013,
  123456789014,
  // Add more item IDs...
];

module.exports = myItemIds;
```

3. **Add Imports to index.js**:
```javascript
// Add these imports at the top with other imports
const my_new_template_html = require("./20250918_html/my-new-template-html");
const myItemIds = require("./20250918/my-items/my-item-list");
```

4. **Add to runMain() function**:
```javascript
const runMain = async () => {
  // Add your batch processing code
  logger.info(`updateItemDescription:myItemIds, my_new_template_html`);
  for (const itemId of myItemIds) {
    await updateItemDescription(itemId, my_new_template_html);
  }
  logger.info(`updateItemDescription:myItemIds FINISHED`);
};
```

### Customizing Logger Names

You can customize the logger messages by changing the first parameter in `logger.info()`:

```javascript
// Example with custom logger name
logger.info(`updateItemDescription:MyCustomBatchName, my_template_html`);
for (const itemId of myItemIds) {
  await updateItemDescription(itemId, my_template_html);
}
logger.info(`updateItemDescription:MyCustomBatchName FINISHED`);
```

## Project Structure

```
ebay-api-node/
├── index.js                 # Main application file
├── package.json             # Dependencies and scripts
├── .env                     # Environment variables (create from .env.example)
├── .env.example            # Environment variables template
├── README.md               # This file
├── 20250918_html/          # HTML templates
│   ├── 07-car-mirror-html.js
│   ├── 07-car-no-mirror-html.js
│   └── ...
└── 20250918/               # Item ID arrays organized by type
    ├── 07-car/
    │   ├── 07-car-mirror.js
    │   └── 07-car-no-mirror.js
    ├── 10-suv/
    └── 15-truck/
```

## Running the Application

1. **Test Mode (Recommended first)**:
   Set `SANDBOX = true` in `index.js` and run:
   ```bash
   node index.js
   ```

2. **Production Mode**:
   Set `SANDBOX = false` in `index.js` and run:
   ```bash
   node index.js
   ```

## Example Item Arrays

```javascript
// Small batch example
const testItemIds = [
  123456789012,
  123456789013
];

// Larger batch example
const carMirrorItemIds = [
  123456789012,
  123456789013,
  123456789014,
  123456789015,
  // ... more IDs
];
```

## Example HTML Templates

```javascript
// Simple HTML template
const simple_template_html = `
<div style="font-family: Arial, sans-serif;">
  <h2>Product Description</h2>
  <p>High-quality automotive accessory.</p>
  <ul>
    <li>Durable materials</li>
    <li>Easy installation</li>
    <li>Perfect fit guarantee</li>
  </ul>
</div>
`;

// Complex HTML template with styling
const advanced_template_html = `
<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
    <h1>Premium Vehicle Accessory</h1>
  </div>
  <div style="padding: 20px;">
    <h3>Product Features:</h3>
    <p>Detailed product description goes here...</p>
  </div>
</div>
`;
```

## Logging

The application uses Winston for comprehensive logging:

- **Info logs**: Item update progress and completion
- **Error logs**: Failed updates with detailed error information
- **Log files**: Check the logs directory for detailed execution logs

## Error Handling

The application includes robust error handling:

- API errors are logged with full response details
- Network timeouts are handled gracefully
- Individual item failures don't stop the entire batch
- Detailed error logging for troubleshooting

## Support

For eBay API documentation and support:
- [eBay Developer Program](https://developer.ebay.com/)
- [Trading API Documentation](https://developer.ebay.com/devzone/xml/docs/Reference/eBay/index.html)

## License

ISC License