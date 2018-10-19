
import React, { Component } from 'react'

import './search-panel.css';




class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchCange = (e)=> {
    const term = e.target.value;
    this.setState({
      term: term
    });
    this.props.onSearchCange(term); 
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchCange}
      />
    );
  }
}


export default SearchPanel;
