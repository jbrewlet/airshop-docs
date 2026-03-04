---
title: Bulk Import Customers
description: Import customers from CSV or Excel. Required fields, template, and organization linking.
keywords: [customers import, csv, contacts import, bulk import customers]
---

# Bulk Import Customers

Import customers (people) from a CSV or Excel file. Link them to existing organizations by name.

**How to access:** [Import Data](https://airshop.work/import) → Import Customers, or [Customers](https://airshop.work/customers) → split button → Import

---

## Quick Start

1. **Import organizations first** — Ensure organizations exist so customers can be linked
2. Go to [Import Data](https://airshop.work/import)
3. Download the template: `airshop-customers-import-template.csv`
4. Fill in your data (include Organization Name to link)
5. Upload your file (CSV or Excel, max 10MB)
6. Map columns if needed, then import

---

## Required Fields

| Field | Required | Notes |
|-------|----------|-------|
| Email | Yes | Primary deduplication key |
| First Name | Yes | |
| Last Name | Yes | |

---

## Optional Fields

| Field | Notes |
|-------|-------|
| Organization Name | Links to existing organization; must match exactly |
| Phone | Contact number |
| Title/Role | Job title or role |
| Notes | Free text |

---

## Organization Linking

- If **Organization Name** matches an existing organization, the customer is linked automatically
- If no match is found, you can create the organization during import or skip linking for that row
- Customers without an organization name are imported as standalone contacts

---

## Template

Download `airshop-customers-import-template.csv` from the Import Customers modal or [Import Data](https://airshop.work/import). The template includes sample rows; remove or replace them before importing.

---

## Duplicate Handling

- **Update existing:** Match by Email, overwrite with imported data
- **Skip duplicates:** Keep existing customers unchanged

---

## Tips

- Import organizations before customers
- Use exact organization names from your organizations list when linking
