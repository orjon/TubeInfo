// The lines the app covers. Add to this list to cover more of TfL's network,
// then run `pnpm refresh-data` to rebuild data/.
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

module.exports = { TUBE_LINE_IDS, LINE_IDS: TUBE_LINE_IDS }
