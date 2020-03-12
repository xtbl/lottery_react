import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title={'Lottery'} ballAmount={3}/>
      <Lottery title={'Mini Daily'} ballAmount={4}/>
    </div>
  );
}

export default App;
