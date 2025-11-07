const STORAGE_KEY = 'logic_tests_progress_v1'

export function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveAll(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function recordAttempt(type, { isCorrect, timeMs }) {
  const all = loadAll()
  if (!all[type]) all[type] = { history: [] }
  all[type].history.push({
    ts: Date.now(),
    isCorrect: !!isCorrect,
    timeMs: Number(timeMs) || 0,
  })
  saveAll(all)
}

export function recordSession(type, summary) {
  const all = loadAll()
  all[type] = {
    ...(all[type] || {}),
    lastSummary: summary,
    history: [...((all[type] && all[type].history) || []), { ts: Date.now(), summary }],
  }
  saveAll(all)
}

export function getProgressSummary(type) {
  const all = loadAll()
  const info = all[type]
  if (!info) return { completedAttempts: 0, totalAttempts: 0 }
  const totalAttempts = info.lastSummary?.totalAttempts || 0
  const completedAttempts = totalAttempts
  return { completedAttempts, totalAttempts }
}

export function getHistory(type) {
  const all = loadAll()
  return all[type]?.history || []
}


