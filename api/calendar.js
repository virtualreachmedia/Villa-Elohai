module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300');
  const ICAL_URL = 'https://calendar.google.com/calendar/ical/aq58oholioetgt1o93v0d9ptpnnaskp8%40import.calendar.google.com/public/basic.ics';
  try {
    const response = await fetch(ICAL_URL);
    if (!response.ok) throw new Error('Failed: ' + response.status);
    const text = await response.text();
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
