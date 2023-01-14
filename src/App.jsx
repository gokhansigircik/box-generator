import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';

const App = () => {
  const [boxes, setBoxes] = useState([]); 


  return (
    <div className="container mt-3">
      <div className="card shadow">
        <h5 className='card-header'>App</h5>
        <div className="card-body">
          {/* this 2 siblings must have the accsess to the same information 
          whenever that happens u must lift state to a parent component.
           look at the const state code */}
          <Form boxes={boxes} setBoxes={setBoxes}/>
          <Display boxes={boxes}/>
        </div>
      </div>
    </div>
  )
}

export default App  