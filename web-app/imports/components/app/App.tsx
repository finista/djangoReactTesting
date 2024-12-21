import { useState, useEffect } from 'react'
import reactLogo from '@public/svgs/react.svg'
import viteLogo from '@public/svgs/vite.svg'
import './App.scss'

const range = (start: number, end: number) => Array.from({ length: end - start }, (_, i) => start + i);

function App() {
  const [count, setCount] = useState(0)
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (!isLoaded) {
    return (
      <>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>This page is loading meow :3c</p>
      </>
    )
  }

  const list: Array<number> = range(1, count + 1);
  console.log(list);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          Reset count
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <ul>
          {list.map((num) => (
            <li key={num}>Number {num}</li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        {import.meta.env.VITE_TEST}
      </p>
    </>
  )
}

export default App
