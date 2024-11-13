import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Hello World!</h1>
      <div class="card">
        <h2>Kevin Morales</h2>
      </div>
      <p class="read-the-docs">
        Developed with Vite and Solid
      </p>
    </>
  )
}

export default App
