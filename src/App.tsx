import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import './styles/App.css'

function App() {
  
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Projects/>
      <Footer />
    </>
  )
}

export default App
