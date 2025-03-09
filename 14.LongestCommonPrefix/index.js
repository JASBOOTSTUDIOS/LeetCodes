function longestCommonPrefix(strs) {
    var logPrefix = new Map();
    var maxim = 0;
    var index = 0;
    for (var a = 0; a < strs.length; a++) {
        console.info("1. Index: ".concat(index));
        if (!maxim) {
            console.info("2. Index: ".concat(index));
            maxim = strs[a].length;
            index = a;
        }
        else if (maxim < strs[a].length) {
            console.info("3. Index: ".concat(index));
            maxim = strs[a].length;
            index = a;
            console.info("4. Index: ".concat(index));
        }
        console.info("5. Index: ".concat(index));
    }
    ;
    console.info(maxim);
    console.info(index);
    return "";
}
;
console.info(longestCommonPrefix(["flower", "flowssss", "flight", "qsad", "ertyuiopoiuytre"]));
// console.info(longestCommonPrefix(["dog","racecar","car"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino","santiago"]));
