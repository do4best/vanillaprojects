class Stack {
    private stack: number[];
    private maxSize: number;
    private top: number;

    constructor() {
        this.stack = [];
        this.maxSize = 100;
        this.top = -1;
    }

    add(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        
        return true;
    }

    isFull(): boolean {
        return this.top === this.maxSize - 1;
    }
}

let stack1 = new Stack();
stack1.add(1);
stack1.add(2);

console.log(stack1);
