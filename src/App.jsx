import './App.css'
import Navbar from './components/NavbarComp'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Abilities from "./components/Abilities";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Abilities/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
