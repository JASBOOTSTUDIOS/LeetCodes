function arrayStringsAreEqual(word1, word2) {
    return word1.join('') === word2.join('');
}
;
console.info(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.info(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
console.info(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
