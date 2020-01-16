import React from 'react';
import { Select, Icon } from 'antd';
import { connect } from 'react-redux';
import { setSearchSuggestions } from '../../../../actions/Search/Search';


const { Option } = Select;

class SelectComponent extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleSearch = value => {
    if (value) {
       this.props.setSearchSuggestions(this.props.cities.filter(city=>{
        let testStr =new RegExp(`^${value.toLowerCase()}`);
        return(testStr.test(city.cityname.toLowerCase()));
      })) ;
    } else {
      this.props.setSearchSuggestions([])
    }
  };

  handleChange = value => {
    this.props.typeLocation(this.props.searchSuggestions.filter(suggestion=>suggestion.id===parseInt(value))[0].cityname)
  };

  render() {
    const options = this.props.searchSuggestions.map(city => <Option key={city.id}>{city.cityname}</Option>);
    <Icon type="user" style={{ color: 'rgba(0,0,0,1)' }} />
    return (
      <Select
        showSearch
        value={this.props.location}
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

const mapStateToProps = (state) => {
  return{
    searchSuggestions:state.search.searchSuggestions,
  }
}

const mapDispatchToProps =(dispatch) => {
  return{
    setSearchSuggestions: (suggestions)=>dispatch(setSearchSuggestions(suggestions)),

  }
}

SelectComponent = connect(mapStateToProps,mapDispatchToProps)(SelectComponent);


export default SelectComponent;