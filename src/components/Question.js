import React, {Component} from 'react';
import {squadBuilderQuestions} from '../helpers/utils';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        };
    }

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
        console.log("changed input - ", this.state.userInput);
    };

    submitUserInput(event, submitFxn) {
        console.log("submitUserInput")
        event.preventDefault();
        submitFxn(this.state.userInput);
        this.setState({userInput: ''});
    }


    render() {
        return (
            <form style={{border: '2px solid grey'}} onSubmit={(event) => this.submitUserInput(event, this.props.submit)}>
                {this.props.index >= 6 ?
                    <h3>Congratulations! You're ready to battle!</h3> :
                    <div>
                        <h3>{squadBuilderQuestions[this.props.index]}</h3>
                        <input value={this.state.userInput} onChange={this.inputChangedHandler}/>
                        <button >Submit</button>
                    </div>

                }
            </form>
        )
    }
}

export default Question;