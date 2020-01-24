import React from 'react';
import CssContext from "../context/CssContext";
import {styles} from '../helpers/utils';

const Layout = (props) => {
    return (
        <CssContext.Provider value={{styles: styles}}>
            {props.children}
        </CssContext.Provider>
    );
};

export default Layout;