function isPalindrome(x) {
    var y = x.toString();
    var is_Palindrome = y.split("").reverse().join("") === x.toString() ? true : false;
    return is_Palindrome;
}
;
console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(-123));
console.log(isPalindrome(11));
