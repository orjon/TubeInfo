// The lines the app covers. To cover more of TfL's network, add the line ids here
// and the TfL mode in MODES, then run `pnpm refresh-data` to rebuild data/.
const TUBE_LINE_IDS = [
  'bakerloo',
  'central',
  'circle',
  'district',
  'hammersmith-city',
  'jubilee',
  'metropolitan',
  'northern',
  'piccadilly',
  'victoria',
  'waterloo-city'
]

// TfL modes whose line statuses are fetched, and the line ids that go with them
const MODES = ['tube', 'elizabeth-line']
const LINE_IDS = [...TUBE_LINE_IDS, 'elizabeth']

// Names to show where we prefer a different one to TfL's ("Elizabeth line" -> "Elizabeth",
// matching the Tube lines, which TfL calls "Central", "Victoria" and so on)
const DISPLAY_NAMES = { elizabeth: 'Elizabeth' }

module.exports = { TUBE_LINE_IDS, MODES, LINE_IDS, DISPLAY_NAMES }
