display=(str)=>console.log(str)
class Queue{
    constructor(){
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
        this.queue = []
    }
    enque(item){
        if(this.isFull()){
            return false;
        }
        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    getLength(){
        return this.tail - this.head;
    }
    deque(){
        const item =  this.queue[this.head]
        this.head++;
        return item; 
    }
    isEmpty(){
        return this.getLength() === 0;
    }
}
const reversString=(str)=>{
    let que = new Queue();
    let stringone = "";
    for(let i=str.length-1; i >= 0; i--){
        que.enque(str[i]);
    }
    while(!que.isEmpty()){
        stringone += que.deque()
    }
    return stringone;
}
let que = new Queue()
que.enque("World")
que.enque("is")
que.enque("not enough")
display(que)
display(reversString("Find the other God"))