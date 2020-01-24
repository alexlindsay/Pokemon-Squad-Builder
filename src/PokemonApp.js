import React, {useState} from 'react';
import CssContext from "./context/CssContext";
import {colorStyles, darkStyles} from "./helpers/utils";

/* Update the import App statement to load correct exercise */
import App from "./App";


const PokemonApp = props => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(darkMode => !darkMode);
    };

    const styles = darkMode ? darkStyles : colorStyles;
    return (
        <CssContext.Provider value={{styles, darkMode, toggleDarkMode}}>
            <App/>
        </CssContext.Provider>
    )
};

export default PokemonApp;


