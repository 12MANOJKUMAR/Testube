import { Link } from 'react-router-dom'
import { FaSearch, FaCompass, FaStar, FaLightbulb, FaChartBar } from 'react-icons/fa'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

export default function Explore() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-5xl px-6 pt-24 pb-10 w-full space-y-6">
        {/* Test Categories Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-6">
            <FaSearch className="text-sky-600 dark:text-sky-400" />
            <span>Test Categories</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-800 dark:text-slate-100">Test Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-800 dark:text-slate-100">Description</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-800 dark:text-slate-100">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="py-4 px-4 text-slate-800 dark:text-slate-100 font-medium">Place Value Test</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300">Identify numeric value of given alphabets (A–Z).</td>
                  <td className="py-4 px-4">
                    <Link
                      to="/test/char-value"
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition text-sm"
                    >
                      Start Test
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-800 dark:text-slate-100 font-medium">Reverse Character Test</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300">Find the reverse position of alphabets (Z=1...A=26).</td>
                  <td className="py-4 px-4">
                    <Link
                      to="/test/opposite-char"
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition text-sm"
                    >
                      Start Test
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-800 dark:text-slate-100 font-medium">Mixed Mode (optional)</td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300">Random mix of both types for challenge.</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-sm cursor-not-allowed">
                      Coming Soon
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Explore More / Coming Soon Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-6">
            <FaCompass className="text-sky-600 dark:text-sky-400" />
            <span>Explore More / Coming Soon</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Vowel-Consonant Identification Test</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Coming Soon</p>
            </div>
            <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Alphabet Pattern Series</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Coming Soon</p>
            </div>
            <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Character Arithmetic (A + B = ?)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Tips & Tricks Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-6">
            <FaStar className="text-sky-600 dark:text-sky-400" />
            <span>Tips & Tricks</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800">
              <FaLightbulb className="text-sky-600 dark:text-sky-400 mt-0.5" />
              <div>
                <p className="text-slate-800 dark:text-slate-100 font-medium mb-1">Quick Practice Tips</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
                    <span><strong>Remember:</strong> A=1, Z=26.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
                    <span><strong>Reverse value</strong> = 27 - Original value.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 dark:text-sky-400 mt-1">•</span>
                    <span>Use speed drills daily to boost performance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Snapshot Section */}
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-8 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-4">
            <FaChartBar className="text-sky-600 dark:text-sky-400" />
            <span>Progress Snapshot</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Track your improvement and see your recent performance.
          </p>
          <Link
            to="/progress"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 transition text-sm"
          >
            View Full Progress
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}


