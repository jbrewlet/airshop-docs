---
title: URL Cleaning
description: AirShop automatically strips tracking parameters and affiliate tags from product URLs for cleaner inventory links.
keywords: [utm, tracking params, affiliate, purchase url, amazon mcmaster, vendor url]
---

# URL Cleaning Feature Guide

## Overview

AirShop automatically cleans product URLs by removing tracking parameters and affiliate tags, providing cleaner, more reliable links for your inventory items.

## What Gets Cleaned

When you paste a URL into the Purchase URL field on an inventory item, AirShop can automatically strip out:

- **Tracking parameters**: UTM tags, affiliate IDs, campaign codes
- **Platform-specific junk**: Amazon ref codes, eBay tracking IDs, etc.
- **Session data**: Cart IDs, user session tokens

### Vendor-Specific Cleaning

!!! note "Why these examples look short"
    For readability, the examples below leave off the `https://` and `www.` prefixes. AirShop still saves the full link with `https://`—and keeps `www.` whenever the vendor needs it.

| Vendor | Before | After |
|--------|--------|-------|
| Amazon / Amazon Business | `amazon.com/Product-Name/dp/B0FCHHZ76X/ref=pd_ci_mcx...?pd_rd_w=jBhca&content-id=...` | `amazon.com/dp/B0FCHHZ76X` |
| Digi-Key | `digikey.com/en/products/detail/product-name/PART123/12345?s=N4Ig...` | `digikey.com/en/products/detail/product-name/PART123/12345` |
| eBay | `ebay.com/itm/123456789012?_trkparms=...` | `ebay.com/itm/123456789012` |
| Fastenal | `fastenal.com/product/details/12345678?src=...` | `fastenal.com/product/details/12345678` |
| Global Industrial | `globalindustrial.com/p/product-name-123456?utm_source=...` | `globalindustrial.com/p/product-name-123456` |
| Grainger | `grainger.com/product/NAME-5K459?tracking=...` | `grainger.com/product/NAME-5K459` |
| Home Depot | `homedepot.com/p/Name/123456789?cm_mmc=...` | `homedepot.com/p/Name/123456789` |
| Lowe's | `lowes.com/pd/Name/1234567?cm_mmc=...` | `lowes.com/pd/Name/1234567` |
| McMaster-Carr | `mcmaster.com/92196A111/?some=param` | `mcmaster.com/92196A111/` |
| MSC Industrial | `mscdirect.com/product/details/12345678?rItem=...` | `mscdirect.com/product/details/12345678` |
| PDX CNC | `pdxcnc.com/products/item?variant=123&utm_source=...` | `pdxcnc.com/products/item` |
| Uline | `uline.com/BL/S-12345?pricode=WA123&utm_source=...` | `uline.com/BL/S-12345` |
| Zoro | `zoro.com/product-name-here/i/G5124366/?variantSelection=...` | `zoro.com/i/G5124366/` |

### Generic Tracking Parameters Removed

For any URL not from a known vendor, these common tracking parameters are automatically removed:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `fbclid` (Facebook)
- `gclid`, `dclid` (Google)
- `msclkid` (Microsoft/Bing)
- `ref`, `source`, `campaign`, `affiliate`
- And many more...

## How It Works

### Automatic Cleaning (Default Behavior)

1. Paste a URL into the Purchase URL field
2. The URL is **automatically cleaned** - tracking parameters are stripped out
3. A message appears: "We cleaned that link up for you" with an **Undo** button
4. Click Undo if you need the original URL (available until you navigate away)

This happens automatically on paste or when you finish typing and leave the field.

### Manual Override

If you need the original URL for some reason:
- Click **Undo** immediately after cleaning to restore the original URL
- The undo option is available until you navigate away or make other changes

## Organization Settings

Automatic URL cleaning can be turned off organization-wide:

1. Go to **Settings** → **Inventory Settings**
2. Toggle **"Automatically clean purchase URLs"**
3. When enabled (default): URLs are automatically cleaned on paste
4. When disabled: URLs are saved exactly as entered, no auto-cleaning

## Benefits

- **Cleaner data**: No more cluttered URLs in your database
- **Reliable links**: Tracking parameters can sometimes cause issues or expire
- **Privacy**: Removes referral tracking when sharing links internally
- **Consistency**: All product URLs follow a standardized format
