import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Landing from './Hero/landing'
import Locations from './Hero-Location/locations'
import Benefit from './Hero-Benefits/benefits'
import Contact from './Contact/contact'
import Footer from './Footer/footer'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Locations></Locations>
      <Benefit></Benefit>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
