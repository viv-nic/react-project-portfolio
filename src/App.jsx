import { Route, Switch } from 'react-router-dom';
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import NavMenu from './components/navMenu/NavMenu';

const App = () => {
  return (

    // <main>
    //   <Header />
    //   <Nav />
    //   <About />
    //   <Experience />
    //   <Services />
    //   <Portfolio />
    //   <Testimonials />
    //   <Contact />
    //   <Footer />
    // </main>
    <>
    {/* <NavMenu /> */}
    <Nav />
    <main>
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            {/* you can add exact or not for extension path, but the main has to have exact in it */}
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/testimonials">
              <Testimonials />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            
            {/* <Route path="*">
              <Fourohfour />
            </Route> */}
          </Switch>
      </main>
      <Footer />
    </>
    
        
    
  )
}

export default App