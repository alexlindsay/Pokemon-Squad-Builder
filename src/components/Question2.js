import React, {useEffect, useRef, useState} from "react";
import { squadBuilderQuestions } from "../helpers/utils";

const Question = (props) => {
    const [userInput, setUserInput] = useState("");
    const buttonRef = useRef("");

    const inputChangedHandler = event => {
        setUserInput(event.target.value);
    };

    useEffect(() => {
        if (userInput.length > 0) {
            buttonRef.current.removeAttribute("disabled");
        } else {
            buttonRef.current.setAttribute("disabled", true);
        }
    }, [userInput]);


    const submitUserInput = (event, submitFxn) => {
        event.preventDefault();
        submitFxn(userInput);
        setUserInput("");
        buttonRef.current.setAttribute('disabled', true);
    };

    return (
        <form
            className="rounded-lg w-1/2 py-4 text-center bg-yellow-300"
            onSubmit={event => submitUserInput(event, props.submit)}
        >
            {props.index >= 6 ? (
                <h3>Congratulations! You're ready to battle!</h3>
            ) : (
                <div>
                    <h3 className="mb-4 text-xl">
                        {squadBuilderQuestions[props.index]}
                    </h3>
                    <input
                        className="w-1/3 border border-black p-2"
                        value={userInput}
                        onChange={inputChangedHandler}
                    />
                    <button ref={buttonRef} className="ml-1 p-2 border border-black">Submit</button>
                </div>
            )}
        </form>
    );
};

export default Question;
