---
title: QuickBooks Import Guide
description: Export customers and organizations from QuickBooks Online or Desktop and import them into AirShop. Column mapping, import flow, and troubleshooting.
keywords: [quickbooks, quickbooks online, quickbooks desktop, export, customer import, organization import]
---

# QuickBooks Import Guide

Import your QuickBooks customers and organizations into AirShop. Export from QuickBooks Online or Desktop, then use the [Bulk Import](https://airshop.work/import) flow to bring them in.

---

## Export from QuickBooks

### QuickBooks Online

1. Go to **Sales** → **Customers**
2. Click the **Export** button (or **⋮** menu → Export)
3. Choose CSV format
4. Download the file

### QuickBooks Desktop

1. Go to **Customers** → **Customer Center**
2. **File** → **Utilities** → **Export** → **Lists to IIF Files** (or use **Export** if available)
3. Select **Customer List** and export
4. If CSV is preferred, use **File** → **Print Forms** → **Customer List** and export/save as CSV where supported, or use a third-party export tool

---

## Column Mapping: QuickBooks → AirShop

| QuickBooks Column | AirShop Field | Notes |
|-------------------|---------------|-------|
| Company Name / Name | Organization Name | For orgs; use Display Name if Company is empty |
| Display Name | Organization Name or Customer name | Often combines company + contact |
| First Name | First Name | Customer |
| Last Name | Last Name | Customer |
| Email | Email | Customer; required for customers |
| Phone | Phone | Org or customer |
| Bill To Address 1 / Address Line 1 / Full Address | Street Address | Auto-split into Street, City, State, Postal Code |
| Bill To City / City | City | |
| Bill To State / State | State | |
| Bill To Postal Code / ZIP | Postal Code | |
| Bill To Country / Country | Country | |
| Website | Website/Domain | Organization |
| Notes | Notes | Org or customer |

---

## Import Flow

1. **Organizations first** — Export customers from QuickBooks, then split or map to organizations. Import organizations via [Bulk Import Organizations](bulk-import-organizations.md).
2. **Customers second** — Map QuickBooks contacts to the organizations you just imported. Use [Bulk Import Customers](bulk-import-customers.md).
3. **Link by name** — Ensure **Organization Name** in your customer CSV matches the **Organization Name** in AirShop exactly.

---

## Troubleshooting

### Address Splitting

QuickBooks exports addresses as a single combined field (e.g. "123 Main St, Dallas, TX 75201"). **AirShop automatically splits these** when you map the combined column to Street Address during organization import. If City, State, or Postal Code are empty, the system parses the combined value and fills them. No manual splitting needed.

### Display Name

QuickBooks **Display Name** often combines company and contact (e.g., "Acme Corp - John Smith"). Options:

- Use Display Name as Organization Name if it represents the company
- Parse Display Name to separate company and contact for org vs customer imports

### Duplicates

- **Organizations:** AirShop matches by Organization Name. Use "Update existing" to overwrite or "Skip duplicates" to keep current data.
- **Customers:** AirShop matches by Email. Same options apply.

---

## Related Links

- [Bulk Import Organizations](bulk-import-organizations.md) — Fields and template for organizations
- [Bulk Import Customers](bulk-import-customers.md) — Fields and template for customers
- [Bulk Imports](index.md) — Import hub and recommended order
- [Import Data](https://airshop.work/import) — AirShop import page
