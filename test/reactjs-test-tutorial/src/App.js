import React from 'react';
import { Ticket } from './components/Ticket';
import { Footer } from './components/Footer';
// import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Ticket name="Super Bowl Tickets" />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
