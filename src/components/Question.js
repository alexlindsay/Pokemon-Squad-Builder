import React, {Component} from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        };
    }

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
        console.log("INPUT STATE is ", this.state.userInput);
    };

    render() {
        return (
            <div style={{border: '2px solid grey'}}>
                <input value={this.state.userInput} onChange={this.inputChangedHandler}/>
                <button onClick={() => this.props.submit(this.state.userInput)}>Submit</button>
            </div>
        )
    }
}

export default Question;