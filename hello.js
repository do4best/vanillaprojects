class Stack{
    constructor(){
        this.stack=[]
        this.maxSize = 100;
        this.top = -1;
        if(this.maxSize<101){
            "Sorry the stack is full";
            
        }
        
    }
    push(value){
        if(this.isFull()){
            return false
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    isFull(){
        return this.top === this.maxSize-1
    }
    pop(){
        if(this.isEmpty()){
            return false;
        }
        this.top--;
        this.stack.pop()
        return true;
    }
    isEmpty(){
        return this.top === -1
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.top]
    }
}
let stack = new Stack()

stack.push("Follow")
stack.push("The Buzzered")
let name=["Meer"]
stack.push("Afzal")
stack.push("Afzal")

console.log(stack)
stack.pop()
console.log(stack)
console.log(stack.peek())