Here is a JavaScript console application that determines if a string has valid parentheses:

```javascript
function isValidParentheses(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else {
            if (s[i] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
```

This console application uses a stack to keep track of the opening parentheses. It iterates over the input string and for every character, it checks if it is an opening parenthesis (i.e., '(', '{', or '[') and if so, it pushes the corresponding closing parenthesis onto the stack. If the character is not an opening parenthesis, it must be a closing parenthesis, and it checks if this closing parenthesis matches the top of the stack. If it does not, it returns false. If it does, it pops the top of the stack. After iterating over the entire string, if the stack is empty, it means that all opening parentheses have been closed, so it returns true. If the stack is not empty, it means that there are some opening parentheses that have not been closed, so it returns false.