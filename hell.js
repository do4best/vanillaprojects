class Stack{
    constructor(){
        this.maxSize=100;
        this.stack = []
        this.top = -1
    }
    push(value){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    isFull(){
        return this.top === this.maxSize-1
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
pop(){
    if(this.isEmpty()){
        return false;
    }
    this.top--;
    this.stack.pop()
}


}
function reverseString(str){
    let stack = new Stack();
    for(let i=0; i<str.length; i++){
        stack.push(str[i])
   
    let reversStr = '';
    while(!stack.isEmpty()){
        reversStr += stack.pop()
    }   return reversStr;}
  
}
let stack = new Stack()
stack.push("First")
stack.push("second")
console.log(stack)
console.log(stack.peek())
stack.pop()
console.log(stack)

let firstname="Hello There";
let one =
console.log(reverseString("Hello Friend")
)