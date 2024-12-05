

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
    printit(){ 
        let current = this.head; // mark the head
       
        while(current != null){ // make a condation on current if not null
            console.log(current.data); // print current data
            current = current.next; // point to the next one
        }
    }
}
let linked = new LinkedList();
linked.add("Find")
linked.add("What")
linked.printit()