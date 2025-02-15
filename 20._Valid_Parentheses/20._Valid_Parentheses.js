// 20._Valid_Parentheses
function isValid(s) {
    var stack = [];
    var characters = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (characters[char]) {
            stack.push(char);
        }
        else {
            var end = stack.pop();
            if (characters[end] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
//Excercise incompleted 
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]")); // false
console.log(isValid("[]"));
console.log(isValid("(){}}[]")); //false
console.log(isValid("{}][")); //false
console.log(isValid("")); //false
console.log(isValid("()[]{}")); //true.
console.log(isValid("()")); //true.
console.log(isValid("(]")); //false.
console.log(isValid("([])")); //true.
console.log(isValid("([)]")); //false.
console.log(isValid("(){}}{")); //false.
console.log(isValid("[([]])")); //false.
