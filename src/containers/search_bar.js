import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
      super(props);

      this.state = {term: ''}
      this.onInputChange = this.onInputChange.bind(this);
      this.onFromSubmit = this.onFromSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
    //console.log(event.target.value);
  }

  onFromSubmit(event){
    event.preventDefault();
    this.setState({term: ''});
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

    // fetch the weather
  }

  render() {
    return (
      <form onSubmit={this.onFromSubmit} className="input-group">
        <input
          placeholder = "Get 5 days forcast in your favorite city"
          className = "form-control"
          value= {this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
