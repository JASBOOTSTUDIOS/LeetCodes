function findWordsContaining(words, x) {
    var position = [];
    var index = 0;
    var index1 = 0;
    words.map(function (word) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === x) {
                position[index1] = index;
                index1++;
                break;
            }
        }
        index++;
    });
    return position;
}
;
console.info(findWordsContaining(["leet", "code"], "e"));
console.info(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.info(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
