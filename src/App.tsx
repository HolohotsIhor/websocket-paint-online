import { useState, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MemoizedTitle } from './components/Title/Title.tsx';
import { ShowStatistic } from './components/ShowStatistic/ShowStatistic.tsx';
import { Theme } from './models/theme.ts';

const delayedDouble = (num: number) => {
    let result = num * 2;
    for (let i = 0; i < 1000000000; i++) {
        Math.sqrt(i);
    }
    return result;
};

function App() {
  const [count, setCount] = useState<number>(0)
  const [firstHook, setFirstHook] = useState<string>('useMemo')
  const [secondHook, setSecondHook] = useState<string>('useCallback')
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const themeStyle = {
      backgroundColor: theme === Theme.LIGHT ? 'white' : 'black',
      color: theme === Theme.LIGHT ? 'black' : 'white',
  }

  const handlThemeChange = () => setTheme((prev: Theme) => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

  const hooks = useMemo(() => ({
      firstHook, secondHook
  }), [firstHook, secondHook])

  const handleReset = useCallback(() => {
    setCount(0)
  }, [])

  const doubleCount = useMemo(() => delayedDouble(count), [count])

  return (
    <div className="app" style={{...themeStyle}}>
      <MemoizedTitle hooks={hooks} resetCount={handleReset} />
      <ShowStatistic data={doubleCount} />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={handlThemeChange}>Change theme</button>
      </div>
    </div>
  )
}

export default App
