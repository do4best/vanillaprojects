class Que{
    constructor(){
        this.que = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }
    enque(enq){
        if(this.isFull()){
            return false;
        }
        this.que[this.tail] = enq;
        this.tail++;
        return true;

    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    getLength(){
        return this.tail - this.head;
    }
    isEmpty(){
        return this.getLength(); 
    }
    deque(){
        const item = this.que[this.head];
        this.head++;
        return item;
    }
    peek(){
        return this.que[this.head];
    }
}
let que = new Que();
que.enque("Friend")
que.enque("is")
que.enque("Here")
console.log(que)
console.log(que.deque())
console.log(que.peek())
