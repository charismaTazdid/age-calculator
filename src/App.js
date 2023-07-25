import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

export default function App() {

  return (
    <div>
      {/* <h1>Age Calculator</h1> */}
      {/* Calculation Problem solved */}
      <CountdownTimer targetDate={'13 aug 1998'} />
    </div>
  );
}

