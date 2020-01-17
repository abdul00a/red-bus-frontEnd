import React, { Component } from 'react';

class BusSeat extends Component {
  render() {
    return (
      <div>
        <label className="seater">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label className="sleeper">
          <input type="checkbox" />
          <span className="checkmark2"></span>
        </label>
      </div>
    );
  }
}

export default BusSeat;
