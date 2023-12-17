//----- IMPORTS -----//
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';

//CSS
import 'normalize.css'
import './App.css'

//----- EXPORTS -----//
function App() {

  //Return
  return (
    <main className='site-main'>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default App