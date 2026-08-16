---
title: Customer upload links
description: Send customers a link or QR code to upload photos, video, CAD, and documents. Paste into Help Scout replies. Files land on the inquiry.
keywords: [upload, helpscout, qr, customer files, attachments]
---

# Customer upload links

Send a customer a one-time page to drop files — photos, video, CAD, PDFs. They do not need an AirShop account. Files land on the linked inquiry in AirShop.

Most shops send the link from the **Help Scout** sidebar. You can also open a full preview at [Settings → Integrations → Help Scout](https://www.airshop.work/settings/integrations/helpscout).

## How it works

1. In Help Scout, open a conversation. The AirShop sidebar shows **Customer upload link**.
2. Associate the link with **Ticket (this one)**, a quote, or an inventory item.
3. Click **Generate link**. That conversation keeps the same URL until it expires or you reset it.
4. Copy into your reply, send. Customer uploads. You see thumbs in the sidebar and (when the Help Scout API key is saved) an internal note in the thread.

## Copy into the Help Scout thread

AirShop does not insert into the composer for you. Copy, then paste.

| Button | What gets copied |
|--------|------------------|
| **Link** | Your intro message + the upload URL |
| **Link & QR** | Intro message + URL + QR image (caption: scan to upload from a phone) |

Then:

1. Click in the Help Scout reply (or note).
2. Paste (`⌘V` / `Ctrl+V`).
3. Send.

Default intro is *Here's a link to upload files.* Edit that, the QR note, expiry, branding, and footer referral at [Settings → Integrations → Help Scout](https://www.airshop.work/settings/integrations/helpscout) under **Customer upload links**.

!!! tip "Same link until you reset"
    One active URL per conversation. Click **Link** or **Link & QR** again if you need another paste. Use the broken-link icon to kill the URL; generate a new one after that.

## What customers see

They open `/u/…` in a browser (or scan the QR). Drop files or choose files. After upload they get a confirmation on the same page — no refresh, no account.

<video
  class="screenshot"
  autoplay
  muted
  loop
  playsinline
  disablepictureinpicture
  preload="auto"
  poster="/assets/customer-upload-page-poster.jpg"
  width="800"
  height="800"
  aria-label="Customer upload page: choose a file, upload, then confirmation"
>
  <source src="/assets/customer-upload-page.mp4" type="video/mp4">
</video>

Accepted types: photos, video, PDF/Word, and common CAD (STEP, STL, DWG, DXF, and similar). **50 MB** per file.

## Seeing the files

**Help Scout sidebar**

- **Uploads (N)** shows thumbnails. Photos and video use a preview image. Other files show the extension (`PDF`, `STEP`, `MP4`) instead of a generic “FILE” tile.
- Tiles wrap to a second row. After 12, you see **+N**. Click a tile to open it in AirShop.
- Use the refresh icon if a new upload is not listed yet.

**Help Scout thread**

When a file finishes, AirShop posts an **internal note** (not a customer reply): filename, size, and a staff view link. That needs a Help Scout **Mailbox API key** in AirShop settings. “Enable note sync” is the other direction (Help Scout notes → AirShop) and does not create these upload notes.

**AirShop**

Files also show on the linked inquiry under **Attachments**.

**Files page**

Open [Inquiries → Files](https://www.airshop.work/files) to browse every customer upload, inquiry form attachment, and staff upload in one grid. Click a row to open the detail drawer: preview, download, **Open in Fusion**, and links to the ticket or inquiry. Full walkthrough: [Files](../guides/files.md).

Help Scout internal notes and sidebar thumbs open `/files/{fileId}`. Legacy `/uploads/` links redirect there too.

## Settings

On [Help Scout settings](https://www.airshop.work/settings/integrations/helpscout):

- Intro message and QR note (what staff copy)
- How long new links stay active
- Quote branding on the customer page
- Whether the tiny “Powered by AirShop” footer uses your referral link

## Troubleshooting

**Customer says nothing happened after Upload**

The page stays put on purpose. They should see a green “file received” confirmation. If the list just cleared with no banner, they can add more files or close the tab — check the sidebar **Uploads** count.

**Thumbs show, no note in the thread**

Save a Help Scout Mailbox API key (Profile → Authentication → API Keys) in AirShop. Then have the customer upload again, or refresh the conversation.

**Can't click a thumb**

Click opens the file on the [Files](https://www.airshop.work/files) page (or the linked inquiry when one exists). You must be signed in to AirShop.

See also [Help Scout Integration](helpscout.md).
