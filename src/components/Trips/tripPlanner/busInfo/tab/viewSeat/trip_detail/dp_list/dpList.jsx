import React from 'react';
import { Radio } from 'antd';

const DpList = props => {
  return (
    <li className="selectdb-list" key="100">
      <div className="radio-css">
        <Radio value={props.index}></Radio>
      </div>
      <div className="bpdpTime-css">
        <span className="ar-tym">
          {props.bdInfo.departureTime.substr(0, 5)}
        </span>
      </div>
      <div className="bpdpAddr-css">
        <span className="ar-tym">{props.bdInfo.pointName}</span>
        <div className="locAddr">{props.bdInfo.landMark}</div>
      </div>
    </li>
  );
};

export default DpList;
