---
title: Bulk Import
description: Import multiple AirShop inventory items from CSV or Excel. Format, required fields, and column mapping.
---

# Bulk Import Inventory Items

Bulk import lets you add multiple inventory items at once by uploading a CSV or Excel file. Use it to:

- Import existing inventory from another system
- Add many new products quickly
- Update multiple items at once

## Quick Start

1. Go to [**Inventory**](https://airshop.work/inventory) ([Dashboard](https://airshop.work/inventory) or [Items](https://airshop.work/inventory/items)). Click the dropdown arrow (▼) next to the **ITEM** button, then select **Import**. Or go directly to the [Import page](https://airshop.work/inventory/import).
2. Download the **Sample CSV** (from the import modal or [Import page](https://airshop.work/inventory/import)) to see the format
3. Fill in your data using the sample as a template
4. Upload your file (CSV or Excel, max 10MB)
5. Map your columns (the system auto-detects most fields)
6. Review the preview and import

## Required Fields

Every item must have:

- **name** — Product name (e.g., "Office Chair", "Socket Head Screw")
- **status** — One of: STOCKED, ON_ORDER, ORDER_NOW, ORDER_SOON, RESEARCHING, ARCHIVED, or UNKNOWN

## Optional Fields

You can include any of these (all optional):

- **sku** — Your product code/part number
- **description** — Detailed product info
- **base_price** — Selling price
- **category** — Product category
- **unit** — Unit of measure (each, box, etc.)
- **lead_time** — Days to receive when ordered
- **location** — Storage location
- **image_url** — Main product image (full URL)
- **additional_images** — Multiple images, comma-separated URLs
- **attachments** — Documents/PDFs/CAD files, comma-separated URLs
- **notes** — Internal notes
- **cost_per_unit** — Your purchase cost
- **markup_percentage** — Markup for pricing
- **quantity** — Initial stock quantity (also accepts: initial_quantity, qty, stock)
- **low_stock_threshold** — Quantity that triggers low-stock alerts
- **reorder_qty** — Suggested reorder quantity (also accepts: reorder quantity, order qty, etc.)
- **vendor_name** — Supplier name
- **vendor_contact** — Contact person
- **vendor_email** — Vendor email
- **vendor_phone** — Vendor phone
- **vendor_purchase_url** — Direct purchase link from primary vendor
- **vendor_2_name** — Secondary vendor name
- **vendor_2_contact** — Secondary vendor contact
- **vendor_2_email** — Secondary vendor email
- **vendor_2_phone** — Secondary vendor phone
- **vendor_2_purchase_url** — Direct purchase link from secondary vendor

## Status Values

Use these exact values (or close variations — the system will auto-correct):

- **STOCKED** — Item is in stock
- **ON_ORDER** — Item has been ordered
- **ORDER_NOW** — Need to order immediately
- **ORDER_SOON** — Should order soon
- **RESEARCHING** — Still evaluating
- **ARCHIVED** — No longer active
- **UNKNOWN** — Status not determined

**Tip:** The system recognizes variations like "in stock" → STOCKED, "pending" → ON_ORDER, etc.

## Images & Documents

**Single image:** Put the full URL in the `image_url` column:
```
https://example.com/product-image.jpg
```

**Multiple images:** Put comma-separated URLs in `additional_images`:
```
https://example.com/img1.jpg, https://example.com/img2.jpg, https://example.com/img3.jpg
```

**Documents/attachments:** Put comma-separated URLs in `attachments`:
```
https://example.com/spec.pdf, https://example.com/cad-file.step
```

**Important:** All URLs must be complete (start with http:// or https://). The system downloads and stores them securely in AirShop.

## Example CSV Format

**Minimal (required only):**
```csv
name*,status*
"Alloy Steel Socket Head Screw",STOCKED
```

**With common fields:**
```csv
name*,sku,status*,description,base_price,category,image_url,vendor_name
Office Chair,,STOCKED,Ergonomic chair with lumbar support,299.99,Furniture,https://example.com/chair.jpg,Office Supplies Co
Socket Head Screw,91251A550,STOCKED,,,Hardware,https://example.com/screw.png,McMaster
```

**With images and documents:**
```csv
name*,sku,status*,image_url,additional_images,attachments,vendor_name
Laptop Stand,TS-001,ORDER_NOW,https://example.com/main.jpg,"https://example.com/img1.jpg, https://example.com/img2.jpg","https://example.com/spec.pdf",Tech Solutions
```

## File Limits

- **Max file size** — 10MB
- **Max items per import** — 500
- **Supported formats** — CSV (.csv), Excel (.xls, .xlsx)

## Duplicate Handling

- Each **SKU must be unique** within your organization
- When a duplicate SKU is found, you can choose:
  - **Skip duplicates** — keep existing items unchanged
  - **Update existing** — overwrite with imported data
- When updating, only non-empty fields in your file are changed. Existing data in other fields is preserved.

## Advanced Features

- **Undo import:** Administrators can use "Undo" in [Import History](https://airshop.work/inventory/import) to remove all products from a specific import
- **Cancel import:** Stop a long-running import anytime from the processing screen
- **Vendor URL mapping:** If a column has URLs (e.g., mcmaster.com), you can map them to vendor names (e.g., McMaster-Carr) to avoid junk records. Vendor info can create [Sources](https://airshop.work/sources).
- **Stocktake integration:** If a [stocktake](https://airshop.work/stocktake) is in progress, newly imported items are automatically added to the count list

## Troubleshooting

**"File must contain at least a header row and one data row"**
- Ensure your file has headers in the first row
- Ensure you have at least one data row below the headers

**"Required fields not mapped"**
- Check that `name` and `status` columns are mapped
- The system auto-detects most fields; you can manually map them if needed

**"Invalid status"**
- Use one of the accepted status values (see Status Values above)
- The system will try to auto-correct common variations

**"Duplicate SKU"**
- Each SKU must be unique in your file
- Choose "Update existing items" to overwrite duplicates, or "Skip duplicates" to keep existing items

**Images/documents not showing**
- URLs must be complete (include http:// or https://)
- URLs must be publicly accessible (the system downloads them)
- Check that the file format is correct (jpg, png, pdf, etc.)

**Sample data not importing**
- Rows containing "EXAMPLE" are automatically filtered out
- This prevents accidentally importing the sample data from the template

## Tips & Best Practices

1. **Start small** — Test with 5–10 items first
2. **Use the sample** — Download the sample CSV and modify it for correct formatting
3. **Check the preview** — Review what will be imported before confirming
4. **Backup first** — [Export your current inventory](https://airshop.work/inventory/items) before large imports (same dropdown as Import)
5. **Consistent formatting** — Use the same format for categories, units, and locations across all rows
6. **Review errors** — If some rows fail, download the error report CSV to see what went wrong

## Administrator Note

Bulk import and rollback are restricted to **Organization Administrators** only. See [Settings](https://airshop.work/settings) for organization management.
