bool isValid(std::string s) {
    std::stack<char> stack;
    for (char& c : s) {
        switch (c) {
            case '(': case '{': case '[': stack.push(c); break;
            case ')': if (stack.empty() || stack.top()!='(') return false; else stack.pop(); break;
            case '}': if (stack.empty() || stack.top()!='{') return false; else stack.pop(); break;
            case ']': if (stack.empty() || stack.top()!='[') return false; else stack.pop(); break;
            default: ; // pass
        }
    }
    return stack.empty() ;
}