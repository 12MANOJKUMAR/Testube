import { Link, useParams } from 'react-router-dom'
import { loadAll } from '../utils/storage.js'
import { getTestMeta } from '../utils/tests.js'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

function feedbackFor(accuracy) {
  if (accuracy >= 90) return 'Outstanding! Keep sharpening your logic 💪'
  if (accuracy >= 60) return 'Good job! Try again for perfection 👏'
  return "Don’t give up! Practice makes perfect 🚀"
}

export default function Result() {
  const { type } = useParams()
  const meta = getTestMeta(type)
  const all = loadAll()
  const last = all[type]?.lastSummary

  const accuracy = last?.accuracy || 0

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-2xl px-4 pt-24 pb-10 w-full">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">You've Completed the Test!</h2>

        <div className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200 p-8 shadow-sm dark:bg-slate-900 dark:ring-slate-800">
          <div className="text-slate-800 font-medium dark:text-slate-100">Result Summary</div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Info label="Test Type" value={last?.testType || meta?.title || '—'} />
            <Info label="Total Attempts" value={String(last?.totalAttempts ?? '—')} />
            <Info label="Correct Answers" value={String(last?.correctAnswers ?? '—')} />
            <Info label="Wrong Answers" value={String(last?.wrongAnswers ?? '—')} />
            <Info label="Accuracy" value={`${accuracy}%`} />
            <Info label="Average Time per Question" value={`${last?.avgTimePerQuestionSec ?? '—'}s`} />
          </div>

          <div className="mt-6 flex items-center justify-center">
            <CircularProgress value={accuracy} />
          </div>

          <div className="mt-6 text-center text-slate-700 dark:text-slate-300">{feedbackFor(accuracy)}</div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to={`/test/${type}`} className="rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-700">Retake Test</Link>
            <Link to="/dashboard" className="rounded-lg px-4 py-2 bg-white ring-1 ring-slate-200 text-slate-700 hover:shadow dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">Back to Dashboard</Link>
            <Link to="/progress" className="rounded-lg px-4 py-2 bg-white ring-1 ring-slate-200 text-slate-700 hover:shadow dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">View Progress History</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Info({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60">
      <div className="text-slate-500 dark:text-slate-400">{label}</div>
      <div className="font-semibold text-slate-800 dark:text-slate-100">{value}</div>
    </div>
  )
}

function CircularProgress({ value }) {
  const r = 56
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle cx="80" cy="80" r={r} fill="none" stroke="#e2e8f0" strokeWidth="10" className="dark:stroke-slate-700" />
      <circle
        cx="80" cy="80" r={r} fill="none" stroke="#0ea5e9" strokeWidth="10"
        strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 600ms ease' }}
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-slate-800 dark:fill-slate-100 text-xl font-semibold">
        {value}%
      </text>
    </svg>
  )
}


