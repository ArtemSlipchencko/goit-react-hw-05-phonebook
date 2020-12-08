import React, { Component } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

class Filter extends Component { 

  static propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };
  
  render () {

    const {filter, handleFilter} = this.props;

    return (

        <div className="input">
                <input type="text" onChange={handleFilter} value={filter} />
        </div>

    );
  };
};

export default Filter;