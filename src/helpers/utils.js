export const squadBuilderQuestions = [
    "What is your fake name?",
    "What is your fake SSN?",
    "What is your fake Mother's Maiden name?",
    "When is your unbirthday?",
    "What is your fake credit card number?",
    "Where do you not live?"
];

export const stringHasher = (string) => {
    let final = 1;
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        final = final * charCode
    }
    return (final % 806) + 1
};