import React, {useContext} from "react";
import CssContext from "../context/CssContext";

const Button = props => {
    const { styles } = useContext(CssContext);

    return (
        <div className={props.style}>
            <button
                className={styles.btnStyle}
                onClick={props.clicked}
            >
                {props.text}
            </button>
        </div>
    )
};

export default Button;