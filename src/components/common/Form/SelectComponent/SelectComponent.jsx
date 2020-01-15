import React from 'react';
import { Select, Icon } from 'antd';


const { Option } = Select;

class SelectComponent extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleSearch = value => {
    if (value) {
      // console.log(this.props.cities);
      this.setState({ value:value,data:this.props.cities.filter(city=>{
        let testStr =new RegExp(`^${value.toLowerCase()}`);
        return(testStr.test(city.cityname.toLowerCase()));
      }) });
    } else {
      this.setState({ data: [] });
    }
    // console.log(this.state);
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    console.log(this.props.placeholder)
    const options = this.state.data.map(city => <Option key={city.id}>{city.cityname}</Option>);
    <Icon type="user" style={{ color: 'rgba(0,0,0,1)' }} />
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SelectComponent;