import React, { Component } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var the_value = event.target.value.replace(/(a-zA-Z_-0-9)?:\s/g, ":");

    this.setState({ value: the_value });
  }

  selectAll = (event) => event.target.select();

  // setItems = (index, name) => (event) =>  {
  //   console.log(index, name, event.target.value)
  // }

  render() {
    return (
      <div className="App">
        <h2>
          Simple Replace: <br />
          <small>Chrome Headers to Postman Headers</small>
        </h2>

        <textarea className="code" onChange={this.handleChange}></textarea>

        <h2>Results</h2>

        <textarea
          className="code"
          onFocus={this.selectAll}
          value={this.state.value}
        ></textarea>

        <SpeedInsights />
      </div>
    );
  }
}

export default App;
