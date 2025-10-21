import { useState, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MemoizedTitle } from './components/Title/Title.tsx';
import { ETheme } from './types/theme.ts';

const delayedDouble = (num: number) => {
    for (let i = 0; i < 1000000000; i++) {
        return num * 2
    }
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [firstHook, setFirstHook] = useState<string>('useMemo')
  const [secondHook, setSecondHook] = useState<string>('useCallback')
  const [theme, setTheme] = useState<ETheme>(ETheme.LIGHT)

  const hooks = useMemo(() => ({
      firstHook, secondHook
  }), [firstHook, secondHook])

  const handleReset = useCallback(() => {
    setCount(0)
  }, [])

  return (
    <>
      <MemoizedTitle hooks={hooks} resetCount={handleReset} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
