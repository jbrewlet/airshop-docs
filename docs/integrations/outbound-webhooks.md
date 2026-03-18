---
title: Outbound Webhooks Setup
description: Send quote acceptance events from AirShop to Zapier, Make, or other tools. Push accepted quotes into QuickBooks, Xero, FreshBooks, or any app that accepts webhooks.
keywords: [webhooks, zapier, make, integromat, quote acceptance, quickbooks, xero, freshbooks]
---

# Outbound Webhooks Setup

When a customer accepts a quote in AirShop, you can automatically send that information to other tools you use — like QuickBooks, Xero, FreshBooks, or any app that can receive webhooks. No coding required if you use Zapier or Make.

---

## What You'll Need

- An AirShop account
- A webhook URL from Zapier, Make, or another tool (we'll show you how to get one)
- About 5 minutes

---

## Step 1: Get Your Webhook URL

You need a URL that can "catch" the quote data when it's sent. The easiest way is to use **Zapier** or **Make** — both have free tiers and don't require any coding.

### Option A: Zapier

1. Go to [zapier.com](https://zapier.com) and sign in (or create a free account).
2. Click **Create Zap**.
3. For the trigger, search for **Webhooks by Zapier** and select **Catch Hook**.
4. Copy the webhook URL Zapier gives you (it looks like `https://hooks.zapier.com/hooks/catch/...`).
5. Keep this Zap open — you'll add what happens next (e.g., create a QuickBooks invoice) after we connect AirShop.

### Option B: Make (formerly Integromat)

1. Go to [make.com](https://make.com) and sign in (or create a free account).
2. Create a new scenario.
3. Add a **Webhooks** module → **Custom webhook**.
4. Copy the webhook URL Make gives you.
5. Keep this scenario open — you'll add the next step (e.g., create a QuickBooks invoice) after we connect AirShop.

!!! tip "New to automation?"
    Both Zapier and Make offer free tiers to get started. Sign up, create your webhook, and you can always add more steps later.

---

## Step 2: Configure in AirShop

1. Log in to AirShop and go to [Settings → Integrations → Outbound Webhooks](https://www.airshop.work/settings/integrations/outbound-webhooks).
2. Paste your webhook URL into the **Webhook URL** field.
3. For **Secret** — click to generate one, or enter your own. Save it somewhere safe; you'll use it if you ever want to verify that requests really come from AirShop.
4. Choose **Trigger mode**:
   - **Manual** — Send only when you click "Send to Webhook" on a Won quote.
   - **Auto** — Send automatically whenever a quote is marked as Accepted.
5. Click **Save**.

---

## Step 3: Use It

- **Manual mode:** Open a quote that's marked as Won, then click **Send to Webhook** (or equivalent) to send the event.
- **Auto mode:** Nothing to do — when a quote is marked as Accepted, AirShop sends the data automatically.

---

## Delivery Log

AirShop logs each delivery (success or failure) in the settings area. Use this to see if a send failed or to confirm that events were received.

---

## Troubleshooting

**Nothing is showing up in Zapier/Make**

- Check that the webhook URL is correct and that you pasted the full URL (no spaces or missing characters).
- In Zapier: Make sure you've triggered the Zap at least once (e.g., "Test trigger") so it's listening.
- In Make: Make sure the scenario is turned on.

**I want to verify that requests really come from AirShop**

See the [Technical](#technical) section below for how to verify the signature.

---

## Technical

This section is for developers or advanced users who need more control.

### Overview

- **Per-organization** — One webhook URL per organization.
- **Quote acceptance events** — Fired when a quote is marked as accepted (Won).
- **Trigger modes** — **Manual**: send only when you click "Send to Webhook". **Auto**: send automatically when a quote transitions to Accepted.
- **Secure** — Requests are signed with HMAC-SHA256 in the `X-Airshop-Signature` header.

### Signature Verification

Each request includes an `X-Airshop-Signature` header containing an HMAC-SHA256 signature of the raw request body, using your secret as the key. You can verify authenticity in Zapier/Make by adding a step that computes the expected signature and compares it to the header.

### Custom Server

If you're not using Zapier or Make, expose a POST endpoint that accepts JSON. The request body will contain the quote acceptance payload. Use the `X-Airshop-Signature` header to verify the request before processing.

### Delivery Log

All deliveries (success or failure) are logged in the settings area for debugging.

---

## Related

- [Integrations overview](index.md) — Other integrations (Help Scout, etc.)
- [QuickBooks Import](../imports/quickbooks-import.md) — Import customers before syncing quotes
