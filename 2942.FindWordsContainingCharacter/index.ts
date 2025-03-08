function findWordsContaining(words: string[], x: string): number[] {
    const position: number[]=[];
    let index = 0;
    let index1 = 0;

    words.map(word =>{
        for (let i = 0; i < word.length; i++) {
            if (word[i]===x){
                position.push(index);
                index1++;
                break;
            }
        }
        index++;
    })
    return position;
};


console.info(findWordsContaining(["leet","code"],"e"));
console.info(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));
console.info(findWordsContaining(["abc","bcd","aaaa","cbc"],"z"));