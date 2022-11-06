const sortOutput = document.getElementById("sortedOutput");
const beginOutput = document.getElementById("beginOutput");
var startingArray = [];
var sortedArray = [];
var startString = "";
var outString = "";

class TreeNode {
    /*   This class holds a basic binary tree node */
    constructor (data=0) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function construct_tree() {
    // This function constructs a simple balanced binary search tree.
   
    // I added the random creation of a tree.
    // It creates a 100 node tree of numbers from 1 to 200
    // With the option of leaving out duplicate values
    var valueCount = parseInt(document.getElementById("valueCnt").value);
    var valueSize = parseInt(document.getElementById("valueSize").value);
    var value = Math.floor(Math.random()*valueSize)+1;
    startingArray.push(value);
    const root = new TreeNode(value);    
    
    for (var i=1; i<valueCount; i++) {
        value = Math.floor(Math.random()*valueSize)+1;
        startingArray.push(value);
        add_node(root, value);
    }
    return root;
}

function add_node(node, value) {
    
    if (value < node.data) {
        add_left(node, value);
    }
    else if (value == node.data) {
        value = node.data;
        // add_left(node, value); // include this line if you want duplicates in the tree.
    }
    else {
        add_right(node, value);
    }
}
    
function add_left(node, value) {
    if (node.left == null) {
        node.left = new TreeNode(value);
    }
    else {
        add_node(node.left, value);
    }
}

function add_right(node, value) {
    if (node.right == null) {
        node.right = new TreeNode(value);
    }
    else {
        add_node(node.right, value);
    }
}

function print_tree(node) {
    /*    This functions should use RECURSION to print out all the nodes of the tree IN ORDER. */
    
    if (node.left != null) {
        print_tree(node.left);
    }
    sortedArray.push(node.data);
    if (node.right != null) {
        print_tree(node.right);
    }
}

function sortRandomList() {
    startingArray = [];
    sortedArray = [];
    const treeRoot = construct_tree();
    startString = "Starting Numbers: " + startingArray.toString();
    outString = "Sorted Numbers: ";
    print_tree(treeRoot);
    outString += sortedArray.toString();
    beginOutput.textContent = startString;
    sortOutput.textContent = outString;
}

