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