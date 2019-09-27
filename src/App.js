import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashbord from './Dashbord.js';
import Store from './Store.js'

function App() {
  return (
    <div className="App">
      <Store>
        <Dashbord />
      </Store>
    </div>
  );
}

export default App;
