let str="Hello Friend";
let stack=[];

for(let i=0; i<str.length; i++){
    stack.push(str[i])
}
let astring="";
while(stack.length > 0){
    astring += stack.pop()
}

console.log(astring)