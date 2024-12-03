class Node{
    constructor(data){ // node data constructor takes data
        this.data = data;// parameter is set
        this.next = null; // another loca
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
    get(data){
        let current = this.head;
        let i = 0;
        while(i < data){
            current = current.next;
            i++;
        }
        return current.data;
    }
    insertAdd(index,data){
        if(index === 0){
            let node = new Node(data);
            node.next = this.head;
            this.head = node;
        }else{
            let current = this.head;
            let previous = null;
            let i = 0;
            while( i < index){
                previous = current;
                current = current.next;
                i++
            }
            const node = new Node(data)
            node.next = current;
            previous.next = node;
            
        }
    }
    printAll(){
        let current = this.head;
        while(current != null){
            console.log(current.data)
        current = current.next;}
    }
}
let linked = new LinkedList();
linked.add("Hello")
linked.add("World")
linked.printAll()
console.log(linked.get(0))
linked.insertAdd(0,"Again")
linked.printAll()