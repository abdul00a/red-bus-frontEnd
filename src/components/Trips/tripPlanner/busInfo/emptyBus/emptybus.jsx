import React from 'react';
import './emptybus.css';

const EmptyBus = () => {
  return (
    <div>
      <div className="no-bus">
        <div className="sorry no">No</div>
        <div className="sorry bus">BUS</div>
        <div className="sorry avail">Available</div>
      </div>
    </div>
  );
};

export default EmptyBus;
