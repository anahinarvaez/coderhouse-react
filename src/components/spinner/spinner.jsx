import React from "react";
import gif from './spinner.gif'
import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
        <img  src={gif} alt="loading..." />
    </div>
  );
};

export default Spinner;