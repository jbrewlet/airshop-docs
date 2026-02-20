---
title: QR Code Scanning
description: How QR codes work on AirShop cards and bin labels. Recommended scanners, setup, and mobile scanning.
---

# QR Code Scanning

AirShop uses QR codes on Kanban cards and bin labels to link directly to inventory items. When you scan a QR code, AirShop opens the item detail page instantly. This guide explains how scanning works and which hardware we recommend.

## How It Works

- **QR codes on cards** link to URLs like `https://airshop.work/inventory/AC1F?utm_medium=kbc`
- **QR codes on bin labels** link to URLs like `https://airshop.work/inventory/AC1F?utm_medium=bin`
- Scanners act like keyboards: they type the URL and press Enter. AirShop captures this input and navigates to the item.
- You can scan from anywhere in the app when no text field is focused. If you're typing in a search box or form, focus that field first, then click elsewhere before scanning so the scanner input is captured correctly.
- **Mobile devices** (iOS and Android) also work: use your phone's camera or a QR app to scan cards and bin labels. The link opens in the browser and goes straight to the item.

## Recommended Scanner: Tera 8100

We recommend the **Tera 8100** industrial 2D handheld barcode scanner for use with AirShop.

**Why the Tera 8100?**

- Reads QR codes and 2D barcodes reliably
- USB, 2.4G wireless, and Bluetooth connectivity
- Works with Windows, Mac, iOS, and Android
- Emulates keyboard input (HID mode), which AirShop is designed for
- Durable for warehouse and shop floor use

**Setup:** Connect via USB or pair wirelessly. No special drivers are needed—the scanner types the scanned URL into the active field, and AirShop routes you to the item.

## Tips for Reliable Scanning

1. **Focus:** Make sure no search box or text field is focused when you scan. Click on empty space or the main content area first.
2. **Browser tab:** Keep the AirShop tab active. Scanners type into the focused window.
3. **QR quality:** Print cards and labels at recommended sizes so QR codes are clear and scannable.
4. **URL format:** AirShop recognizes URLs containing `/inventory/` followed by the item code (e.g. `AC1F`). The `?utm_medium=kbc` or `?utm_medium=bin` suffix is optional and used for analytics.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Scan does nothing | Ensure no input/textarea is focused. Click elsewhere or refresh the page. |
| Wrong item opens | Verify the QR code is correct—reprint the card or label if needed. |
| Scanner types into search | Blur the search field (click outside) before scanning. |
| Works on one device but not another | Use the same browser and ensure the AirShop tab is active when scanning. |
