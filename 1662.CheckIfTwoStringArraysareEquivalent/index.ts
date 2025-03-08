function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return word1.join('')===word2.join('');
};

console.info(arrayStringsAreEqual(["ab", "c"],["a", "bc"]));
console.info(arrayStringsAreEqual(["a", "cb"],["ab", "c"]));
console.info(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"]));