import { Link } from 'react-router-dom'
import { getProgressSummary } from '../utils/storage.js'

export default function TestCard({ type, title, desc, focus, icon, bgHint }) {
  const progress = getProgressSummary(type)
  const completed = progress?.completedAttempts ?? 0
  const total = progress?.totalAttempts ?? 0
  const pct = total ? Math.round((completed / total) * 100) : 0

  return (
    <div className="relative rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5 dark:bg-slate-900 dark:ring-slate-800">
      <div className="text-3xl" aria-hidden>{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-slate-600 dark:text-slate-300">{desc}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Focus: {focus}</p>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 h-2 rounded bg-slate-100 overflow-hidden dark:bg-slate-800">
          <div className="h-full bg-sky-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="text-xs text-slate-500 whitespace-nowrap dark:text-slate-400">{completed}/{total || 5} attempts</div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-slate-300 text-2xl dark:text-slate-600" aria-hidden>{bgHint}</span>
        <Link to={`/test/${type}`} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition">
          <span>Start Test</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}


