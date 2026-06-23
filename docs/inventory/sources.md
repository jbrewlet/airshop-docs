---
title: Sources
description: Manage the suppliers and vendors you buy inventory from. Track contacts, procurement type, and which items use each source.
keywords: [sources, suppliers, vendors, procurement, purchase order, reordering, supplier contact]
---

# Sources

Sources are the suppliers and vendors you buy inventory from. Link a source to your inventory items so you always know where to reorder, who to contact, and how to place an order.

**How to Find:**

- Go to [**Inventory**](https://airshop.work/inventory) → **Sources** in the inventory sub-navigation
- OR open it directly: [Open Sources](https://airshop.work/sources){ target="_blank" rel="noopener noreferrer" }

---

## The Sources list

The Sources page shows every supplier for your organization in a sortable, filterable grid:

- **Name** — The supplier or vendor name
- **Procurement Type** — How you order from this source (see below)
- **Items Associated** — How many active inventory items currently use this source
- **Actions** — Edit or delete a source

Use **Search by name** to quickly find a supplier, or the **Views & Filters** menu to filter and save custom views. Click any row to open the source [details drawer](#source-details-drawer).

---

## Adding a source

Click **+ SOURCE** (top right) to add a supplier. Adding sources requires admin access or the **Create Sources** permission.

| Field | Notes |
|-------|-------|
| **Source Name** | Required. Must be unique — AirShop warns you if the name already exists. |
| **Procurement Type** | Required. One or more of **Online**, **Email PO**, **Call to order**, **Local Pickup**. |
| **Contact First / Last Name** | Optional, but required when procurement type is **Call to order** or **Email PO**. |
| **Phone** | Optional contact number. |
| **Email** | Optional, but required when procurement type is **Email PO**. |
| **Website URL** | Optional, but required when procurement type is **Online**. |
| **Notes** | Internal notes only — never shown to customers. |

Click **Add Source** to save.

---

## Source details drawer

Click a source in the [Sources list](https://airshop.work/sources){ target="_blank" rel="noopener noreferrer" } to open a side panel with everything at a glance:

- **Quick actions** — **Email** or **Call** the source's contact in one click (greyed out when no email or phone is on file)
- **Contact** — Email and phone
- **Website** — Opens the supplier site in a new tab
- **Procurement Type** — How you order from this source
- **Items Associated** — Number of active items using this source
- **Notes** — Your internal notes

Use **Edit Source** (or the open-in-new-tab icon) to make changes.

---

## Editing and bulk edits

- **Edit a single source** — Click the edit icon in the list or **Edit Source** in the drawer.
- **Bulk edit** — Select multiple sources with the checkboxes, then choose **Edit Selected** to update the **Procurement Type** or **Notes** on all of them at once (admin only).

---

## Linking sources to inventory items

Assign a source to an item when adding or editing inventory, or during [Bulk Import](bulk-import.md). The **Items Associated** count on the Sources list reflects how many active items reference each source, making it easy to see which suppliers you rely on most.

---

## Deleting a source

Deleting a source requires admin access.

1. Click the delete icon on a source (in the list).
2. Confirm in the dialog.

When a source is deleted, any products that used it have the source removed. Sample-data sources can't be deleted.

---

**Related:** [Inventory overview](index.md) · [Bulk Import](bulk-import.md) · [Glossary → Source](../glossary.md)
