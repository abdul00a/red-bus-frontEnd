import React from 'react';
import { Radio } from 'antd';

const BpList = props => {
  return (
    <li className="selectdb-list">
      <label className="radio-css">
        <Radio
          bpObj={{
            bptime: props.bdInfo.boardingTime.substr(0, 5),
            bppoint: props.bdInfo.pointName,
            bplandmark: props.bdInfo.landMark
          }}
          value={props.index}
        ></Radio>
      </label>
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
