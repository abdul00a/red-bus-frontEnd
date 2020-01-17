import React from 'react';
import { Radio } from 'antd';

const BpList = props => {
  return (
    <li className="selectdb-list">
      <div className="radio-css">
        <Radio value={props.index}></Radio>
      </div>
      <div className="bpdpTime-css">
        <span className="ar-tym">{props.bdInfo.boardingTime.substr(0, 5)}</span>
      </div>
      <div className="bpdpAddr-css">
        <span className="ar-tym">{props.bdInfo.pointName}</span>
        <div className="locAddr">{props.bdInfo.landMark}</div>
      </div>
    </li>
  );
};

export default BpList;
