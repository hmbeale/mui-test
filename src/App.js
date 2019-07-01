import React from 'react';
import './App.css';

import SimpleList from './components/simpleList.js'
import OverFlowImage from './components/overflowImage.js'
import Types from './components/types.js'

function App() {
  return (
    <div className="App">
      <SimpleList />
      <OverFlowImage />
      <Types />
    </div>
  );
}

export default App;
