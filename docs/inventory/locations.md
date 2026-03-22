---
title: Locations
description: Manage physical storage locations for your inventory in AirShop. Create, edit, and filter items by location.
keywords: [storage location, bins, warehouse management, inventory organization]
---

# Managing Locations

Locations in AirShop represent physical storage areas where your inventory is kept. This can include anything from a "Main Warehouse" to a specific "Shelf A1" or "Cold Storage".

## Overview

Each location in AirShop has a unique ID (e.g., `LOC-A1B`) and is used to track the physical placement of your products. By organizing your inventory into locations, you can quickly find items and perform more efficient stocktakes.

## Creating and Managing Locations

### How to Access
Go to [**Inventory**](https://airshop.work/inventory) → [**Locations**](https://airshop.work/inventory/locations).

### Adding a New Location
1. Click the **+ LOCATION** button.
2. Enter a **Name** (e.g., "Sub Room A").
3. (Optional) Add a **Description** for more detail.
4. Click **Save**. The system will automatically generate a unique Location ID starting with `LOC-`.

### Editing a Location
1. From the Locations list, click on a specific location to view its details.
2. Click **Edit** to update the name or description.
3. Click **Save Changes**.

## Locations and Inventory

Every inventory item can be assigned to a single location.

- **Assigning Locations:** You can set an item's location during [Bulk Import](bulk-import.md) or by editing an individual item's details.
- **Filtering by Location:** In the [Inventory Items](https://airshop.work/inventory/items) view, you can filter the list to show only items in a specific location.
- **Viewing Items in a Location:** The Location Detail page shows a complete list of all products currently assigned to that storage area.

## Merging Locations

To combine two or more Locations into one (move all items into a single Location and remove the extras), see [Merging Locations](merging-locations.md).

## Deleting Locations

AirShop uses "soft deletes" for locations to preserve data integrity.

- **Active vs. Inactive:** If you no longer use a location, you can mark it as inactive.
- **Restrictions:** You cannot delete or deactivate a location if it still has products assigned to it. You must first move those items to a different location or remove their location assignment.

## Next Steps

Once your locations are set up, you can generate **Location Tags** (physical labels with QR codes) to identify your storage bins. See [Location Tags](location-tags.md) for more details.
