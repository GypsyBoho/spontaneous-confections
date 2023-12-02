//----- IMPORTS -----//
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';

//CSS
import 'normalize.css'

//----- EXPORTS -----//
function App() {

  //Return
  return (
    <main>
      <Nav />
      <Home />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </main>
  )
}

export default App