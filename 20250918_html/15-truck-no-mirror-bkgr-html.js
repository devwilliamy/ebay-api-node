const truck_no_mirror_15_bkgr_html = `    <!DOCTYPE html>
      <html
        lang="en"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>iCarCover Description</title>
          <!-- <link href="https://fonts.cdnfonts.com/css/amazon-ember" rel="stylesheet" /> -->
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <style>
            body {
              -webkit-text-size-adjust: 100%;
              margin: 15px;
              max-width: 1464px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0;
              display: flex;
              flex-direction: column;
              flex: 1;
              /* font-family: Arial, sans-serif; */
              /* font-family: "Market Sans", Arial, sans-serif; */
              /* font-family: "Amazon Ember", Arial, sans-serif; */
              font-family: "Roboto", sans-serif;
              color: #0f1111;
              text-rendering: optimizelegibility;
              word-break: break-word;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-shadow: none;
            }
            p,
            h1 {
              font-weight: 700 !important;
              margin-top: 0;
              margin-bottom: 0;
            }
            h2 {
              font-weight: 700 !important;
              margin-top: 0;
              margin-bottom: 0;
            }
            ul {
              padding-left: 20px;
            }

            .numberListItem::before {
              content: none;
              position: absolute;
              left: 0;
              top: 0;
              font-size: 20px;
              line-height: 1;
              color: #000;
            }

            li {
              margin: 5px 0;
            }
            li::marker {
              font-weight: 400;
            }

            li span {
              display: block;
            }

            .indentSection {
              padding-left: 20px;
              padding-right: 20px;
            }
            .videoContainer {
              margin-bottom: 110px;
            }
            .video {
              width: 100%;
              height: auto;
            }
            .highQualitySection {
              position: relative;
              display: flex;
              flex-direction: column;
            }
            .highQualityHeader {
              color: white;
              font-size: 32px;
              padding-bottom: 20px;
              padding-top: 20px;
            }
            .highQualityText {
              color: white;
              font-size: 16px;
              line-height: 1.4em;
              opacity: 1 !important;
              margin-bottom: 20px;
              font-weight: 500 !important;
            }
            .subHeader {
              font-size: 32px;
              padding-top: 40px;
              padding-bottom: 40px;
              text-align: center;
              font-weight: 700;
            }

            .subHeader2 {
              text-align: center;
              font-size: 22px;
              margin-top: 20px;
              margin-bottom: 20px;
              font-weight: 700;
            }

            .ultimateToolkitHeader {
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 20px;
              font-weight: 800;
            }
            .highQualityBanner {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 40px;
              background: black;
              max-width: 45%;
            }
            .mobileHighQualityBanner {
              display: none;
            }

            .ultimateToolkitSection {
              margin-bottom: 40px;
            }
            .toolkitGrid {
              display: grid;
              gap: 40px;
              grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            .toolkitGridItem {
              display: grid;
              grid-template-rows: 0.5fr 0.2fr 0.3fr;
              width: 100%;

              /* gap: 20px; */
            }
            .gridHeader {
              margin-top: 20px;
              margin-bottom: 10px;
              font-size: 18px;
              font-weight: 700;
              font-size: 20px;
              line-height: 1.25em;
            }
            .gridDescription {
              font-size: 16px;
              font-weight: 500 !important;
              line-height: 1.4em;
              font-size-adjust: 100%;
            }

            .stayDryGrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 80px;
            }
            .protectionGrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 80px;
            }

            .stayDryItem {
              display: flex;
              flex-direction: column;
              width: 100%;
              /* align-items: center; */
            }
            .stayDryItemHeader {
              font-size: 20px;
              font-weight: 700;
            }
            .stayDryDescriptionContainer {
              display: flex;
              flex-direction: column;
              gap: 10px;
              padding-top: 20px;
              padding-bottom: 20px;
            }
            .stayDryItemDescription {
              font-size: 16px;
              line-height: 1.4em;
              font-weight: 500 !important;
            }
            .imageSection {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .listContainer {
              font-size: 15px;
              font-weight: 700;
              padding: 20px;
            }
            .bulletList {
              list-style-type: disc;
              list-style-position: inside;
              padding: 0;
              margin: 0;
              width: 100%;
            }
            .numberList {
              display: flex;
              flex-direction: column;
              list-style-type: decimal;
              list-style-position: inside;
              padding: 0;
              margin: 0;
              width: 100%;
            }
            .listTitle {
              font-size: 18px;
              margin-bottom: 20px;
            }
            .image {
              width: 100%;
              height: auto;
            }

            .QAContainer {
              display: flex;
              padding-top: 80px;
              padding-bottom: 80px;
              gap: 10px;
              width: 100%;
              flex-direction: column;
            }
           

            .dropdownContainer {
              transition: all 0.3s ease;
              cursor: pointer;
              padding: 10px;
              border: 2px solid #e6e6e6;
              border-radius: 3px;
            }
            .dropdown {
              display: grid;
              grid-template-columns: auto 1fr auto;
              align-items: center;
              gap: 10px;
            }
            .dynamicImage {
              position: relative;
              display: flex;
              width: 100%;
            }
            .qBoxContainer {
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .qBox {
              border-radius: 3px;
              background: #505050;
              color: white;
              line-height: 40px;
              font-size: 25px;
              width: 80px;
              height: 40px;
              text-align: center;
            }
            .qText {
              font-size: 20px;
            }
            .aBoxContainer {
              position: relative;
              display: flex;
              align-items: start;
              gap: 10px;
            }
            .aBox {
              z-index: -1;
              border-radius: 3px;
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
              margin-top: -2px;
              background: #f5a623;
              color: white;
              line-height: 40px;
              font-size: 25px;
              min-width: 80px;
              min-height: 40px;
              width: 80px;
              height: 40px;
              text-align: center;
            }
            .aText {
              font-size: 18px;
              margin-top: 9px;
              font-weight: 500 !important;
            }
           .chevron {
              rotate: 180deg;
            } 
            .chevronPoly {
             fill: #7cb8cf;
            }
            .waterproofSnowproof {
              margin-top: 20px;
            }
          </style>
          <!-- v Mobile Styling v -->
          <style>
            @media (max-width: 600px) {
              body {
                -webkit-text-size-adjust: 100%;
                margin: 15px;
                max-width: 1464px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0;
                display: flex;
                flex-direction: column;
                flex: 1;
                /* font-family: Arial, sans-serif; */
                /* font-family: "Market Sans", Arial, sans-serif; */
                /* font-family: "Amazon Ember", Arial, sans-serif; */
                font-family: "Roboto", sans-serif;
                color: #0f1111;
                text-rendering: optimizelegibility;
                word-break: break-word;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-shadow: none;
              }
              p,
              h1 {
                margin-top: 0;
                margin-bottom: 0;
              }
              h2 {
                margin-top: 0;
                margin-bottom: 0;
              }
              ul {
                display: flex;
                flex-direction: column;
              }

              .numberListItem::before {
                content: none;
                position: absolute;
                left: 0;
                top: 0;
                font-size: 20px; /* Adjust this value as needed */
                line-height: 1; /* Ensures bullet point stays in the middle */
                color: #000; /* Bullet point color */
              }

              li {
                margin: 1px 0px;
                padding: 0;
              }

              li span {
                display: block;
                text-size-adjust: 100%;
              }
              .section {
                box-sizing: border-box;
              }
              .indentSection {
                padding-left: 20px;
                padding-right: 20px;
              }
              .videoContainer {
                margin-bottom: 60px;
              }
              .video {
                width: 100%;
                height: auto;
              }
              .highQualityHeader {
                color: white;
                font-size: 22px;
                padding-bottom: 20px;
                padding-top: 20px;
              }
              .highQualityText {
                color: white;
                font-size: 15px;
                margin-bottom: 20px;
                line-height: 21px;
                font-weight: 500 !important;
              }
              .subHeader {
                font-size: 22px;
                margin-top: 20px;
                margin-bottom: 20px;
                line-height: 26.4px;
                padding: 0;
                font-weight: 800;
              }

              .subHeader2 {
                text-align: center;
                font-size: 22px;
                margin-top: 20px;
                margin-bottom: 20px;
                font-weight: 700;
              }

              .ultimateToolkitHeader {
                font-size: 18px;
                margin-top: 20px;
                margin-bottom: 20px;
                font-weight: 800;
              }
              .highQualityBanner {
                display: none;
                background: black;
                opacity: 1;
                max-width: 100%;
              }
              .mobileHighQualityBanner {
                display: block;
                background: black;
                opacity: 1;
                max-width: 100%;
              }
              .toolkitGrid {
                display: grid;
                gap: 20px;
                grid-template-columns: 1fr 1fr;
                padding: 0;
              }
              .toolkitGridItem {
                display: grid;
                grid-template-rows: 0.1fr 0.1fr auto;
                width: 100%;
                gap: 10px;
              }
              .ultimateToolkitSection {
              }
              .gridHeader {
                margin: 0;
                margin-top: 10px;
                font-size: 16px;
                font-weight: 700;
              }
              .gridDescription {
                font-size: 14px;
                font-weight: 500 !important;
              }

              .stayDryGrid {
                display: grid; 
                grid-template-columns: 1fr;
                gap: 0;
              }
              .protectionGrid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0;
              }

              .stayDryDescriptionContainer {
                display: flex;
                flex-direction: column;
                gap: 14px;
                padding: 20px;
              }
              .stayDryItem {
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
              }
              .stayDryItemHeader {
                font-size: 20px;
                font-weight: 700;
              }
              .stayDryItemDescription {
                font-size: 16px;
                font-weight: 500 !important;
              }
              .protectionItem {
                display: flex;
                flex-direction: column;
                width: 100%;
              }
              .imageSection {
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .listContainer {
                font-size: 15px;
                font-weight: 700;
                padding: 20px;
              }
              .bulletList {
                list-style-type: disc;
                list-style-position: inside;
                padding: 0;
                margin: 0;
                width: 100%;
              }
              .numberList {
                display: flex;
                flex-direction: column;
                list-style-type: decimal;
                list-style-position: inside;
                padding: 0;
                margin: 0;
                width: 100%;
              }
              .listTitle {
                font-size: 15px;
                margin-bottom: 30px;
              }
              .image {
                width: 100%;
                height: auto;
              }

              .QAContainer {
                padding-top: 20px;
                padding-bottom: 20px;
              }
              .dropdownContainer {
                transition: all 0.3s ease;
                padding: 10px;
                border: 2px solid #e6e6e6;
                border-radius: 3px;
                cursor: pointer;
              }
              .dropdown {
                display: grid;
                grid-template-columns: auto 1fr auto;
                /* align-items: center; */
                cursor: pointer;
                gap: 10px;
              }
              .qBoxContainer {
                display: flex;
                align-items: center;
                gap: 10px;
              }
              .qBox {
                border-radius: 3px;
                background: #505050;
                color: white;
                line-height: 40px;
                font-size: 20px;
                width: 40px;
                aspect-ratio: 1/1;
                text-align: center;
              }
              .qText {
                font-size: 18px;
              }
              .aBoxContainer {
                position: relative;
                display: flex;
                align-items: start;
                gap: 10px;
              }
              .aBox {
                z-index: -1;
                border-radius: 3px;
                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
                margin-top: -2px;
                background: #f5a623;
                color: white;
                line-height: 40px;
                font-size: 20px;
                min-width: 40px;
                max-width: 40px;
                min-height: 40px;
                max-height: 40px;
                aspect-ratio: 1/1;
                text-align: center;
              }
              .aText {
                font-size: 14px;
                margin-top: 9px;
                font-weight: 500 !important;
              }
              .chevron{
                rotate: 180deg;
              }
              .chevronPoly {
                fill: #7cb8cf;
              }
              .waterproofSnowproof {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="videoContainer">
            <video class="video" autoplay="" controls="" muted="" loop="" playsinline="" preload="auto" src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/hero_default_advanceparts.mp4" poster="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/thumbnail-03-10-icarcover.webp"></video>
          </div>
          <section class="highQualitySection">
            <picture class="dynamicImage">
              <source class="dynamicImage" srcset="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-main-truck-03-desktop-mirror.webp" media="(min-width: 601px)" />
              <img class="dynamicImage" src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-main-truck-03-mobile-mirror.webp" alt="High-Quality Premium Truck Cover" />
            </picture>

            <div class="highQualityBanner indentSection">
              <h2 class="highQualityHeader">High-Quality Premium Truck Cover</h2>
              <p class="highQualityText">
               Choose our truck cover and enjoy unbeatable all-weather protection. No more worries; with our cover, your truck's safety is assured. Make one smart purchase for lasting peace of mind.
              </p>
            </div>
            <div class="mobileHighQualityBanner indentSection">
              <h2 class="highQualityHeader">High-Quality Premium Truck Cover</h2>
              <p class="highQualityText">
               Choose our truck cover and enjoy unbeatable all-weather protection. No more worries; with our cover, your truck's safety is assured. Make one smart purchase for lasting peace of mind.
              </p>
            </div>
          </section>

          <div class="imageSection">
            <h2 class="subHeader">Superior Protection</h2>
            <picture class="dynamicImage">
              <source class="dynamicImage" srcset="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-desktop-mirror.webp" media="(min-width: 601px)" />
              <img
                class="dynamicImage"
                src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-airvent-truck-03-mobile-mirror.webp"
                alt="Keeps You Dry, Breathable by Design"
              />
            </picture>
          </div>
          <div class="ultimateToolkitSection imageSection">
            <h2 class="subHeader">Ultimate Truck Cover Toolkit</h2>
            <div class="toolkitGrid">
              <div class="toolkitGridItem">
                <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-1.webp" alt="Specialized Sealing Tape" class="image" />
                <h1 class="gridHeader">Zero Leaks, Guaranteed</h1>

                <p class="gridDescription">
                  Stay Dry! Our specialized sealing tape is engineered to keep your
                  truck completely dry.
                </p>
              </div>
              <div class="toolkitGridItem">
                <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-2.webp" alt="Specialized Sealing Tape" class="image" />
                <h1 class="gridHeader">Stay Visible at Night</h1>

                <p class="gridDescription">
                  Spot Your Truck, even in the dark! Our reflective stripe ensures
                  visibility all night.
                </p>
              </div>
              <div class="toolkitGridItem">
                <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-3.webp"  alt="Easy Access Side Zipper"
                class="image" />
                <h1 class="gridHeader">Easy Access Side Zipper</h1>

                <p class="gridDescription">
                  Side zipper opening for quick entry of the truck without removing the
                  cover.
                </p>
              </div>
              <div class="toolkitGridItem">
                <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-4.webp" alt="Wind-Free Strap" class="image" />
                <h1 class="gridHeader">Straps Secure at 60 MPH</h1>

                <p class="gridDescription">
                  Worried about 60 mph winds? The strap ensures the cover stays in
                  place!
                </p>
              </div>
            </div>
          </div>
          <h2 class="subHeader">Stay Dry & Enjoy Soft Touch Fabric</h2>
          <div class="stayDryGrid">
            <div class="stayDryItem">
              <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-5.webp" alt="Waterproof Material with Droplets" class="image" />
              <div class="stayDryDescriptionContainer">
                <h2 class="stayDryItemHeader">Waterproof Material</h2>
                <p class="stayDryItemDescription">
                  Keep Your Truck Bone-Dry! Our cover is leak-free and acts as a
                  raincoat for your truck.
                </p>
              </div>
            </div>
            <div class="stayDryItem">
              <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-6.webp" alt="Soft Inner Fabric" class="image" />
              <div class="stayDryDescriptionContainer">
                <h2 class="stayDryItemHeader">Soft Inner Fabric</h2>
                <p class="stayDryItemDescription">
                  Gentle on Paint, Tough on Elements! Enjoy the perfect blend of
                  comfort and durability.
                </p>
              </div>
            </div>
          </div>
          <section>
            <!-- .stayDryGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; } -->
            <h2 class="subHeader">Complete Truck Protection Set</h2>
            <div class="protectionGrid">
              <div class="protectionItem">
                <img src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-7.webp" alt="Waterproof Carrying Bag" class="image" />
                <div class="listContainer">
                  <h2 class="listTitle">Package Includes:</h2>
                  <ul>
                    <li><span>1x Truck Cover</span></li>
                    <li><span>1x Zipped Storage Bag</span></li>
                    <li>
                      <span>3x Windproof Straps for Front, Middle, and Rear</span>
                    </li>
                    <li>
                      <span>1x Antenna Patch Kit / 1x Pair of Grommets</span>
                    </li>
                    <li><span>1x Instructions</span></li>
                  </ul>
                </div>
              </div>
              <div class="protectionItem">
                <img class="image" src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/car/03/universal-gr/a-universal-gr-8.webp" alt="All-Weather Strap" />
                <div class="listContainer">
                  <h2 class="listTitle">Instructions for All-Weather Strap:</h2>
                  <ul style="list-style: decimal; margin: 0">
                    <li class="numberListItem">
                      <span> Clip the buckles on each side of the truck cover. </span>
                    </li>
                    <li class="numberListItem">
                      <span> Tighten the strap to fit your truck securely. </span>
                    </li>
                    <li class="numberListItem">
                      <span>
                        Repeat this process for the front, middle, and rear sections.
                      </span>
                    </li>
                    <li class="numberListItem">
                      <span> Double-check to confirm all straps are secure. </span>
                    </li>
                    <li class="numberListItem">
                      <span> Inspect for a snug fit. </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <picture class="dynamicImage">
            <source class="dynamicImage" srcset="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weatherproof-truck-03-desktop-mirror.webp" media="(min-width: 601px)" />
            <img
              class="dynamicImage waterproofSnowproof"
              src="https://icarcover.sfo3.cdn.digitaloceanspaces.com/ebay/desc/truck/03/a-weather-truck-03-mobile-mirror.webp"
              alt="Waterproof Snowproof Dustproof Windproof Anti-UV Checks"
            />
          </picture>
          <!-- ADD DROPDOWNS HERE -->
          <div id="QAContainer" class="QAContainer">  
            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">Why is this truck cover a good choice?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Consider it the ultimate shield for your truck. It's engineered to fight off rain, sun, and dust, keeping your truck in pristine condition for years. A must-have for long-lasting truck care!</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">What special features does this cover have?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Beyond weather protection, our cover also guards against bird droppings and tree sap. Its breathable design prevents moisture buildup, ensuring top-tier care for your truck.</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">Is putting this cover on a hassle?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Not at all! Our cover is designed for hassle-free application and removal, offering straightforward protection for your vehicle.</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">Will this fit my truck?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">You've found the right one! Our truck cover is specially designed to offer a precise fit and ultimate protection for your vehicle.</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">What if I'm not happy with it?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">No worries! We prioritize your happiness. If you're not completely satisfied, you're covered by our 30-day return policy. Shop with confidence!</p>
              </span>
            </div>
           <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">Is it safe to leave my car covered outside in heavy rain?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Absolutely! Our car covers are built with heavy-duty materials designed to protect your vehicle from extreme and harsh weather conditions, including rain, snow, and storms. The robust construction ensures all-weather protection, while the soft cotton inner lining safeguards against abrasion. You can confidently leave your car covered outdoors during heavy rain with this cover on.</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">Does this cover protect from the sun?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Yes, this car cover provides 100% protection from the sun's heat and UV rays. It helps regulate your car's interior temperature while safeguarding the exterior from any damage.</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">Can I use your car cover on a windy day?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Yes, our car cover includes three tie-down straps at the front, middle, and back, ensuring it stays securely in place even in winds up to 50 mph.</p>
              </span>
            </div>

            <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">When will I receive my order?</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">We offer same-day shipping for orders placed by 2 pm PST. Your item will typically arrive within 1-5 business days after it ships.</p>
              </span>
            </div>
<div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">What the Warranty Covers</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">Warranty includes coverage for:
<br>* Manufacturing Defects: Faulty stitching, holes, or material defects due to production issues.
<br>* Missing Components: Such as chucks, elastic buckles, hooks, or elastic hooks.
<br>If a covered issue occurs, we will send replacement parts or a new product, free of charge. <br>Shipping fees may apply in some cases.</p>
              </span>
          </div>
          <div class="dropdownContainer">
              <span class="qBoxContainer">
                <div class="qBox">Q</div>
                <p class="qText">What the Warranty Does Not Cover</p>
              </span>
              <span class="aBoxContainer">
                <div class="aBox">A</div>
                <p class="aText">This warranty does not cover:
<br>* Normal wear and tear.
<br>* Damage from accidents, misuse, or neglect.
<br>* Customer dissatisfaction due to personal preference or change of mind
<br>* Damage caused by extreme weather or improper installation
              
          </p></span></div>

          </div>

          
          </html >
     





`;

module.exports = truck_no_mirror_15_bkgr_html;