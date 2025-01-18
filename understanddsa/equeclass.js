
class Que{
    constructor(){
        this.que = [];
        this.maxSize = 100;
        this.head = null;
        this.tail = null;
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
}

let que = new Que();
que.enque("A")
que.enque("B")
que.enque("C")
que.enque("D")
console.log(que)