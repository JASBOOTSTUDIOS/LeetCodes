function validPalindrome(s: string): boolean {
let start = 0;
let end = s.length;

while(start < end){
    if(s[start] !== s[end]){
        if(s[start+1] === s[end] && start < end  || s[start] === s[end-1] && start !== end ){
        }else{
            return false;
        }
    }
    start++;
    end--;
}

  return true;  
};

console.info(validPalindrome( "aba"));
console.info(validPalindrome( "abca"));
console.info(validPalindrome( "abc"));