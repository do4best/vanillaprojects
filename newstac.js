class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
let str = "Hello, GFG!";
let stack = new Stack();
let res = "";
for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
}
while (!stack.isEmpty()) {
    res += stack.pop();
}
console.log(res);