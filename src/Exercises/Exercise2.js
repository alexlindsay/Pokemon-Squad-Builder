import React, { Component } from "react";

/* Exercise 2: convert this class component to use the useState and useEffect hooks */

class TacoCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubctractClick = this.handleSubctractClick.bind(this);
  }

  handleAddClick() {
    this.setState({ count: this.state.count + 1 });
  }

  handleSubctractClick() {
    this.setState({ count: this.state.count !== 0 ? this.state.count - 1 : 0 });
  }

  componentDidUpdate() {
    document.title = `${this.state.count} tacos!`;
  }

  render() {
    return (
      <div>
        You want {this.state.count} taco(s)
        <div>
          <button className="mr-2" onClick={this.handleAddClick}>
            Add
          </button>
          <button onClick={this.handleSubctractClick}>Subtract</button>
        </div>
      </div>
    );
  }
}

export default TacoCounter;
