import React from 'react';
import './emptybus.css';

const EmptyBus = () => {
  return (
    <div className="error-bus">
      <div className="no-bus"></div>
      <div className="emp-bus">
        <span>Oops! No buses found.</span>
      </div>
      <div className="alert-noBus">
        <span>
          There are no buses found in this route for the selected date of
          journey. Please try a different route or date
        </span>
      </div>
     
    </div>
  );
};

export default EmptyBus;
