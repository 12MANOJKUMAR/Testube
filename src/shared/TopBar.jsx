import { useLocation, useNavigate } from 'react-router-dom'
import { ThemeToggle } from './ThemeProvider.jsx'

export default function TopBar() {
  const location = useLocation()
  const navigate = useNavigate()

  const path = location.pathname
  let backTo = null
  if (path.startsWith('/dashboard')) backTo = '/'
  if (path.startsWith('/test') || path.startsWith('/result')) backTo = '/dashboard'
  if (path.startsWith('/progress')) backTo = '/'

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        {backTo && (
          <button
            type="button"
            onClick={() => navigate(backTo)}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white ring-1 ring-slate-200 text-slate-700 hover:shadow dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700"
          >
            <span aria-hidden>←</span>
            <span className="text-sm">Back</span>
          </button>
        )}
      </div>
      <ThemeToggle />
    </div>
  )
}


