const display=str=>console.log(str)
class Stack{
    constructor(){
    
        this.stack = []
        this.maxSize = 100;
        this.top = -1
    
    }

    push(item){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = item;
        return true;
    }
    isFull(){
        return this.top === this.maxSize-1;
    }
    isEmpty(){
        return this.top === -1;
    }
    peek(){
        if(this.isEmpty()){
            return false
        }
        return this.stack[this.top]
    }
    
    pop(){
        if(this.isEmpty()){
            return null;
        }
        this.top--;
        return this.stack.pop()
    }

}
function reverString(str){
    let stack = new Stack();
    for(let i=0; i<str.length; i++){
        stack.push(str[i])}
   
    let astring="";
    while(!stack.isEmpty() ){
        astring += stack.pop()
    }
     return astring;
    }
    
  

// let stack = new Stack();
// stack.push('Hello')
// stack.push('Friend')
// stack.push('Too')
// display(stack)
// display(stack.peek())
// stack.pop();
// display(stack)

let result = reverString("Hello there")
display(reverString("Hello there"))