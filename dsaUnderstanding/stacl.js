class Stack{
    constructor(){
        this.stack = [];
        this.top = -1;
        this.maxSize = 100;
    }
    isFull(){
        return this.top === this.maxSize - 1;
    }
    isEmpty(){
        return this.top === -1 
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.top];
    }
add(value){
    if(this.isFull()){
        return false;
    }
    this.top++;
    this.stack[this.top] = value
}
remove(){
    if(this.isEmpty()){
        return null;
    }
    const valuereturned = this.stack[this.top]
    --this.top;
    return valuereturned;
}
}
function reverseString(str){
    let stack = new Stack();
    let sentence="";
    for(let i=0; i<str.length;i++){
        stack.add(str[i])
    }
    while(!stack.isEmpty()){
        sentence += stack.remove();
    }
    return sentence;
}
let stack = new Stack();
stack.add("Hello")
console.log(stack.peek())
console.log(stack)
stack.add("World")
console.log(stack)
stack.remove()
console.log(stack)
console.log(stack.peek())

let sentense = "Friend is here"
console.log(sentense)
console.log(reverseString(sentense))