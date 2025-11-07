import { FaBrain, FaBullseye, FaLightbulb } from 'react-icons/fa'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

export default function About() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-5xl px-6 pt-24 pb-10 w-full space-y-6">
        {/* Overview Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FaBrain className="text-sky-600 dark:text-sky-400" />
            <span>Overview</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            Testube is an interactive web app designed to help learners strengthen their reasoning and logic skills through fun letter-based tests like place value (A–Z) and reverse character matching.
          </p>
        </div>

        {/* Objective / Mission Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FaBullseye className="text-sky-600 dark:text-sky-400" />
            <span>Objective / Mission</span>
          </h2>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span>To make learning reasoning concepts engaging and gamified.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span>To provide instant feedback and progress tracking.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span>To help students preparing for aptitude, defense, or competitive exams.</span>
            </li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <FaLightbulb className="text-sky-600 dark:text-sky-400" />
            <span>Features</span>
          </h2>
          <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span><strong className="text-slate-800 dark:text-slate-100">Character Place Value Test:</strong> Practice identifying A–Z values (A=1, B=2... Z=26).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span><strong className="text-slate-800 dark:text-slate-100">Reverse Character Test:</strong> Match reversed letter positions (Z=1, Y=2... A=26).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span><strong className="text-slate-800 dark:text-slate-100">Timed Tests:</strong> Challenge yourself against a timer.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span><strong className="text-slate-800 dark:text-slate-100">Leaderboard (optional):</strong> See your rank among other learners.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
              <span><strong className="text-slate-800 dark:text-slate-100">Progress Tracker:</strong> Know your improvement over time.</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}


