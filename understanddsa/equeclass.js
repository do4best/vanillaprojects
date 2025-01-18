
class Que{
    constructor(){
        this.que = [];
        this.maxSize = 100;
        this.head = 0;
        this.tail = 0;
    }
    getLength(){
        return this.tail - this.head
    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    isEmpty(){
        return this.getLength() === 0;
    }
    enque(item){
        if(this.isFull()){
            return "Sorry que has reached its max size"
        }
        this.que[this.tail] = item;
        this.tail++;
        return true;
    }
    deque(){
        const item = this.enque[this.head]
        this.head++;
        return item;
    }
    peek(){
        return this.que[this.head]
    }
}

let que = new Que();
que.enque("A")
que.enque("B")
que.enque("C")
que.enque("D")
console.log(que)
que.deque()
console.log(que)
console.log(que.peek())