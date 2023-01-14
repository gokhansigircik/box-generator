// import React from 'react'
import { useState } from "react";

const Form = ({ boxes, setBoxes }) => {
  const [color, setColor] = useState("");
  const [dimensions, setDimensions] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newBox = {
      color, dimensions
      // instead of this we can write is like up here
      // color: color, 
      // dimensions: dimension,
    }
    // this is how we lift state up 
    setBoxes([
      ...boxes,
      newBox,
    ]);  
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="car-title">Design your box!</h5>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label for="color" class="form-label">
              Color:
            </label>
            <input
              type="color"
              class="form-control"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="dimensions" class="form-label">
              Dimensions:
            </label>
            <input
              type="number"
              class="form-control"
              id="dimensions"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;