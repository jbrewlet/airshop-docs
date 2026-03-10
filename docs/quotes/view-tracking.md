---
title: Quote View Tracking
description: See when customers open and view your sent quotes. View count, last viewed date, and live viewing status.
keywords: [quote view, view count, date viewed, customer viewed, tracking, opened]
---

# Quote View Tracking

AirShop automatically tracks when customers open and view your sent quotes. You can see view counts, when a quote was last viewed, and whether a customer has the quote open right now.

[Open Quotes](https://airshop.work/quotes/all){ target="_blank" rel="noopener noreferrer" }

---

## Overview

When you send a quote, the customer receives a link (e.g. `airshop.work/quote/abc123`). When they open that link, AirShop records:

- **View count** — How many times the customer has opened the quote
- **Last viewed** — When they most recently opened it
- **Actively viewing** — Whether they currently have the quote open in their browser

Only **customer views** are counted. When you or your team open the quote link while logged in, those views are not tracked.

---

## Where You See It

| Location | What You See |
|----------|--------------|
| **[Quotes list (Data Grid)](https://airshop.work/quotes/all){ target="_blank" rel="noopener noreferrer" }** | A status indicator for customer views, including total views and last viewed details when available. |
| **Quote Builder** | Below the status, "Xx viewed" when the quote has been sent and viewed. |
| **[Stats / Dashboard](https://airshop.work/stats){ target="_blank" rel="noopener noreferrer" }** | Quote views in org trends and impact cards. |

---

## How It Works

1. You send a quote. The customer gets an email with a link to the public quote page.
2. When the customer clicks the link and the quote loads, AirShop records a view.
3. Each time they open the link again, the view count increments and the last-viewed date updates.
4. If they keep the quote open, AirShop can show "actively viewing" (live status) until they close or navigate away.

**Exclusions:**

- **Organization members** — When you or a teammate opens the quote link while logged in to AirShop, the view is not counted.
- **Draft or private quotes** — Only sent quotes with an active public URL are tracked.
- **Sample quotes** — Sample data quotes may not support view tracking.

---

## What Gets Tracked

| Metric | Description |
|--------|-------------|
| **View count** | Total number of times the customer has opened the quote. Increments each time they load the page. |
| **Last viewed** | Timestamp of the most recent view. |
| **Actively viewing** | Whether the customer currently has the quote open. Used for live "someone is viewing" indicators. |

---

## Related Features

- **[Quote Follow-ups](follow-ups.md)** — Uses view tracking to decide when follow-ups are due. If the quote hasn't been viewed within a set number of hours, a first follow-up can be triggered. After it's viewed, later follow-ups use days since last viewed.
- **[Stats](https://airshop.work/stats){ target="_blank" rel="noopener noreferrer" }** — Quote views appear in org trends and workflow impact metrics (quote view rate, customer views to date).

---

## Related

- [Quote Follow-ups](follow-ups.md)
- [Create a Quote](create-quote.md)
- [Quote Settings](../quote-settings.md)
