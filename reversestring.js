function Reversestring(str) {
    let wordArr =  str.split(" ").map(word=> word.split("").reverse().join(""));
    return wordArr.join(" ");
}

console.log(Reversestring("hello learning.."));