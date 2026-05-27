const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

let options = [{ text: "A" }, { text: "B" }, { text: "C" }, { text: "D" }];

console.log("Original before:");
console.log(options.map(o => o.text));

console.log("Shuffled 1:");
console.log(shuffleArray(options).map(o => o.text));

console.log("Original after 1:");
console.log(options.map(o => o.text));

console.log("Shuffled 2:");
console.log(shuffleArray(options).map(o => o.text));
