import React from 'react';
import './styles/App.css';
import './styles/reset.css';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
  <Footer />
    </div>
  );
}

export default App;