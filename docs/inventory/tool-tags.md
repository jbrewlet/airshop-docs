---
title: CNC Tool Tags
description: Tool Library, Dymo labels, PDX Edgeview tags, print queue, and scan URLs for CNC tools in AirShop.
keywords: [tool tags, tool library, edgeview, thermal labels, dymo, tool tag tower, CNC, import tools, gauge length]
---

# CNC Tool Tags

AirShop prints the labels. PDX CNC makes the Edgeview tags and the Tool Tag Tower. Same shop, same system.

Keep cutters in the **Tool Library** (spreadsheet export, ERP dump, or Fusion-style CSV all work). Print a thermal label, fold it onto the tag, then put the tag on the holder or in the tower depending on whether the tool is in the machine.

Shop article: [Create labels and organize your CNC tools](https://pdxcnc.com/blogs/a/tool-labels)

---

## Why shops tag CNC tools

- Gauge length and tool type stay visible. No guesswork on the next setup.
- Once a tool is in its holder, you cannot identify it by sight. The tag is the nameplate.
- In a busy shop, instant ID cuts the downtime spent double-checking what is loaded.

---

## Tool Library

**How to find:** [Inventory → Tool Library](https://airshop.work/inventory/tools){ target="_blank" rel="noopener noreferrer" }

The library is a grid of CNC tools stored as AirShop assets. Each tool gets a short **AirShop code** used on labels and scan URLs.

### Add or import tools

- **Add one tool:** [Tool Library → Add tool](https://airshop.work/inventory/tools/new){ target="_blank" rel="noopener noreferrer" }
- **Import CSV:** [Tool Library → Import](https://airshop.work/inventory/tools/import){ target="_blank" rel="noopener noreferrer" }. Column mapping follows common Airtable / Fusion-style tool library headers.

### Tool Type vs Shop Use

- **Tool Type** describes the cutter (style, geometry, coating).
- **Shop Use** is how your team names the tool on the floor.

Geometry fields drive a live **dimension diagram** and **tag preview** while you edit, so the printed label matches the record before you queue it.

### Inventory on the tool record

Open a tool’s **Inventory** tab for quantity on hand, low-stock threshold, reorder quantity, and **procurement sources** (same patterns as stock items). Reorder status and sources help you restock cutters without a separate spreadsheet.

---

## Four steps (print and load)

### 1. Add tools

On [Tool Library](https://airshop.work/inventory/tools), add one tool at a time or [import a CSV](https://airshop.work/inventory/tools/import). Field mapping follows the Airtable / Fusion-style tool library columns.

### 2. Print labels

Queue tools from the library (**Queue for tool tags**), then print from [Tool Tags](https://airshop.work/inventory/tool-tags). Defaults live in [Inventory settings → Tool tag settings](https://airshop.work/settings/inventory-settings#tool-tag-settings).

**Label sizes**

| Setting | Stock size | Typical printer |
|--------|------------|-----------------|
| Standard | 1 x 2.125 in | Dymo LabelWriter 450 or 550 |
| TTS | 1 x 1.5 in | Tormach TTS and similar |

**QR on new prints:** `https://airshop.work/inventory/{code}?utm_medium=ttag`

Typing `/inventory/{code}` with no UTM also opens the tool. Older tags that used `/c/{code}` or `utm_medium=tag` still resolve. See [QR Code Scanning](qr-code-scanning.md) for scanner setup.

### 3. Label the tags

Peel the thermal label and fold it over the Edgeview lip so gauge length and SKU stay readable from the edge. That is the view you get in a rack or tower.

### 4. Load tools and towers

- Tool on the bench or in a drawer: tag stays on the holder.
- Tool in the spindle or carousel: tag lives in the Tool Tag Tower so you can still read what is loaded.

---

## Hardware

- Dymo LabelWriter 450 or 550
- Thermal labels, 1 x 2.125 in (1 x 1.5 in for TTS)
- [PDX CNC Edgeview tool tags](https://pdxcnc.com/pages/tool-tags)
- [Tool Tag Tower](https://pdxcnc.com/pages/tool-tags)

Longer walkthrough with video: [pdxcnc.com/blogs/a/tool-labels](https://pdxcnc.com/blogs/a/tool-labels).

---

## Related

- [QR Code Scanning](qr-code-scanning.md): recommended scanners and scan behavior in AirShop
- [Inventory overview](index.md): other inventory guides
