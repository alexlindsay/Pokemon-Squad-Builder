export const squadBuilderQuestions = [
    "What is your fake name?",
    "What is your fake SSN?",
    "What is your fake Mother's Maiden name?",
    "When is your unbirthday?",
    "What is your fake credit card number?",
    "Where do you not live?"
];

export const defaultImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png";

export const stringHasher = (string) => {
    let final = 0;
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        final = ((final << 5) - final) + charCode
    }
    return Math.abs(final % 807) + 1
};

export const colorStyles = {
    formStyle: "rounded-lg w-1/2 py-4 text-center bg-yellow-300",
    inputStyle: "w-1/3 border border-black p-2",
    submitBtnStyle: "ml-1 p-2 border border-black",
    topRightBtnStyle: "rounded-sm w-24 h-12 bg-red-700 absolute top-0 right-0",
    topLeftBtnStyle: "rounded-sm w-24 h-12 bg-red-700 absolute top-0 left-0",
    defaultBtnStyle: "rounded-sm w-24 h-12 bg-red-700 absolute",
    btnStyle: "w-full h-full text-center text-yellow-300",
    appStyle: "flex flex-col h-screen bg-blue-200",
    listContainerStyle: "w-1/3 flex justify-center flex-wrap mx-auto mt-4"
};

export const darkStyles = {
    formStyle: "rounded-lg w-1/2 py-4 text-center bg-gray-500",
    inputStyle: "w-1/3 border border-black p-2",
    submitBtnStyle: "ml-1 p-2 border border-black",
    topRightBtnStyle: "rounded-sm w-24 h-12 bg-gray-700 absolute top-0 right-0",
    topLeftBtnStyle: "rounded-sm w-24 h-12 bg-gray-700 absolute top-0 left-0",
    defaultBtnStyle: "rounded-sm w-24 h-12 bg-gray-700 absolute",
    btnStyle: "w-full h-full text-center text-yellow-300",
    appStyle: "flex flex-col h-screen bg-blue-200",
    listContainerStyle: "w-1/3 flex justify-center flex-wrap mx-auto mt-4"
};
