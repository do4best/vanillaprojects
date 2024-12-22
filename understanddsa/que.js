class Que{
    constructor(){
        this.que = [];
        this.head = 0;
        this.tail = 0;
        this.maxsize = 100;
    }
    enque(value){
        if(this.isFull()){
            return false;
        }
        this.que[this.tail] = value;
        this.tail++;
        return true;
    }
    deque(){
        const item = this.que[this.head]
        this.head++;
        return item;
    }
    isEmpty(){
        return this.getLength() === 0;
    }
    getLength(){
        return this.tail - this.head;
    }
    isFull(){
        return this.getLength() === this.maxsize;

    }
    peek(){
        return this.que[this.head]
    }
}
let que = new Que();
que.enque("Me")
que.enque("against")
que.enque("the")
que.enque("Machine")
console.log(que)
console.log(que.peek())
que.deque()
console.log(que)
console.log(que.peek())