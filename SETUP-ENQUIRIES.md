# Connecting enquiries to Google Sheets + email

Right now both forms run in **demo mode**: they validate, show the success
message and log the enquiry to the browser console, but nothing is sent
anywhere. This guide switches them on. It takes about ten minutes and costs
nothing.

---

## Why this architecture

Your site is static HTML/CSS/JS with no server. That creates one hard
constraint worth understanding before you start:

**Anything in your JavaScript files is public.** Every visitor's browser
downloads `js/main.js` and can read it. So a Gmail password or a private API
key placed there would be visible to anyone who opens DevTools. The form
therefore cannot email you directly — it has to hand the enquiry to something
that holds the credentials out of reach.

Google Apps Script is the simplest thing that does this properly:

```
Website form  ──POST──▶  Apps Script Web App  ──┬──▶  Google Sheet (a new row)
(public URL)              (runs as YOU,          └──▶  Gmail (notification)
                           credentials never
                           leave Google)
```

The URL in your JavaScript is safe to publish. It **accepts** submissions but
grants no access to read the sheet or your mail. Worst case, someone floods it
with junk enquiries — annoying, not dangerous, and there's a spam note at the
end.

It's free, has no monthly limits that a small business would hit, and needs no
hosting account anywhere else.

---

## Step 1 — Create the spreadsheet

1. Go to [sheets.new](https://sheets.new)
2. Name it something like **Valaivadivam Enquiries**

Don't add column headings. The script creates and formats them on the first
submission.

---

## Step 2 — Add the script

1. In that spreadsheet: **Extensions → Apps Script**
2. Delete whatever is in the editor
3. Open `google-apps-script.gs` from this project, copy all of it, paste it in
4. Check the setting near the top:

```js
var NOTIFY_EMAIL = "valaivadivam@gmail.com";
```

5. Click the **save** icon

---

## Step 3 — Test before deploying

Worth doing now, so that if something fails you know it's the script and not
the website.

1. In the toolbar's function dropdown, choose **testEnquiry**
2. Click **Run**
3. Google asks for authorisation the first time:
   - **Review permissions** → choose your account
   - You'll see *"Google hasn't verified this app"* — this is expected for
     your own scripts. Click **Advanced → Go to (project name)**
   - **Allow**

Now check: a test row should be in your sheet, and a test email in your inbox.

If both arrived, the backend works.

---

## Step 4 — Deploy as a Web App

1. **Deploy → New deployment**
2. Click the gear beside *Select type* → **Web app**
3. Set:

| Field | Value |
|---|---|
| Description | Valaivadivam enquiries |
| Execute as | **Me** |
| Who has access | **Anyone** |

**"Anyone" is required and is safe here.** It means the URL can receive a POST
without the visitor being signed into Google — which is exactly what a public
contact form needs. It does not give anyone access to your sheet or inbox.

4. **Deploy**, then **copy the Web app URL**

It looks like:
`https://script.google.com/macros/s/AKfycb.....……/exec`

---

## Step 5 — Point the website at it

Open `js/data.js`, scroll to the bottom, and paste your URL:

```js
const VV_ENQUIRY_ENDPOINT = "https://script.google.com/macros/s/AKfycb...../exec";
```

Save. That's the whole integration — one line.

---

## Step 6 — Test end to end

1. Open the site, click **Enquire Now** on any course
2. Fill it in and submit
3. Check the sheet for a new row and your inbox for the email

---

## What gets stored

Every submission adds a row with:

| Column | Notes |
|---|---|
| Date & Time | Added automatically |
| Type | `Course Enquiry` or `Service Enquiry` |
| Full Name · Phone · Email | |
| Course | Course enquiries only |
| Service | Contact-form enquiries only |
| Company | Contact form, optional |
| Training Mode | `100% Online` for course enquiries |
| Message | Optional in both forms |
| Status | Starts as **New** |

The Status column is for you. Change it to *Contacted*, *Enrolled*, *Closed* —
whatever suits how you work. The script only ever writes new rows, so your
edits are never overwritten.

Course and service names are stored **in English** even when the visitor was
browsing in Tamil or Hindi, so your records stay consistent and sortable.

---

## Updating the script later

If you edit `google-apps-script.gs`, the live URL keeps running the **old**
version until you redeploy:

**Deploy → Manage deployments →** pencil icon **→ Version: New version → Deploy**

The URL stays the same. This trips people up constantly — if a change doesn't
seem to take effect, this is almost always why.

---

## Troubleshooting

**Nothing arrives at all**
Open the site, press F12, and submit. A `VV_ENQUIRY_ENDPOINT` typo shows up in
the Console tab. Also confirm the URL ends in `/exec`, not `/dev`.

**The form says success but no row appears**
The site sends with `mode: "no-cors"`, which means the browser can't read the
reply — so it can't tell you the script errored. Check **Executions** in the
Apps Script editor to see the real error.

**Row appears but no email**
Gmail's daily send limit is 100 for free accounts, 1,500 for Workspace. Also
check spam. `testEnquiry` isolates this.

**"Authorization required"**
The deployment's *Execute as* isn't set to **Me**. Redeploy with that fixed.

---

## If you start getting spam

Nothing in the setup above stops a bot posting to the URL. If that becomes a
problem, the usual next step is a honeypot: add a text input that's hidden with
CSS, and have the script discard any submission where it isn't empty. Real
people never see it; simple bots fill it in. Ask when you need it and it's a
small change to both files.

---

## Alternatives

If you'd rather not use Apps Script, the same one-line integration point in
`js/data.js` works with:

- **[Formspree](https://formspree.io)** — email only, no spreadsheet, free tier
- **[Web3Forms](https://web3forms.com)** — email only, generous free tier
- **[SheetMonkey](https://sheetmonkey.io)** — Google Sheets without writing script

Apps Script is the recommendation because it does both halves, is free without
limits that would matter to you, and you own all of it.
