
function isValid(s:string): boolean {
const stack: string[] = []
const characters = {
  "(": ")",
  "[": "]",
  "{": "}",
}
 
for (const char of s) {
  if (characters[char]) {
      stack.push(char)
  } else {
    const end = stack.pop();
    if (characters[end as string] !== char) {
      return false;
    }
  }
}

return stack.length === 0;
};




//Excercise incompleted 
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]")) // false
console.log(isValid("[]"))
console.log(isValid("(){}}[]")) //false
console.log(isValid("{}][")) //false
console.log(isValid("")) //false
console.log(isValid("()[]{}")); //true.

console.log(isValid("()")); //true.
console.log(isValid("(]")); //false.
console.log(isValid("([])")); //true.
console.log(isValid("([)]")); //false.
console.log(isValid("(){}}{")); //false.
console.log(isValid("[([]])")); //false.
