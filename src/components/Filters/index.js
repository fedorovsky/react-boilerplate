import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css'

class Filters extends Component {
  handleChange = (value) => {
    console.log(value);
  };

  render() {
    const options = [
      {
        label: 'label-1',
        value: 'first',
      },
      {
        label: 'label-2',
        value: 'second',
      },
    ];

    return (
      <Select
        options={options}
        multi={true}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps)(Filters);
