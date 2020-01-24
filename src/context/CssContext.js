import {createContext} from 'react';

const CssContext = createContext({
    styles: {
        formStyle: "rounded-lg w-1/2 py-4 text-center bg-yellow-300",
        inputStyle: "w-1/3 border border-black p-2",
        submitBtnStyle: "ml-1 p-2 border border-black",
        topRightBtnStyle: "rounded-sm w-24 h-12 bg-red-700 absolute top-0 right-0",
        topLeftBtnStyle: "rounded-sm w-24 h-12 bg-red-700 absolute top-0 left-0",
        defaultBtnStyle: "rounded-sm w-24 h-12 bg-red-700 absolute",
        btnStyle: "w-full h-full text-center text-yellow-300",
        appStyle: "flex flex-col h-screen bg-blue-200",
        listContainerStyle: "w-1/2 flex justify-center flex-wrap mx-auto mt-4"
    }
});

export default CssContext;