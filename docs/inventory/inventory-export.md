---
title: Inventory Export
description: Export AirShop inventory to CSV for backup, analysis, or external processing. Export all or selected items.
---

# Inventory Export

This guide explains how to export inventory data from AirShop as CSV files.

## Overview

The inventory export feature allows administrators to export inventory items to CSV format for backup, analysis, or external processing. All export files are prefixed with `airshop-` for easy identification.

## Accessing the Export Feature

1. Navigate to **Inventory** → **Items** in the navigation menu
2. The **Export** button is located in the toolbar (admin-only)
3. Click the Export button to open the export modal

## Export Options

You can choose from three export scopes:

### Export All Items

- Exports all inventory items in your organization
- Useful for complete backups or full data exports
- Filename format: `airshop-inventory-export-YYYY-MM-DD.csv`

### Export Selected Items

- Exports only the items you've selected in the grid
- Select items by clicking checkboxes in the first column
- Filename format: `airshop-inventory-export-selected-YYYY-MM-DD.csv`

### Export Filtered Items

- Exports items matching your current filters
- Use the filter toolbar to narrow down items before exporting
- Filename format: `airshop-inventory-export-filtered-YYYY-MM-DD.csv`

## Export File Format

### Filename Convention

All export files follow the naming pattern:

```
airshop-{entity}-export-{scope}-{date}.csv
```

Examples:

- `airshop-inventory-export-2025-01-07.csv` (all items)
- `airshop-inventory-export-selected-2025-01-07.csv` (selected items)
- `airshop-inventory-export-filtered-2025-01-07.csv` (filtered items)

### CSV Columns

The exported CSV includes the following columns:

- **Item Code** - Product item code
- **Item Name** - Product name
- **SKU** - Stock Keeping Unit
- **Status** - Current status (STOCKED, ORDER NOW, etc.)
- **Cost** - Cost per unit (from metadata)
- **Price** - Base selling price
- **Quantity** - Current quantity on hand
- **Low Stock Threshold** - Threshold for low stock alerts
- **Reorder Quantity** - Suggested reorder quantity (shown as ORDER on Kanban cards)
- **Category** - Product category
- **Unit** - Unit of measurement
- **Location** - Storage location
- **Lead Time (days)** - Days to receive when ordered
- **Sources** - Associated sources (semicolon-separated)
- **Procurement Methods** - Procurement methods (semicolon-separated)
- **Description** - Product description
- **Notes** - Internal notes
- **Count in Inventory** - Whether item counts in inventory (Yes/No)
- **Created At** - Date item was created

### CSV Format Details

- **Encoding**: UTF-8
- **Delimiter**: Comma
- **Text Qualifier**: Double quotes (used when values contain commas, quotes, or newlines)
- **Date Format**: US format (e.g., "Jan 7, 2025")

## Permissions

- **Administrator Only**: Only organization administrators can export inventory data
- This restriction ensures data security and prevents unauthorized data exports

## Use Cases

### Backup & Recovery

Export all items regularly to maintain backups of your inventory data.

### External Analysis

Export filtered or selected items for analysis in Excel, Google Sheets, or other tools.

### Data Migration

Use exports as a starting point for migrating data to other systems.

### Reporting

Export specific subsets of inventory for custom reporting or accounting purposes.

## Stocktake Exports

Stocktake reports also use the `airshop-` prefix:

- Format: `airshop-stocktake-{name}-{date}.csv`
- Accessible from completed stocktake reports
- Includes detailed count data, variances, and financial information

## Technical Notes

- Exports are generated server-side for security and performance
- Large exports may take a few moments to generate
- The export modal shows progress while the file is being prepared
- Files download automatically when ready
