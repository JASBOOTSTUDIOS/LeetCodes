function longestCommonPrefix(santiago) {
    var logPrefix = new Map();
    var mayor = 1;
    for (var i = 0; i < santiago.length; i++) {
        if (mayor) {
            console.info(mayor);
        }
        else {
            console.info("else");
        }
    }
    ;
    return "";
}
;
console.info(longestCommonPrefix(["flower", "flow", "flight"]));
// console.info(longestCommonPrefix(["dog","racecar","car"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino","santiago"]));
