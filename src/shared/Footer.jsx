import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Testube. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1 text-center sm:text-right">
            <span>Made with</span>
            <FaHeart className="text-red-500" aria-label="love" />
            <span>by</span>
            <span className="font-semibold text-sky-600 dark:text-sky-400"><a href="https://portfolio-livid-beta-68.vercel.app/">Manoj</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

