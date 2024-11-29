const display=str=>console.log(str)
class Queue{
    constructor(){
        this.queue=[];
        this.maxSize=100;
        this.head=0;
        this.tail=0;
    }
    enque(item){
        if(this.isEmpty()){
            return false;
        }
        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }
    isEmpty(){
        return this.getLength() === this.maxSize
    }
    getLength(){
        return this.tail - this.head;
    }
    deque(){
let item = this.queue[this.head]
this.head++;
return item;
    }
    peek(){
        return this.queue[this.head]
    }

}
const reverseString=(str)=>{
    let que = new Queue();
    for(let i=str.length - 1; i >= 0; i--){
        que.enque(str[i])}
        let reverse='';
        while(!que.isEmpty()){
            reverse += que.deque();
        }
        return reverse;
}
let que = new Queue();
que.enque('Boss')
que.enque('Man')
que.enque('Hogan')

display(que)
que.deque()
display(que)
display(que.peek())
console.log(reverseString("Friend"))