import React, {useState} from 'react';
import CssContext from "./context/CssContext";
import {colorStyles, darkStyles} from "./helpers/utils";
import App from "./LiveCoding/liveCoding";

const PokemonApp = props => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(darkMode => !darkMode);
    };

    const styles = darkMode ? darkStyles : colorStyles;
    return (
        /* The CssContext.Provider allows us to change the initial Context values and pass them down to our App */
        <CssContext.Provider value={{styles, darkMode, toggleDarkMode}}>
            <App/>
        </CssContext.Provider>
    )
};

export default PokemonApp;