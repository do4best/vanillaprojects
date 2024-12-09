class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(data){
        let node = new Node(data)
        if(this.head === null){
            this.head = node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
    }
    printAll(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next
        }
    }
}
let linked = new LinkedList();
linked.add("one")
linked.add("two")
linked.add("three")
linked.printAll()
