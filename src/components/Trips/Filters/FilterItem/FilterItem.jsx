import React from 'react';
import './FilterItem.css';

const FilterItem = (props) => {
    return ( 
        <label className="filter-item" onClick={(event)=>props.onToggle(event.target.checked)}>
            <input type="checkbox" />
            <span className="custom-checkbox" />
            {props.filter}
        </label>
     );
}
 
export default FilterItem;