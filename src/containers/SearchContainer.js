import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

const mapStatetoProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: query => {
      dispatch(handleVideoSearch(query));
    }
  };
};

var SearchContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
