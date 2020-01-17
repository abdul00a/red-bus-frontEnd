import React from 'react';
import './FilterItem.css';

const FilterItem = (props) => {
    return ( 
        <label class="filter-item">
            <input type="checkbox" />
            <span class="custom-checkbox" />
            {props.filter}
        </label>
     );
}
 
export default FilterItem;