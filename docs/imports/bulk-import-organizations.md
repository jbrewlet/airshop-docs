---
title: Bulk Import Organizations
description: Import customer organizations from CSV or Excel. Required fields, template, and column mapping.
keywords: [organizations import, csv, customer organizations, bulk import organizations]
---

# Bulk Import Organizations

Import customer organizations (companies you do business with) from a CSV or Excel file.

**How to access:** [Import Data](https://airshop.work/import) → Import Organizations, or [Organizations](https://airshop.work/organizations) → split button → Import

---

## Quick Start

1. Go to [Import Data](https://airshop.work/import)
2. Download the template: `airshop-organizations-import-template.csv`
3. Fill in your data
4. Upload your file (CSV or Excel, max 10MB)
5. Map columns if needed, then import

---

## Required Fields

| Field | Required | Notes |
|-------|----------|-------|
| Organization Name | Yes | Primary deduplication key |

---

## Optional Fields

| Field | Notes |
|-------|-------|
| Website/Domain | Company URL |
| Phone | Contact number |
| Street Address | Street line |
| City | City |
| State | State or province |
| Postal Code | ZIP or postal code |
| Country | Country |
| Notes | Free text |

---

## Template

Download `airshop-organizations-import-template.csv` from the Import Organizations modal or [Import Data](https://airshop.work/import). The template includes sample rows; remove or replace them before importing.

---

## Duplicate Handling

- **Update existing:** Match by Organization Name, overwrite with imported data
- **Skip duplicates:** Keep existing organizations unchanged

---

## Tips

- Import organizations **before** customers so customers can be linked by organization name
- Use consistent organization names if you plan to link customers later
- **QuickBooks / combined addresses:** If your export has a single address column (e.g. "123 Main St, Dallas, TX 75201"), map it to Street Address. AirShop automatically splits it into Street, City, State, and Postal Code.
