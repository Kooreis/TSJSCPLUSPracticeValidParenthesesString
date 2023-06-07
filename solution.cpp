```cpp
#include <iostream>
#include <stack>

bool isValid(std::string s) {
    std::stack<char> stack;
    for (char& c : s) {
        switch (c) {
            case '(':
            case '{':
            case '[': stack.push(c); break;
            case ')': if (stack.empty() || stack.top()!='(') return false; else stack.pop(); break;
            case '}': if (stack.empty() || stack.top()!='{') return false; else stack.pop(); break;
            case ']': if (stack.empty() || stack.top()!='[') return false; else stack.pop(); break;
            default: ; // pass
        }
    }
    return stack.empty() ;
}

int main() {
    std::string s;
    std::cout << "Enter a string: ";
    std::cin >> s;
    if(isValid(s))
        std::cout << "The string has valid parentheses.\n";
    else
        std::cout << "The string does not have valid parentheses.\n";
    return 0;
}
```