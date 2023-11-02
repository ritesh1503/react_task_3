// src/App.js
import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import './ColorPicker.css'

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

function App() {
  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
