Here is a TypeScript console application that determines if a string has valid parentheses:

```typescript
class Stack<T> {
    private items: T[] = [];

    push(element: T) {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

function isValidParentheses(s: string): boolean {
    let stack = new Stack<string>();
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.isEmpty()) {
                return false;
            }
            let top = stack.pop();
            if ((ch === ')' && top !== '(') || (ch === '}' && top !== '{') || (ch === ']' && top !== '[')) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
```

This application uses a stack to keep track of the opening parentheses. When it encounters a closing parenthesis, it checks if the top of the stack contains the corresponding opening parenthesis. If it does, it pops the opening parenthesis from the stack and continues. If it doesn't, it returns false. If the stack is empty when it encounters a closing parenthesis, it also returns false. If the stack is empty after processing the entire string, it returns true, indicating that the string has valid parentheses.