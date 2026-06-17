---
title: Help Scout Integration
description: Connect Help Scout to AirShop to view inquiries, create quotes, and manage customer conversations from the sidebar.
keywords: [helpscout, sidebar app, mailbox id, content signature key, custom app]
---

# Help Scout Integration

When you connect Help Scout to AirShop, the AirShop app appears in the sidebar of your Help Scout conversations.

!!! note "Need Help Scout?"
    We're a Help Scout partner. [Sign up for Help Scout through our link](https://helpscout.partnerlinks.io/airshop)—no extra cost to you, and we earn a commission.

<picture>
  <source srcset="/assets/helpscout.webp" type="image/webp">
  <img src="/assets/helpscout.png" alt="AirShop app in the Help Scout sidebar showing inquiries and quotes" class="screenshot">
</picture>

## What the Integration Does

Your team can:

- **View inquiries and quotes** for the customer in the current conversation
- **Create new inquiries** in AirShop without leaving Help Scout
- **Edit notes and status** on inquiries directly from the sidebar
- **Open inquiries in AirShop** with one click

## Prerequisites

- An active AirShop account
- A Help Scout account with admin access

## Setup

### 1) Open the Help Scout settings in AirShop

1. Log in to your AirShop account and go to [Settings → Integrations → Help Scout](https://www.airshop.work/settings/integrations/helpscout)
2. Keep this page open. You'll enter your Mailbox ID and other values here after setting up Help Scout

### 2) Create a Custom App in Help Scout

1. In Help Scout, go to **Manage** → **Apps** → **Custom Apps**
2. Click **Create Custom App**
3. Fill in:
   - **App name:** e.g. "AirShop"
   - **Content URL:** `https://www.airshop.work/helpscout` (no trailing slash)
   - **Content signature key:** Paste the Content signature key provided by AirShop.
   - **Side Panel URLs:** `https://www.airshop.work/helpscout`
4. Click **Save**
5. **Install the app** and assign it to the mailboxes you use for AirShop

### 3) Enter your Mailbox ID in AirShop

1. In Help Scout, go to **Manage** → **Mailboxes** → select the inbox you use for AirShop
2. The **Mailbox ID** is the number at the end of the URL (e.g. `https://secure.helpscout.net/settings/inboxes/12345` → Mailbox ID is `12345`)
3. In AirShop at [Settings → Integrations → Help Scout](https://www.airshop.work/settings/integrations/helpscout), paste your Mailbox ID into the **Mailbox ID** field

### 4) Provide your Content signature key to AirShop

The Content signature key from your Help Scout Custom App must be configured in AirShop for the sidebar app to work.

- If the [Help Scout settings page](https://www.airshop.work/settings/integrations/helpscout) has a field for **Content signature key**, paste it there
- Otherwise, contact AirShop support with your Content signature key so we can configure it for your account

### 5) (Optional) Set up note sync

To copy conversation notes from Help Scout into AirShop, follow the **Note sync** instructions on the [Help Scout settings page](https://www.airshop.work/settings/integrations/helpscout). This is separate from the Custom App setup. You'll create a Help Scout webhook and use these Webhooks fields:

Use the values shown in AirShop:

- **Callback URL:** `https://www.airshop.work/api/webhooks/helpscout`
- **Secret Key:** Click **Generate** in AirShop, then paste the generated 40-character value into Help Scout Webhooks → **Secret Key**.
- **Events:** Select **Conversation Note Added**. For status sync, also select **Conversation Status Changed**.
- **Inboxes:** Select the same inbox used for the Mailbox ID above.

!!! warning "Two different Help Scout secrets"
    Help Scout has two separate secret fields. Custom App **Content signature key** is used for the sidebar app. Webhooks **Secret Key** is used only for note/status sync. Both must be 40 characters or less, but they are not the same field.

### 6) Save in AirShop

Click **Save** on the [Help Scout settings page](https://www.airshop.work/settings/integrations/helpscout).

### 7) Verify it works

1. Open a conversation in Help Scout (from a mailbox you linked)
2. The AirShop app should appear in the right sidebar
3. If you see customer inquiries or quotes, the integration is working
4. Try creating a new inquiry from the sidebar

## Troubleshooting

**"Mailbox not linked" or no inquiries appear**

- Go to [Settings → Integrations → Help Scout](https://www.airshop.work/settings/integrations/helpscout) and confirm your Mailbox ID is correct.
- The Mailbox ID must match the mailbox of the conversation you're viewing.

**The app doesn't appear in the sidebar**

- In Help Scout, go to **Manage** → **Apps** → find your Custom App → ensure it's **installed** and assigned to the right mailboxes.

**"Invalid or missing Help Scout signature"**

- Your Content signature key must be configured in AirShop. Contact support if you've provided it and the error persists.
- Help Scout requires the Content signature key to be 40 characters or less.

**"Unauthorized" when creating an inquiry**

- Reopen the app from the Help Scout conversation sidebar and try again.
- Confirm the Help Scout mailbox is linked in AirShop at [Settings → Integrations → Help Scout](https://www.airshop.work/settings/integrations/helpscout).
- Confirm the **Content URL** is exactly `https://www.airshop.work/helpscout` and the mailbox assigned to the Custom App matches the Mailbox ID saved in AirShop.

**The app shows "context timed out" or a loading error**

- Ensure your Custom App's Content URL is exactly `https://www.airshop.work/helpscout` (with `www`, no trailing slash).
- Contact AirShop support if it still fails.
