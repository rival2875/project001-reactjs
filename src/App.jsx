import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="home-page">
      <section className="home-content">
        <div className="home-logos" aria-label="Vite and React">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="home-logo home-logo--vite" alt="Vite" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="home-logo home-logo--react" alt="React" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="home-card">
          <button
            className="home-counter"
            type="button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="home-hint">
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </main>
  )
}

export default App
