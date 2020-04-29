import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <a href="#" class="scrollup" style={{display: "inline"}}>Scroll</a>
     <Header />
     <Main />
     <Footer />
     
    </div>
  );
}

export default App;
