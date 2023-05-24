import './App.css'
import { Router } from './Router'

import { TAILWIND_CLASS } from './constants/tailwind.class'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <div className={TAILWIND_CLASS.BASE}>
        <NavBar />
        <Router />
        <Footer />
      </div>
    </>
  )
}

export default App
