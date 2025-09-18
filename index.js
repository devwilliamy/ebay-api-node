/**********************
  Regular Imports
**********************/
const axios = require("axios");
const { parseStringPromise } = require("xml2js");
const logger = require("./logger");

/**********************
  Importing Array of Item IDs
**********************/
//#region Old Imports
const carWithMirrorItemIds = require("./20240708/03-car-with-mirror");
// Made this one cus the first one failed so these were the rest
const carWithMirrorItemIds2 = require("./20240708/03-car-with-mirror round 2");
// Made this one cus the efirst one failed when updating pictures so these are the rest
const carWithMirrorItemIds2_PictureUpdate = require("./20240708/03-car-with-mirror Round 2 Picture Update");
const carWithNoMirror = require("./20240708/03-car-with-no-mirror");
const suvWithMirror = require("./20240708/03-suv-witih-mirror");
const suvWithNoMirror = require("./20240708/03-suv-witih-no-mirror");
const truckWithMirror = require("./20240708/03-truck-with-mirror");
const truckWithNoMirror = require("./20240708/03-truck-with-no-mirror");
// Split up no mirrors cus it kept failing
const carWithNoMirror1 = require("./20240708/03-car-with-no-mirror 1-500");
// Split up nor mirros cus it kept failing
const carWithNoMirror2 = require("./20240708/03-car-with-no-mirror 500-1000");
// Split up nor mirros cus it kept failing
const carWithNoMirror3 = require("./20240708/03-car-with-no-mirror 1000-1600");
/**********************
  Importing New HTML as a string
**********************/
const carWithMirror03NewHtml = require("./20240708/03-car-mirror_newHtml_20240708");
const car03WithNoMirrorNewHtml = require("./20240708/03-car-no-mirror_newHtml_20240708");

/*********************
 *
 * Testing 20250918
 * Making sure my script works
 * 112338522463
 */
const html112338522463New = require("./20250918_html/test/html112338522463New");
const html112338522463Old = require("./20250918_html/test/html112338522463Old");
//#endregion

/*********************
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 20250918 Imports
 * Adding Warranty or something
 ********************/
// 03 Car Mirror
const car_mirror_03_html_20250918 = require("./20250918_html/03-car-mirror");
const carWithMirror1_20250918 = require("./20250918/03-car-mirror/03-car-mirror-1-500");
const carWithMirror2_20250918 = require("./20250918/03-car-mirror/03-car-mirror-500-1000");
const carWithMirror3_20250918 = require("./20250918/03-car-mirror/03-car-mirror-1000-1500");
const carWithMirror4_20250918 = require("./20250918/03-car-mirror/03-car-mirror-1500-2000");

// 03 Car No Mirror
const car_no_mirror_03_html_20250918 = require("./20250918_html/03-car-no-mirror-html");
const carWithNoMirror1_20250918 = require("./20250918/03-car-no-mirror/03-car-no-mirror-1-500");
const carWithNoMirror2_20250918 = require("./20250918/03-car-no-mirror/03-car-no-mirror-500-1000");
const carWithNoMirror3_20250918 = require("./20250918/03-car-no-mirror/03-car-no-mirror-1000-1200");

// 03 SUV Mirror
const suv_mirror_03_html_20250918 = require("./20250918_html/03-suv-mirror-html");
const suvMirror_20250918 = require("./20250918/03-suv/03-suv-mirror");

// 03 SUV No Mirror
const suv_no_mirror_03_html_20250918 = require("./20250918_html/03-suv-no-mirror-html");
const suvWithNoMirror_20250918 = require("./20250918/03-suv/03-suv-no-mirror");

// - [ ] 03 Truck Mirror
const truck_mirror_03_html_20250918 = require("./20250918_html/03-truck-mirror-html");
const truckMirror_20250918 = require("./20250918/03-truck/03-truck-mirror");

// - [ ] 03 Truck No Mirror
const truck_no_mirror_03_html_20250918 = require("./20250918_html/03-truck-no-mirror-html");
const truckWithNoMirror_20250918 = require("./20250918/03-truck/03-truck-no-mirror");

// - [ ] 07 Car Mirror
// - [ ] 07 Car No Mirror
// - [ ] 10 Car Mirror BK
// - [ ] 10 Car No Mirror BK
// - [ ] 10 Car Mirror GR
// - [ ] 10 Car No Mirror GR
// - [ ] 10 SUV Mirror
// - [ ] 10 SUV No Mirror
// - [ ] 10 Truck Mirror
// - [ ] 15 Car Mirror BKGR
// - [ ] 15 Car No Mirror BKGR
// - [ ] 15 SUV Mirror BKGR
// - [ ] 15 Truck Mirror BKGR

/*********************
  Ebay Credentials
**********************/
// Replace with your eBay credentials
const SANDBOX = false; // Set to false for production
const CLIENT_ID = SANDBOX ? "" : "";
const CLIENT_SECRET = SANDBOX ? "" : "";
const OAUTH_TOKEN = "";
const appId = "";
const certId = "";
const devId = "";

const EBAY_API_BASE_URL = SANDBOX
  ? "https://api.sandbox.ebay.com"
  : "https://api.ebay.com";

const items = [
  { sku: "test_sku_001", description: "New description for product 1" },
  { sku: "test_sku_002", description: "New description for product 2" },
  // Add more items as needed
];

//#region Hiding WIP functions
// Not sure if this works
async function getOAuthToken() {
  const tokenUrl = `${EBAY_API_BASE_URL}/identity/v1/oauth2/token`;
  const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    "base64"
  );
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${credentials}`,
  };
  //   const body = 'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope/sell.inventory';
  const body =
    "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope";

  try {
    const response = await axios.post(tokenUrl, body, { headers });
    return response.data.access_token;
  } catch (error) {
    console.error("Error obtaining OAuth token:", error.response.data);
  }
}

async function updateInventoryItem(sku, description, accessToken) {
  const url = `${EBAY_API_BASE_URL}/sell/inventory/v1/inventory_item/${sku}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  const payload = {
    product: {
      description,
    },
  };

  try {
    const response = await axios.put(url, payload, { headers });
    console.log(`Successfully updated SKU: ${sku}`, response.data);
  } catch (error) {
    console.error(`Error updating SKU: ${sku}`, error.response.data);
  }
}
// Don't think this works cus it was in progress
async function bulkUpdateDescriptions() {
  const accessToken = await getOAuthToken();
  if (!accessToken) {
    console.error("Failed to obtain access token");
    return;
  }

  for (const item of items) {
    await updateInventoryItem(item.sku, item.description, accessToken);
  }
}
/*
        // <RequesterCredentials>
        //    <eBayAuthToken>${OAUTH_TOKEN}</eBayAuthToken>
        // </RequesterCredentials>
*/

const createProduct = async (product) => {
  const requestXml = `
      <?xml version="1.0" encoding="utf-8"?>
      <AddFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">

        <Item>
          <Title>${product.title}</Title>
          <Description>${product.description}</Description>
          <PrimaryCategory>
            <CategoryID>${product.categoryId}</CategoryID>
          </PrimaryCategory>
          <StartPrice>${product.price}</StartPrice>
          <ConditionID>${product.conditionId}</ConditionID>
          <Country>${product.country}</Country>
          <Currency>${product.currency}</Currency>
          <DispatchTimeMax>${product.dispatchTimeMax}</DispatchTimeMax>
          <ListingDuration>${product.listingDuration}</ListingDuration>
          <ListingType>FixedPriceItem</ListingType>
          <PaymentMethods>${product.paymentMethods}</PaymentMethods>
          <PayPalEmailAddress>${product.paypalEmailAddress}</PayPalEmailAddress>
          <PostalCode>${product.postalCode}</PostalCode>
          <Quantity>${product.quantity}</Quantity>
          <ReturnPolicy>
            <ReturnsAcceptedOption>${product.returnsAcceptedOption}</ReturnsAcceptedOption>
            <RefundOption>${product.refundOption}</RefundOption>
            <ReturnsWithinOption>${product.returnsWithinOption}</ReturnsWithinOption>
            <ShippingCostPaidByOption>${product.shippingCostPaidByOption}</ShippingCostPaidByOption>
          </ReturnPolicy>
          <ShippingDetails>
            <ShippingType>${product.shippingType}</ShippingType>
            <ShippingServiceOptions>
              <ShippingServicePriority>1</ShippingServicePriority>
              <ShippingService>${product.shippingService}</ShippingService>
              <ShippingServiceCost>${product.shippingServiceCost}</ShippingServiceCost>
            </ShippingServiceOptions>
          </ShippingDetails>
          <Site>${product.site}</Site>
        </Item>
      </AddFixedPriceItemRequest>
    `;
  try {
    const response = await axios.post(
      "https://api.ebay.com/ws/api.dll",
      requestXml,
      {
        headers: {
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          //   "X-EBAY-API-DEV-NAME": devId,
          //   "X-EBAY-API-APP-NAME": appId,
          //   "X-EBAY-API-CERT-NAME": certId,
          "X-EBAY-API-CALL-NAME": "AddFixedPriceItem",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
          "Content-Type": "text/xml",
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.AddFixedPriceItemResponse &&
      result.AddFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(
        `Product created successfully with ItemID: ${result.AddFixedPriceItemResponse.ItemID[0]}`
      );
    } else {
      console.log("Failed to create product", result);
    }
  } catch (error) {
    console.error("Error creating product:", error.message);
  }
};

const getItemDetails = async (itemId) => {
  const requestXml = `
      <?xml version="1.0" encoding="utf-8"?>
      <GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">

        <ItemID>${itemId}</ItemID>
      </GetItemRequest>
    `;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          //   "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          //   'X-EBAY-API-DEV-NAME': devId,
          //   'X-EBAY-API-APP-NAME': appId,
          //   'X-EBAY-API-CERT-NAME': certId,
          //   "X-EBAY-API-CALL-NAME": "GetItem",
          //   "X-EBAY-API-SITEID": "0",
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "GetItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.GetItemResponse &&
      result.GetItemResponse.Ack[0] === "Success"
    ) {
      console.log("Item details retrieved successfully:");
      console.log(result.GetItemResponse.Item[0]);
    } else {
      console.log("Failed to retrieve item details");
    }
  } catch (error) {
    console.error(
      `Error retrieving item details for item ${itemId}:`,
      error.message
    );
  }
};
//#endregion

/**
 * Documentation Here: https://developer.ebay.com/devzone/xml/docs/reference/ebay/ReviseFixedPriceItem.html
 * Refer to DeletedField section and Item.VideoDetails.VideoID section
 * @param {*} itemId ex: 121520605303
 * @param {*} newDescription
 *
 */
const updateFixedPriceItemDescription = async (itemId, newDescription) => {
  const requestXml = `
      <?xml version="1.0" encoding="utf-8"?>
      <ReviseFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">
        <Item>
          <ItemID>${itemId}</ItemID>
          <Description><![CDATA[${newDescription}]]></Description>
        </Item>
      </ReviseFixedPriceItemRequest>
    `;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseFixedPriceItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.ReviseFixedPriceItemResponse &&
      result.ReviseFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(`Fixed-price item ${itemId} updated successfully`);
      logger.info(`Fixed-price item ${itemId} updated successfully`);
    } else {
      console.error(`Failed to update fixed-price item ${itemId}`);
      logger.error(`Failed to update fixed-price item ${itemId}`);
      // console.error(result)
      //   logger.error(JSON.stringify(result, null, 2));
      console.error(result.ReviseFixedPriceItemResponse["Errors"]);
      // logger.error(result.ReviseFixedPriceItemResponse['Errors'])
      logger.error(
        JSON.stringify(result.ReviseFixedPriceItemResponse["Errors"], null, 2)
      );
    }
  } catch (error) {
    console.error(`Error updating fixed-price item ${itemId}:`, error.message);
    logger.error(`Error updating fixed-price item ${itemId}: ${error.message}`);
  }
};

const updateItemDescription = async (itemId, newDescription) => {
  const requestXml = `
    <?xml version="1.0" encoding="utf-8"?>
    <ReviseItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">
      <Item>
        <ItemID>${itemId}</ItemID>
        <Description><![CDATA[${newDescription}]]></Description>
      </Item>
    </ReviseItemRequest>
  `;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
        timeout: 30000,
      }
    );

    const parsed = await parseStringPromise(response.data, {
      explicitArray: true,
    });
    const ack = parsed?.ReviseItemResponse?.Ack?.[0];

    if (ack === "Success" || ack === "Warning") {
      console.log(`Item ${itemId} description updated.`);
      logger.info(`Item ${itemId} description updated.`);
      return { ok: true, warnings: parsed?.ReviseItemResponse?.Errors };
    } else {
      const errs = parsed?.ReviseItemResponse?.Errors ?? [];
      console.error(`Failed to update item ${itemId}`, errs);
      logger.error(`Failed to update item ${itemId}`, errs);
      return { ok: false, errors: errs };
    }
  } catch (err) {
    console.error(`Error updating item ${itemId}:`, err?.message || err);
    logger.error(`Error updating item ${itemId}:`, err?.message || err);
    return { ok: false, error: err?.message || String(err) };
  }
};

//#region Hiding some more functinos
/**
 * Documentation Here: https://developer.ebay.com/devzone/xml/docs/reference/ebay/ReviseFixedPriceItem.html
 * Refer to DeletedField section and Item.VideoDetails.VideoID section
 * @param {*} itemId ex: 121520605303
 * @param {*} deletedFieldString ex: Item.VideoDetails.VideoID
 *
 */
const deleteFieldFixedPriceItem = async (itemId, deletedFieldString) => {
  const requestXml = `
<?xml version="1.0" encoding="utf-8"?>
  <ReviseFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">    
	<ErrorLanguage>en_US</ErrorLanguage>
	<WarningLevel>High</WarningLevel>
	<DeletedField>${deletedFieldString}</DeletedField>
  <Item>
    <ItemID>${itemId}</ItemID>
  </Item>
</ReviseFixedPriceItemRequest>
`;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          //   "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          //   'X-EBAY-API-DEV-NAME': devId,
          //   'X-EBAY-API-APP-NAME': appId,
          //   'X-EBAY-API-CERT-NAME': certId,
          //   "X-EBAY-API-CALL-NAME": "GetItem",
          //   "X-EBAY-API-SITEID": "0",
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseFixedPriceItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.ReviseFixedPriceItemResponse &&
      result.ReviseFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(`Fixed-price item ${itemId} updated successfully`);
    } else {
      console.log(`Failed to update fixed-price item ${itemId}`);
      console.log(result);
      console.log(result["Errors"]);
    }
  } catch (error) {
    console.error(`Error updating fixed-price item ${itemId}:`, error.message);
  }
};

/**
 * Use this to update video details for mirrors
 * @param {*} itemId ex: 121520605303
 */
const updateVideoDetailsFixedPriceItem_03CarWithMirror = async (itemId) => {
  const requestXml = `
<?xml version="1.0" encoding="utf-8"?>
  <ReviseFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">    
	<ErrorLanguage>en_US</ErrorLanguage>
	<WarningLevel>High</WarningLevel>
  <Item>
    <ItemID>${itemId}</ItemID>
    <VideoDetails>
      <VideoID></VideoID>
    </VideoDetails>
  </Item>
</ReviseFixedPriceItemRequest>
`;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseFixedPriceItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.ReviseFixedPriceItemResponse &&
      result.ReviseFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(`Fixed-price item ${itemId} updated successfully`);
    } else {
      console.log(`Failed to update fixed-price item ${itemId}`);
      console.log(result);
      console.log(result["Errors"]);
    }
  } catch (error) {
    console.error(`Error updating fixed-price item ${itemId}:`, error.message);
  }
};

/**
 * Use this to update video details for no mirror
 * @param {*} itemId ex: 121520605303
 */
const updateVideoDetailsFixedPriceItem_03CarWithNoMirror = async (itemId) => {
  const requestXml = `
<?xml version="1.0" encoding="utf-8"?>
  <ReviseFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">    
	<ErrorLanguage>en_US</ErrorLanguage>
	<WarningLevel>High</WarningLevel>
  <Item>
    <ItemID>${itemId}</ItemID>
    <VideoDetails>
      <VideoID></VideoID>
    </VideoDetails>
  </Item>
</ReviseFixedPriceItemRequest>
`;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseFixedPriceItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.ReviseFixedPriceItemResponse &&
      result.ReviseFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(`Fixed-price item ${itemId} updated successfully`);
    } else {
      console.log(`Failed to update fixed-price item ${itemId}`);
      console.log(result);
      console.log(result["Errors"]);
    }
  } catch (error) {
    console.error(`Error updating fixed-price item ${itemId}:`, error.message);
  }
};
/**
 * Use this to update picture details
 * @param {*} itemId ex: 121520605303
 */
const updatePictureDetailsFixedPriceItem_03CarWithMirror = async (itemId) => {
  const requestXml = `
<?xml version="1.0" encoding="utf-8"?>
  <ReviseFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">    
	<ErrorLanguage>en_US</ErrorLanguage>
	<WarningLevel>High</WarningLevel>
  <Item>
    <ItemID>${itemId}</ItemID>
    <PictureDetails>
      <GalleryType>Gallery</GalleryType>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/3EwAAOSwYr5mhfZJ/$_57.JPG?set_id=880000500F</PictureURL>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/MKAAAOSwJRNmhfZP/$_57.JPG?set_id=880000500F</PictureURL>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/VNYAAOSwUWFmhfZR/$_57.JPG?set_id=880000500F</PictureURL>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/bEMAAOSwunhmhfZV/$_57.JPG?set_id=880000500F</PictureURL>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/xcQAAOSwtYBmhfZU/$_57.JPG?set_id=880000500F</PictureURL>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/XcsAAOSwUxNmhfZb/$_57.JPG?set_id=880000500F</PictureURL>
      <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/LZsAAOSwVBhmhfZc/$_57.JPG?set_id=880000500F</PictureURL>
  </PictureDetails>
  </Item>
</ReviseFixedPriceItemRequest>
`;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseFixedPriceItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.ReviseFixedPriceItemResponse &&
      result.ReviseFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(`Fixed-price item ${itemId} updated successfully`);
    } else {
      console.log(`Failed to update fixed-price item ${itemId}`);
      console.log(result);
      console.log(result["Errors"]);
    }
  } catch (error) {
    console.error(`Error updating fixed-price item ${itemId}:`, error.message);
  }
};
/**
 * Use this to update picture details
 * @param {*} itemId ex: 121520605303
 */
const updatePictureDetailsFixedPriceItem_03CarWithNoMirror = async (itemId) => {
  const requestXml = `
<?xml version="1.0" encoding="utf-8"?>
  <ReviseFixedPriceItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">    
	<ErrorLanguage>en_US</ErrorLanguage>
	<WarningLevel>High</WarningLevel>
  <Item>
    <ItemID>${itemId}</ItemID>
    <PictureDetails>
    <GalleryType>Gallery</GalleryType>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/I40AAOSwDdlmhgE9/$_57.JPG?set_id=880000500F</PictureURL>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/~vYAAOSwmm5mhgFA/$_57.JPG?set_id=880000500F</PictureURL>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/AoIAAOSweopmhgFH/$_57.JPG?set_id=880000500F</PictureURL>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/QIEAAOSwJRNmhgFu/$_57.JPG?set_id=880000500F</PictureURL>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/ch8AAOSwndZmhgFj/$_57.JPG?set_id=880000500F</PictureURL>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/4v8AAOSwvPFmhgFl/$_57.JPG?set_id=880000500F</PictureURL>
    <PictureURL>https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/9VEAAOSwfF9mhgFc/$_57.JPG?set_id=880000500F</PictureURL>
  </PictureDetails>
  </Item>
</ReviseFixedPriceItemRequest>
`;

  try {
    const response = await axios.post(
      `${EBAY_API_BASE_URL}/ws/api.dll`,
      requestXml,
      {
        headers: {
          "Content-Type": "text/xml",
          "X-EBAY-API-SITEID": "0",
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-CALL-NAME": "ReviseFixedPriceItem",
          "X-EBAY-API-IAF-TOKEN": OAUTH_TOKEN,
        },
      }
    );

    const result = await parseStringPromise(response.data);
    if (
      result &&
      result.ReviseFixedPriceItemResponse &&
      result.ReviseFixedPriceItemResponse.Ack[0] === "Success"
    ) {
      console.log(`Fixed-price item ${itemId} updated successfully`);
    } else {
      console.log(`Failed to update fixed-price item ${itemId}`);
      console.log(result);
      console.log(result["Errors"]);
    }
  } catch (error) {
    console.error(`Error updating fixed-price item ${itemId}:`, error.message);
  }
};

const itemId = "124791685971";
// const deleteFieldFixedPriceItem = "Item.VideoDetails"
const testDeletedFieldString = "Item.VideoDetails.VideoID";

/*
  Test Functions
*/
// createProduct(newProduct);
// getItemDetails("110554978185");
// updateFixedPriceItemDescription(itemId, newDescription)
// bulkUpdateDescriptions();
/*
  End Test Functions
*/

// These were the left over errors from removing video URLs
const leftOver = [125221553836, 111979262384, 125221553836, 111980211005];
const leftOver2 = [125221553836, 125221553836];

/*
  Leftovers for 03 car mirror picture update 
  122430466307
  112358302592
*/

/*
    Leftovers for no mirror picture update
    113718733911
    126102763621
*/
const leftOverNoMirror = [126102763621, 113718733911];
//#endregion

const runMain = async () => {
  //#region Done for loops
  // Note I erased the for loop for mirror
  // await updateFixedPriceItemDescription(itemId, car_mirror_03_html_20250918);
  //   for (const itemId of carWithNoMirror1_20250918) {
  //   for (const itemId of carWithNoMirror2_20250918) {
  //   for (const itemId of carWithNoMirror3_20250918) {
  // await updateFixedPriceItemDescription(itemId, car_no_mirror_03_html_20250918);
  //   for (const itemId of suvMirror_20250918) {
  //     await updateFixedPriceItemDescription(itemId, suv_mirror_03_html_20250918);
  //   }
  //   logger.info(
  //     `updateFixedPriceItemDescription:  suvMirror_20250918, suv_mirror_03_html_20250918`
  //   );
  //   for (const itemId of truckMirror_20250918) {
  //     await updateItemDescription(itemId, truck_mirror_03_html_20250918);
  //   }
  //#endregion
  logger.info(
    `updateItemDescription:truckWithNoMirror_20250918, truck_no_mirror_03_html_20250918`
  );
  for (const itemId of truckWithNoMirror_20250918) {
    await updateItemDescription(itemId, truck_no_mirror_03_html_20250918);
  }
  //#region old functions
  // await deleteFieldFixedPriceItem(itemId, "Item.VideoDetails.VideoID");
  // await updatePictureDetailsFixedPriceItem_03CarWithNoMirror(itemId);
  // await updateFixedPriceItemDescription(itemId, carWithMirror03NewHtml);
  //   await updateFixedPriceItemDescription(112338522463, html112338522463New);
  //   await updateFixedPriceItemDescription(112338522463, car_mirror_03_html);
  //#endregion
};

const runMainTest = async () => {
  await updateItemDescription(115316625101, truck_no_mirror_03_html_20250918);
};

runMain();
// runMainTest();

/*

  TODO Update Picture:
  125221553836
  111979262384
  125221553836
  111980211005
  // FRom 03 car no mirror
  113718733911
  121875960220
*/

/*
  TODO Description:
  122430466307
  112358302592
*/
