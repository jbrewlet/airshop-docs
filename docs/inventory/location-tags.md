---
title: Location Tags
description: Generate and print physical labels with QR codes for your storage locations in AirShop.
keywords: [location tags, bin labels, QR code, print queue, label customization]
---

# Location Tags

Location Tags are physical labels (often magnets or stickers) that you can place on your storage bins or areas. Each tag includes the location name, its unique ID, and a QR code for quick mobile access.

## Overview

Scanning a Location Tag with a mobile device will take you directly to that location's detail page in AirShop, showing you all items currently stored there.

## The Location Tags Queue

The **Location Tags Queue** is a centralized dashboard for managing and bulk-printing tags.

### How to Access
Go to [**Inventory**](https://airshop.work/inventory) → [**Location Tags**](https://airshop.work/inventory/location-tags).

### Queuing Locations for Tags

You can add a location to the print queue in two ways:

1.  **From Location Details:** Go to a specific [Location](locations.md) and toggle **"Queue this location for tags"**.
2.  **From the Location Tags Queue:** Go to [**Location Tags**](https://airshop.work/inventory/location-tags) and use the **+ ADD LOCATION** button to select existing locations to add to your print queue.

## Printing and Customization

In the Location Tags Queue, you can select multiple locations and customize the output before generating a PDF for printing.

### Tag Sizes

AirShop supports three standard sizes designed for vinyl envelope labels:

*   **Small:** 3.75" × 2.25"
*   **Medium:** 4.5" × 2.625"
*   **Large:** 5" × 3"

### Orientation
Tags can be printed in either **Horizontal** or **Portrait** orientation.

### Organization Defaults
Administrators can set the default size and orientation for all tags in the organization under [**Settings**](https://airshop.work/settings/inventory-settings#location-tags) → **Inventory Settings**.

## QR Code Functionality

Each Location Tag features a dynamic QR code. When scanned:
- It redirects to the full inventory location path (e.g., `/inventory/locations/LOC-ABC`).
- It includes tracking parameters (`utm_medium=loc`) for usage analytics.
- It provides a mobile-friendly view of all items assigned to that location.

## Best Practices
- **Standardize Sizes:** Use the same tag size across your warehouse for a consistent look.
- **Durable Materials:** For high-traffic areas, consider using vinyl magnets or adhesive-backed labels.
- **Clear Labeling:** Ensure the location name is concise enough to fit clearly on the tag size you've chosen.
