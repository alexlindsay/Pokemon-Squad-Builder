import React, {Component, createRef} from "react";
import { squadBuilderQuestions } from "../helpers/utils";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
    this.btnRef = createRef();
  }

  inputChangedHandler = event => {
    this.btnRef.current.disabled = event.target.value.length <= 0;
    this.setState({ userInput: event.target.value });
  };

  submitUserInput(event, submitFxn) {
    event.preventDefault();
    submitFxn(this.state.userInput);
    this.setState({ userInput: "" });
    this.btnRef.current.disabled = true;
  }

  render() {
    return (
      <form
        className="rounded-lg w-1/2 py-4 text-center bg-yellow-300"
        onSubmit={event => this.submitUserInput(event, this.props.submit)}
      >
        {this.props.index >= 6 ? (
          <h3>Congratulations! You're ready to battle!</h3>
        ) : (
          <div>
            <h3 className="mb-4 text-xl">
              {squadBuilderQuestions[this.props.index]}
            </h3>
            <input
              className="w-1/3 border border-black p-2"
              value={this.state.userInput}
              onChange={this.inputChangedHandler}
            />
            <button ref={this.btnRef} disabled={true} className="ml-1 p-2 border border-black">Submit</button>
          </div>
        )}
      </form>
    );
  }
}

export default Question;
