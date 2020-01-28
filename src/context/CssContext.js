import {createContext} from 'react';
import {colorStyles} from "../helpers/utils";

/*
 * This sets up the CssContext object with the colorStyles values to be accessed by components that useContext
 */
const CssContext = createContext({
    styles: colorStyles
});

export default CssContext;