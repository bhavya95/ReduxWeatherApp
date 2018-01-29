import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.handeleInputChange = this.handeleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  handeleInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();

    //We need to get and fetch data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter your city to get 5 day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.handeleInputChange}
        />
        <span className="input-group-button">
          <button type="submit" className="btn btn secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
//ensures that actioncreator is dispatched to middleware or reducers

export default connect(null, mapDispatchtoProps)(SearchBar);
//null is in place of mapStatetoprops function
//mapDispatchtoProps is to be second argument
