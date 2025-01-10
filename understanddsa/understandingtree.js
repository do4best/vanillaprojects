class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null ;
        this.left = null;

    }
}
function depthFirstTreversal(root){
    if(!root) return [];

    const stack = [];
    const result = []
    stack.push(root);
    while(stack.length > 0){
const current = stack.pop()

result.push(current.data)
if(current.right){
    stack.push(current.right)
}
if(current.left){
    stack.push(current.left)
}
    }
    return result;
}
const a = new TreeNode('A');
const b = new TreeNode('B');
const c = new TreeNode('C');
const d = new TreeNode('D');
const e = new TreeNode('E');
const f = new TreeNode('F');

a.left = b;
b.left = d;
b.right = e

a.right = c;
c.right = f;
const result = depthFirstTreversal(a)
console.log(result)
