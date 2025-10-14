import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { greet, formatDate, calculate } from '@repo/utils'
import { Package, Calculator, Calendar, MessageSquare } from 'lucide-react'

export const Route = createFileRoute('/monorepo')({
  component: MonorepoDemo,
})

function MonorepoDemo() {
  const [name, setName] = useState('Developer')
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(5)
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add')

  const greeting = greet(name)
  const currentDate = formatDate()
  const result = calculate(num1, num2, operation)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="w-10 h-10 text-cyan-400" />
            <h1 className="text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Monorepo Demo
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Using shared packages from the workspace
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-mono">
              @repo/utils
            </span>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-mono">
              @repo/ui
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Greeting Demo */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-semibold text-white">Greeting Function</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Using <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">greet()</code> from @repo/utils
            </p>
            <div className="mb-4">
              <label className="block text-sm text-gray-300 mb-2">Enter your name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                placeholder="Enter name..."
              />
            </div>
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <p className="text-cyan-400 text-lg font-semibold">{greeting}</p>
            </div>
          </div>

          {/* Date Demo */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Date Formatter</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Using <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">formatDate()</code> from @repo/utils
            </p>
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-blue-400 text-lg font-semibold">{currentDate}</p>
            </div>
          </div>

          {/* Calculator Demo */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">Calculator</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Using <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">calculate()</code> from @repo/utils
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">First Number:</label>
                <input
                  type="number"
                  value={num1}
                  onChange={(e) => setNum1(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Operation:</label>
                <select
                  value={operation}
                  onChange={(e) => setOperation(e.target.value as any)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="add">Add (+)</option>
                  <option value="subtract">Subtract (-)</option>
                  <option value="multiply">Multiply (×)</option>
                  <option value="divide">Divide (÷)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Second Number:</label>
                <input
                  type="number"
                  value={num2}
                  onChange={(e) => setNum2(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Result:</label>
                <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-400 text-lg font-bold">{result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-3">About This Demo</h3>
          <p className="text-gray-300 mb-2">
            This page demonstrates how TanStack Start integrates with the pnpm workspace monorepo structure.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>The web app imports functions from <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">@repo/utils</code></li>
            <li>TypeScript types are automatically inferred from the shared packages</li>
            <li>Changes to shared packages are instantly reflected in the app</li>
            <li>All packages use workspace protocol for dependency management</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

