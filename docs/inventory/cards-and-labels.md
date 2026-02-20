---
title: Kanban Cards & Bin Labels
description: Guide to Kanban cards and bin labels. Keep item names and descriptions readable when printed.
---

# Guide to Kanban Cards & Bin Labels

Use this guide to keep your inventory data readable on printed Kanban cards and bin labels. Fields that are too long will be truncated or scaled down, which can make labels hard to scan.

---

## Kanban Cards (3" × 5" and A7)

### Item Name (Title)

| Length | Result |
|--------|--------|
| **~17–18 characters** | **Largest possible text size** — fits at full base font |
| **~25–35 characters** | Fits on one line (may scale down slightly) |
| **~35–40+ characters** | **Breaks to 2 lines** — still readable at 16px min |
| **50+ characters** | May scale down or clip — keep under 50 when possible |

**When does it break to 2 lines?** When the title is too long to fit on one line at the minimum font size (16px), it automatically wraps to a second line. This typically happens around 35–40 characters, depending on character width (e.g., "W" vs "i").

**Tips:**
- Use abbreviations for units in the name (e.g., "3MM" not "3 millimeter")
- Put detailed specs in **Description** instead of the title
- Test with your longest item names on the [Cards page](https://airshop.work/cards)

---

### Description → INFO section

**Inventory field:** `description` maps to the INFO section on Kanban cards (and to the description area on bin labels). Do not use `notes` for this.

| Length | Result |
|--------|--------|
| **~120 characters** | Full text shown |
| **120+ characters** | Truncated at word boundary |

**Tips:**
- Lead with the most important detail (e.g., "Ruby ball end - 3mm M4 x 0.7mm")
- Use bullet points for readability
- Markdown supported: **bold**, *italic*, `code`, - bullets

---

### SKU (ORG SKU)

| Length | Result |
|--------|--------|
| **30 characters max** | Hard limit in the system |
| **15–20 characters** | Ideal — fits comfortably on cards |

---

### Location / Deliver To

| Length | Result |
|--------|--------|
| **20–25 characters** | Ideal — no truncation |
| **25+ characters** | Ellipsis truncation (e.g., "Above Bathro...") |

---

### Cold Storage

| Length | Result |
|--------|--------|
| **Same as Location** | Matches Deliver To styling — keep concise |

---

### Numeric Fields

- **ORDER**, **LOW**, **LEAD** — Numbers only; no length limits
- Keep lead time under 4 digits for clean display

---

## Bin Labels (Standard 2.125" × 1")

Bin labels are smaller than cards. Be more concise.

### Item Name (Title)

| Length | Result |
|--------|--------|
| **20–30 characters** | Single line at full size |
| **30+ characters** | Scales down; may truncate on small labels |

**Note:** Bin labels use a single-line title (no 2-line wrap). Long names scale down in font size instead.

**Tips:**
- Use the shortest recognizable name
- Small labels (1.5" × 0.75") need even shorter names

---

### Description (from inventory)

**Inventory field:** `description` maps to the description area on bin labels (same as INFO on cards). Do not use `notes` for this.

| Length | Result |
|--------|--------|
| **~120 characters** | Truncated in PDF/print |
| **3 lines max** | Display clamp — prioritize key specs |

**Tips:**
- First line is most visible
- Use abbreviations (e.g., "MOQ 3K", "N52")

---

### SKU

| Length | Result |
|--------|--------|
| **30 characters max** | Same as cards |
| **10–15 characters** | Best for small labels |

---

### Location

| Length | Result |
|--------|--------|
| **15–20 characters** | Ideal for labels |
| **Used as supplier fallback** | If no supplier metadata, location may show here |

---

## Quick Reference

| Field | Cards | Bin Labels |
|-------|-------|------------|
| **Item Name** | ~17–18 chars = largest text; 25–35 ideal; breaks to 2 lines at ~35–40; 50 max | 20–30 chars ideal (single line only) |
| **Description** (→ INFO) | ~120 chars | ~120 chars, 3 lines |
| **SKU** | 30 max | 30 max |
| **Location** | 20–25 chars | 15–20 chars |
| **Cold Storage** | Same as Location | N/A (not on labels) |

---

## Testing Your Data

1. **Cards:** Go to [Cards](https://airshop.work/cards) → queue items → preview
2. **Bin Labels:** Go to [Bin Labels](https://airshop.work/bin-labels) → preview
3. Use items with long names and descriptions to check truncation
4. Print a test sheet before bulk printing
