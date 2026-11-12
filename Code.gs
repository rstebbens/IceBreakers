/** IceBreakers v0.1 — deploy as a Google Apps Script Web App. */
const SPREADSHEET_ID = 'PASTE_GOOGLE_SHEET_ID_HERE';
function doGet(e) {
  const data = { activities: readTab_('Icebreakers'), questions: readTab_('Questions') };
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
function readTab_(name) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(name);
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];
  const headers = rows.shift().map(String);
  return rows.filter(row => row.some(v => v !== '')).map(row => {
    const obj = {};
    headers.forEach((h,i) => { obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i]; });
    obj.active = obj.active === true || String(obj.active).toLowerCase() === 'true';
    return obj;
  }).filter(obj => obj.active);
}
