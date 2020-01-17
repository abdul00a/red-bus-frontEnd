import React from 'react';
import './FilterItem.css';

const FilterItem = (props) => {
    return ( 
        <label className="filter-item">
            <input type="checkbox" />
            <span className="custom-checkbox" />
            {props.filter}
        </label>
     );
}
 
export default FilterItem;