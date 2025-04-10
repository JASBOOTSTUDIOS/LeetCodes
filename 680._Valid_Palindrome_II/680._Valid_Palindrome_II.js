function validPalindrome(s) {
    var start = 0;
    var end = s.length;
    var contStart = 0;
    var contEnd = 0;
    while (start < end) {
        if (s[start] !== s[end]) {
            if (s[start + 1] === s[end] && start < end || s[start] === s[end - 1] && start !== end) {
            }
            else {
                return false;
            }
        }
        start++;
        end--;
    }
    return true;
}
;
console.info(validPalindrome("aba"));
console.info(validPalindrome("abca"));
console.info(validPalindrome("abc"));
