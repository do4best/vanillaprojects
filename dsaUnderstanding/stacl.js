class Stack{
    constructor(){
        this.stack = [];
        this.maxSize = 100;
        this.top = -1;
    }
    add(value){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        
        return true;
    }
    isFull(){
        return this.top === this.maxSize - 1;
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        let returntoValue = this.stack[this.top]
        this.top--;
        return returntoValue;
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
}

const inverseSentence=(value)=>{
let stack = new Stack();
let sentence ="";
for(let i=0; i<value.length; i++){
    stack.add(value[i])
}
while(!stack.isEmpty()){
    sentence += stack.pop()
}
return sentence;
}

let stack1 = new Stack();
stack1.add(1)
stack1.add(2)
stack1.add("Hello")

console.log(stack1)
stack1.pop()
console.log(stack1)
console.log(stack1.peek())

console.log(inverseSentence("Hello Friend"))