import { loadAll } from '../utils/storage.js'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

export default function Progress() {
  const all = loadAll()
  const entries = Object.entries(all)

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-3xl px-4 pt-24 pb-10 w-full">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">Progress History</h2>

        <div className="mt-6 space-y-6">
          {entries.length === 0 && (
            <div className="text-slate-600 dark:text-slate-300">No attempts yet. Start a test to see your progress here.</div>
          )}

          {entries.map(([type, info]) => (
            <div key={type} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm dark:bg-slate-900 dark:ring-slate-800">
              <div className="font-medium text-slate-800 dark:text-slate-100">{info.lastSummary?.testType || type}</div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <Cell label="Attempts" value={String(info.lastSummary?.totalAttempts ?? info.history?.length ?? 0)} />
                <Cell label="Correct" value={String(info.lastSummary?.correctAnswers ?? '—')} />
                <Cell label="Accuracy" value={info.lastSummary ? `${info.lastSummary.accuracy}%` : '—'} />
                <Cell label="Avg Time" value={info.lastSummary ? `${info.lastSummary.avgTimePerQuestionSec}s` : '—'} />
              </div>

              <div className="mt-4 text-xs text-slate-500">Recent sessions</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {info.history?.slice(-8).reverse().map((h, i) => (
                  <span key={i} className={`inline-flex items-center justify-center w-8 h-8 rounded ${h.summary?.accuracy >= 60 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'}`}>
                    {h.summary ? `${h.summary.accuracy}%` : (h.isCorrect ? '✔' : '✖')}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Cell({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60">
      <div className="text-slate-500 dark:text-slate-400">{label}</div>
      <div className="font-semibold text-slate-800 dark:text-slate-100">{value}</div>
    </div>
  )
}


