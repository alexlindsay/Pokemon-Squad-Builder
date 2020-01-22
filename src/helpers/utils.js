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
    return Math.abs(final % 808) + 1
};