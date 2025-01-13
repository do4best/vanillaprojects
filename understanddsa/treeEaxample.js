class Node{
    constructor(head){
        this.head = head;
        this.right = null;
        this.left = null;
    }
}
let nodeA = new Node("A")
let nodeB = new Node("B")
let nodeC = new Node("C")
let nodeD = new Node("D")
let nodeE = new Node("E")

nodeB.right = nodeC
nodeB.left = nodeD
nodeD.right= nodeE

console.log(nodeD)