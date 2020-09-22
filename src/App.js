import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Bloc from './Components/Bloc'

function App() {
  return (
    <div className="App">
      <Navbar title ="Form App"/>
      <div className="container">
      <Bloc/>
      </div>
      

    </div>
  );
}

export default App;
