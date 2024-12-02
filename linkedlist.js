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
        let node = new Node(data);
        if(this.head === null){
            this.head = node;
        }else{
            this.tail.next = node;
        }
        this.tail = node;
    }
    printAll(){
        let current = this.head;
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }

}
let node1 = new LinkedList();
node1.add(200)
node1.add(400)
node1.add(600)
node1.printAll()