import TestCard from '../shared/TestCard.jsx'
import NavBar from '../shared/NavBar.jsx'
import Footer from '../shared/Footer.jsx'

const tests = [
  {
    type: 'char-value',
    title: 'Character Value Test',
    desc: 'Find the numeric value of random letters!',
    focus: 'Alphabet to Number Mapping',
    icon: '🅰️',
    bgHint: 'A-Z',
  },
  {
    type: 'opposite-char',
    title: 'Opposite Character Test',
    desc: 'Find the mirror opposite letter!',
    focus: 'Letter Pair Logic',
    icon: '🔄',
    bgHint: '↔',
  },
  {
    type: 'num-letter',
    title: 'Number-Letter Mapping Test',
    desc: 'Decode the numbers into letters!',
    focus: 'Logical Conversion Skills',
    icon: '🔢',
    bgHint: '123',
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavBar />
      <div className="flex-1 mx-auto max-w-6xl px-6 pt-24 pb-12 w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100">Choose Your Test</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tests.map((t) => (
            <TestCard key={t.type} {...t} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}


