class Stack{
constructor(){
this.stack = []
this.maxSize = 100;
this.top = -1
}
add(vlaue){
if(this.isFull()){
    return null;
}
this.top++
this.stack[this.top] = vlaue;

return true;
}
isFull(){
    return this.top === this.maxSize-1;
}
remove(){
    if(this.isEmpty()){
        return null;
    }
   
    this.top--;
    return this.stack.pop()

}
isEmpty(){
    return this.top === -1
}
peek(){
if(this.isEmpty()){
    return null
}
return this.stack[this.top]
}
}
let stack = new Stack()
console.log(stack)
stack.add("Fuck")
stack.add("Again")
stack.add("Die")
console.log(stack)
stack.remove()
console.log(stack)
console.log(stack.peek())
const reversString=(str)=>{
    let astring = str.length;
    let stack = new Stack();
    for(let i=0; i<astring; i++){
        stack.add(str[i])
    }
    let revers="";
    while(!stack.isEmpty()){
        revers += stack.remove();
    }
    return revers
}
console.log(reversString("Hello Friend"))