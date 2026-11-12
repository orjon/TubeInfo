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
