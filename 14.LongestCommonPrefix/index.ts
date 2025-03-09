function longestCommonPrefix(strs: string[]): string {
    let logPrefix = new Map<number, string>();
    let maxim:number = 1;
    let index = 0;

    for(const str of strs){
        if(!maxim){
            maxim = str.length;
        }else if(maxim < str.length){
            maxim = str.length;
        }
        index++;
    };
    
    return "";
};


console.info(longestCommonPrefix(["flower","flow","flight"]));
// console.info(longestCommonPrefix(["dog","racecar","car"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino","santiago"]));