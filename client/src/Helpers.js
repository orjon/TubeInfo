export function findLine(statuses, lineId) {
  return statuses.find((line) => line.id === lineId)
}

export function findLineName(statuses, lineId) {
  return findLine(statuses, lineId)?.name ?? lineId
}

const pad = (n) => String(n).padStart(2, '0')

export function formatTime(timeStamp) {
  const d = new Date(timeStamp)
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

// "due", "1 min", "5 mins", "overdue"
export function formatDueIn(expectedTime, now = Date.now()) {
  const secs = (new Date(expectedTime).getTime() - now) / 1000
  const mins = Math.floor(secs / 60)
  if (mins > 1) return `${mins} mins`
  if (mins === 1) return `${mins} min`
  return secs >= 0 ? 'due' : 'overdue'
}

const directionOrder = [
  'Northbound',
  'Eastbound',
  'Southbound',
  'Westbound',
  'Inner Rail',
  'Outer Rail'
]

// One line's arrivals at a station, split into a group for each direction and
// platform (a merged station such as Paddington has the same line on two
// platforms). Each group keeps at most `limit` arrivals, soonest first.
export function groupArrivals(arrivals, lineId, limit = 5) {
  const groups = []
  for (const arrival of arrivals.filter((a) => a.lineId === lineId)) {
    let group = groups.find(
      (g) => g.direction === arrival.direction && g.platform === arrival.platform
    )
    if (!group) {
      group = { direction: arrival.direction, platform: arrival.platform, arrivals: [] }
      groups.push(group)
    }
    group.arrivals.push(arrival)
  }
  const rank = (d) => (directionOrder.includes(d) ? directionOrder.indexOf(d) : 99)
  return groups
    .filter((g) => directionOrder.includes(g.direction))
    .sort(
      (a, b) =>
        rank(a.direction) - rank(b.direction) ||
        a.platform.localeCompare(b.platform, undefined, { numeric: true })
    )
    .map((g) => ({ ...g, arrivals: g.arrivals.slice(0, limit) }))
}
