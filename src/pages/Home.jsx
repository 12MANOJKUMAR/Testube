import { Link } from 'react-router-dom'
import { FaBrain } from 'react-icons/fa'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      <NavBar />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(closest-side,rgba(14,165,233,0.15),transparent_80%)] dark:hidden"></div>
      <div className="flex-1 flex items-center justify-center py-8 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="leading-tight">Sharpen Your Mind — One Logic at a Time</span>
            <FaBrain className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl md:text-5xl flex-shrink-0" />
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-2">
            Practice fun reasoning challenges, track your progress, and build strong logical thinking step-by-step.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link to="/dashboard" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-sky-600 text-white shadow hover:shadow-md hover:bg-sky-700 transition text-sm sm:text-base">
              <span>Start Learning</span>
              <span aria-hidden>→</span>
            </Link>
            <Link to="/progress" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-white text-sky-700 ring-1 ring-sky-200 hover:ring-sky-300 hover:shadow transition dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 text-sm sm:text-base">
              <span>View My Progress</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <FloatingIcons />
      <Footer />
    </div>
  )
}

function FloatingIcons() {
  const icons = ['A', 'Z', '7', '3', 'π', 'Σ', 'Δ', 'B', '9', '∑']
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 sm:opacity-30">
      {icons.map((c, i) => (
        <span
          key={i}
          className="absolute text-sky-300 select-none animate-float"
          style={{
            left: `${(i * 10 + 8) % 90}%`,
            top: `${(i * 13 + 12) % 90}%`,
            fontSize: `clamp(1rem, ${(i % 5) + 1.5}rem, ${(i % 5) + 2}rem)`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {c}
        </span>
      ))}
    </div>
  )
}


