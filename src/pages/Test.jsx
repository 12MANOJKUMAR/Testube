import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTestMeta } from '../utils/tests.js'
import { recordAttempt, recordSession } from '../utils/storage.js'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

// Attempts are chosen by the user at start

export default function Test() {
  const { type } = useParams()
  const meta = getTestMeta(type)
  const navigate = useNavigate()

  const [attempt, setAttempt] = useState(1)
  const [maxAttempts, setMaxAttempts] = useState(null)
  const [started, setStarted] = useState(false)
  const [question, setQuestion] = useState(null)
  const [value, setValue] = useState('')
  const [correctCount, setCorrectCount] = useState(0)
  const [feedback, setFeedback] = useState(null) // { ok, message }
  const [isLocked, setLocked] = useState(false)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [cumulativeMs, setCumulativeMs] = useState(0)
  const timerRef = useRef(null)

  const title = meta?.title || 'Test'

  useEffect(() => {
    if (!meta) {
      navigate('/dashboard', { replace: true })
      return
    }
    // Wait for user to set attempts before starting
    return () => stopTimer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  function startTimer() {
    stopTimer()
    const startAt = Date.now()
    timerRef.current = setInterval(() => {
      setElapsedMs(Date.now() - startAt)
    }, 100)
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function newQuestion() {
    const q = meta.generator()
    setQuestion(q)
    setValue('')
    setFeedback(null)
    setLocked(false)
  }

  function begin(attempts) {
    const n = Math.max(1, Math.min(50, Number(attempts) || 1))
    setMaxAttempts(n)
    setStarted(true)
    setAttempt(1)
    setCorrectCount(0)
    setCumulativeMs(0)
    setElapsedMs(0)
    newQuestion()
    startTimer()
  }

  function submit() {
    if (!started || !question || isLocked) return
    const user = value.trim().toUpperCase()
    const ans = question.answer.toString().trim().toUpperCase()
    const ok = user === ans
    setLocked(true)
    setFeedback({ ok, message: ok ? '✅ Correct!' : `❌ Oops! The correct answer was ${ans}.` })
    recordAttempt(type, { isCorrect: ok, timeMs: elapsedMs })

    if (ok) setCorrectCount((c) => c + 1)
    // Pause timer until user clicks Next
    stopTimer()
  }

  function nextStep() {
    if (!started || !question) return
    const totalAttempts = maxAttempts || 1
    const totalMs = cumulativeMs + elapsedMs
    if (attempt >= totalAttempts) {
      const correct = correctCount
      const wrong = totalAttempts - correct
      const accuracy = Math.round((correct / totalAttempts) * 100)
      const avgTimeSec = (totalMs / totalAttempts / 1000).toFixed(1)
      recordSession(type, {
        testType: title,
        totalAttempts,
        correctAnswers: correct,
        wrongAnswers: wrong,
        accuracy,
        avgTimePerQuestionSec: Number(avgTimeSec)
      })
      navigate(`/result/${type}`, { replace: true })
      return
    }
    setCumulativeMs((m) => m + elapsedMs)
    setAttempt((a) => a + 1)
    setElapsedMs(0)
    newQuestion()
    startTimer()
  }

  const timeText = useMemo(() => {
    const s = Math.floor((elapsedMs / 1000) % 60)
    const m = Math.floor(elapsedMs / 60000)
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }, [elapsedMs])

  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-2xl px-4 pt-24 pb-10 w-full">
        <header className="flex items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>⏱️ {timeText}</span>
            <span>Attempts Left: {started && maxAttempts ? (maxAttempts - attempt + 1) : '-'}</span>
          </div>
        </header>

        {!started ? (
          <div className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200 p-8 shadow-sm text-center dark:bg-slate-900 dark:ring-slate-800">
            <div className="text-slate-700 font-medium">How many attempts?</div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <input
                type="number"
                min={1}
                max={50}
                defaultValue={5}
                id="attempts-input"
                className="w-28 rounded-lg px-4 py-2 ring-1 ring-slate-200 focus:ring-sky-400 outline-none text-center dark:bg-slate-950 dark:text-slate-100 dark:ring-slate-700"
              />
              <button
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 bg-sky-600 text-white hover:bg-sky-700 transition"
                onClick={() => {
                  const el = document.getElementById('attempts-input')
                  begin(el?.value)
                }}
              >
                Start Test
              </button>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Enter 1–50 attempts</div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200 p-8 shadow-sm text-center dark:bg-slate-900 dark:ring-slate-800">
          <div className="text-slate-600 dark:text-slate-300">{meta?.title === 'Number-Letter Mapping Test' ? 'Decode the following numbers:' : 'Your Random Character:'}</div>
          <div className="mt-3 text-4xl sm:text-6xl font-bold text-slate-800 select-none dark:text-slate-100">
            {question ? (meta?.title === 'Number-Letter Mapping Test' ? question.prompt : `✨ ${question.prompt} ✨`) : '—'}
          </div>

          <div className="mt-8">
            <input
              className={`w-full sm:w-3/4 mx-auto block rounded-lg px-4 py-3 ring-1 outline-none ${feedback ? (feedback.ok ? 'ring-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]' : 'ring-rose-400 shadow-[0_0_0_4px_rgba(244,63,94,0.12)]') : 'ring-slate-200 focus:ring-sky-400'} dark:bg-slate-950 dark:text-slate-100 dark:ring-slate-700`}
              placeholder={meta?.inputPlaceholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') submit() }}
              autoFocus
            />
            <button
              className="mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-sky-600 text-white hover:bg-sky-700 transition"
              onClick={submit}
            >
              Submit Answer
            </button>

            {feedback && (
              <div className={`mt-4 text-sm ${feedback.ok ? 'text-emerald-600' : 'text-rose-400'}`}>{feedback.message}</div>
            )}
            {feedback && (
              <button
                className="mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-slate-800 text-white hover:bg-slate-900 transition dark:bg-slate-800 dark:hover:bg-slate-700"
                onClick={nextStep}
              >
                {attempt >= (maxAttempts || 1) ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        </div>
        )}
      </div>
      <Footer />
    </div>
  )
}


