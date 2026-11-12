# IceBreakers 🧊
A mobile-friendly facilitator's icebreaker carousel. Version 0.1.

## Features
- Swipe or use Previous/Next to browse activities
- Filter by category and time available
- Surprise me, local favourites and copy activity
- Clear facilitator steps and tips
- Rotating prompts for repeatable formats such as Fast Friends
- Google Sheets-backed activity and question library

## Quick start
Open `index.html` directly to explore the bundled starter activities. You can also publish the repository through GitHub Pages (Settings → Pages → Deploy from branch → main / root).

## Google Sheets content
1. Create a Google Sheet with tabs named **Icebreakers** and **Questions**.
2. Import `data/icebreakers.csv` and `data/questions.csv` into their corresponding tabs. Keep the header names unchanged.
3. Create an Apps Script project and paste `Code.gs`. Set `SPREADSHEET_ID` to the ID from your Google Sheet URL.
4. Deploy the Apps Script as a Web App, execute as yourself and allow access appropriate for your audience.
5. Open the front end with `?api=YOUR_DEPLOYED_WEB_APP_URL` appended to the URL.

**Important:** Google Apps Script web app responses may redirect to another origin and browsers may block direct cross-origin fetches from GitHub Pages. If that happens, deploy the HTML interface inside Apps Script using `HtmlService` and load the data with `google.script.run`, or use a properly configured JSON endpoint/proxy. The standalone HTML always works with its bundled starter activities.

## Content schema
**Icebreakers:** `id,title,category,duration,minPeople,maxPeople,description,instructions,tip,active`. Separate instruction steps using `|`.

**Questions:** `activityId,question,active`. The `activityId` must match an icebreaker `id`.

Set `active` to TRUE to publish. Rows set to FALSE are ignored. New active rows appear after refreshing the deck.

## Privacy
Favourites are stored only in the current browser using localStorage. No participant data is collected. Only publish facilitator content that you are comfortable making visible to anyone who can access the endpoint.
