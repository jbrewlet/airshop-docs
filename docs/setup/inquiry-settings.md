---
title: Inquiry Settings
description: Configure inquiry forms, materials, services, referral sources, notifications, and auto-reply emails.
keywords: [inquiry settings, materials, services, referral source, auto-reply, form configuration]
---

# Inquiry Settings

**How to Find:**

- In **Left Nav**, expand **Settings** → **Inquiry Settings**
- OR **Search** `⌘K` (Mac) / `Ctrl+K` (Windows) for **Inquiry Settings**

[Open Inquiry Settings](https://airshop.work/settings/inquiry-settings){ target="_blank" rel="noopener noreferrer" }

---

Inquiry Settings control what options appear in your inquiry form dropdowns (materials, services, referral sources), whether you get notified when inquiries arrive, and how auto-reply emails work. Form title, description, field visibility, and embed options are configured on the [Inquiry Forms](inquiry-forms.md) page.

---

## Notification Settings

- **Enable inquiry notifications** — When on, you receive real-time notifications when new inquiries are submitted. This includes a badge on the navigation and popup notifications.

---

## Inquiry Forms

Form title, description, fields, embed codes, and all form configuration live on the **Inquiry Forms** page. Use the link in Inquiry Settings or go to **Forms** in the left nav to manage your forms.

See [Inquiry Forms](inquiry-forms.md) for Hosted URL, Embed code, and form customization.

---

## Materials You Work With

Select which materials appear in the **Materials** dropdown on your inquiry forms. Options are grouped by category (e.g., Metals, Plastics, Sheet Metal, Solid Wood).

- **Select all** / **Deselect all** — Toggle an entire group at once.
- **Add custom material** — Enter a custom material name per group. Custom materials appear in the form dropdown for that group.

Materials you select here are used by both the **Default Inquiry Form** and the **Part-Specific Inquiry Form**.

---

## Services You Provide

Select which services appear in the **Services Needed** dropdown on your inquiry forms. Options are grouped by category (e.g., Subtractive / CNC, Cutting, Additive, Finishing).

- **Select all** / **Deselect all** — Toggle an entire group at once.
- **Add custom service** — Enter a custom service name per group. Custom services appear in the form dropdown for that group.

---

## How did you find us?

Configure options for the **Referral source** dropdown (e.g., Google Search, Instagram, Previous Client). Options are grouped by category (Search & Ads, Social, Referrals, Other).

- **Select all** / **Deselect all** — Toggle an entire group at once.
- **Add custom option** — Add your own referral source options.
- **Edit** / **Delete** — Modify or remove custom options.

---

## Auto-Reply Settings

When enabled, customers receive an automatic email after submitting an inquiry.

- **Enable auto-reply emails** — Turn auto-reply on or off.
- **From Email Address** — The address auto-replies are sent from (e.g., `noreply@yourcompany.com`).
- **Auto-Reply Subject** — Subject line of the email. Use parameters below to personalize.
- **Auto-Reply Body** — Body text of the email. Use parameters below to personalize.

### Available Parameters

Use these placeholders in the subject and body to personalize each email:

| Parameter | Description |
|-----------|-------------|
| `{firstName}` | Customer's first name |
| `{lastName}` | Customer's last name |
| `{fullName}` | Full name (first + last) |
| `{email}` | Customer's email address |
| `{organization}` | Organization name |
| `{projectName}` | Project name |
| `{phone}` | Phone number |
| `{contactPreference}` | Contact preference (Phone or Email) |
| `{budget}` | Selected budget range |
| `{deadline}` | Project deadline |
| `{servicesNeeded}` | Selected services |
| `{materials}` | Selected materials |
| `{howDidYouFindUs}` | Referral source |

**Example:** `"Hi {firstName}, thank you for your inquiry about {projectName}. We'll review your {budget} budget and get back to you soon!"`

---

## Related

- [Inquiry Forms](inquiry-forms.md) — Hosted URL, Embed code, and form field configuration
- [Quote Settings](../quote-settings.md) — Quote defaults and display options
