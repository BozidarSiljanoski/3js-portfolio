import { BrowserRouter } from "react-router-dom";


import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About  from './components/About.jsx'
const App = () => {

  return (
    <BrowserRouter>

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>

      <About />

    </BrowserRouter>
  )
}

export default App
