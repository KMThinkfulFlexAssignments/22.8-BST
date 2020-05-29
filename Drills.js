'use strict';
const BinarySearchTree = require('./BST');
//1. Draw a BST
// Draw.io (https://drive.google.com/file/d/1CwS1kAqP9aokuRDiOHAgMHH80zM1xRAz/view?usp=sharing)

//2. Remove the root
//Draw.io (https://drive.google.com/file/d/1CwS1kAqP9aokuRDiOHAgMHH80zM1xRAz/view?usp=sharing)

//3.  Create a BST class
function numberBST() {
  let numberTree = new BinarySearchTree;
  numberTree.insert(3, 3);
  numberTree.insert(1, 1);
  numberTree.insert(4, 4);
  numberTree.insert(6, 6);
  numberTree.insert(9, 9);
  numberTree.insert(2, 2);
  numberTree.insert(5, 5);
  numberTree.insert(7, 7);
  
  return numberTree;
}
//console.log(numberBST());

function letterBST() {
  let letterTree = new BinarySearchTree;
  letterTree.insert('E', 'E');
  letterTree.insert('A', 'A');
  letterTree.insert('S', 'S');
  letterTree.insert('Y', 'Y');
  letterTree.insert('Q', 'Q');
  letterTree.insert('U', 'U');
  letterTree.insert('E', 'E');
  letterTree.insert('S', 'S');
  letterTree.insert('T', 'T');
  letterTree.insert('I', 'I');
  letterTree.insert('O', 'O');
  letterTree.insert('N', 'N');

  return letterTree;
}
//console.log(letterBST());

//4. What does this program do?
/*
Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
*/
//Answer: This program sums the value of each node in the tree.

//5. Height of a BST
function treeHeight(tree) {
  //check if tree is empty
  if(tree === null) {
    return 0;
  } 
  //check if tree is just a root
  else if(tree.left === null && tree.right === null) {
    return 1;
  }
  //check the left side
  let leftHeight = treeHeight(tree.left);
  //check the right side
  let rightHeight = treeHeight(tree.right);
  //return greater between leftHeight and rightHeight
  if(leftHeight > rightHeight) {
    return leftHeight + 1;
  } return rightHeight + 1;
}
//console.log(treeHeight(numberBST()));
//console.log(treeHeight(letterBST()));

//6. Is it a BST?
function isThisABST(tree) {
  if(!tree) {
    return false;
  }
  if(tree.value && (!tree.left && !tree.right)) {
    return true;
  }
  if(tree.left) {
    if(tree.left.key < tree.key) {
      isThisABST(tree.left);
    } else {
      return false;
    }
  }
  if(tree.right) {
    if(tree.right.key > tree.key) {
      isThisABST(tree.right);
    } else {
      return false;
    }
  }
  return true;
}


function badTree() {
  let invalidTree = new BinarySearchTree;
  invalidTree.insert(1, 1);
  invalidTree.insert(2, 2);
  invalidTree.insert(3, 3);

  return invalidTree;
}

//console.log(isThisABST(new BinarySearchTree));
//console.log(isThisABST(numberBST()));
//console.log(isThisABST(badTree()));

//7. 3rd largest node
function thirdLargest(tree) {
  let current = tree;
  let largest;
  let count = 0;

  while(current) {
    if(!current.right) {
      if(++count === 3 ) {
        largest = current;
      }
      current = current.left;
    } else {
      let next = current.right;
      while(next.left && next.left !== current) {
        next = next.left;
      }
      if(next.left === null) {
        next.left = current;
        current = current.right;
      } else {
        next.left === null;
        if(++count === 3) {
          largest = current;
        }
        current = current.left;
      }
    }
  }
  return largest;
}
//console.log(thirdLargest(numberBST()));

//8. Balanced BST
function shortestBranch(tree) {
  if(!tree) {
    return 0;
  } else {
    return Math.min(shortestBranch(tree.right), shortestBranch(tree.left)) + 1;
  }
}

function longestBranch(tree) {
  if(!tree) {
    return 0;
  } else {
    return Math.max(longestBranch(tree.right), longestBranch(tree.left)) + 1;
  }
}

function isBalanced(tree) {
  let shortest = shortestBranch(tree);
  let longest = longestBranch(tree);

  if (longest - shortest > 1) {
    return false;
  } else {
    return true;
  }
}

const balancedTree = new BinarySearchTree;
balancedTree.insert(5, 5);
balancedTree.insert(4, 4);
balancedTree.insert(6, 6);

//console.log(isBalanced(numberBST()));
//console.log(isBalanced(balancedTree));

//9. Are they the same BSTs?
function matchingBST(arry1, arry2) {
  if(arry1.length !== arry2.length) {
    return false;
  }
  for(let i = 0; i < arry1.length; i++) {
    if(arry1.sort()[i] !== arry2.sort()[i]) {
      return false;
    }
  } return true;
}
let testArry1 = [3, 5, 4, 6, 1, 0, 2];
let testArry2 = [3, 1, 5, 2, 4, 6, 0];
let testArry3 = [3, 1, 9, 2, 4, 6, 3];
console.log(matchingBST(testArry1, testArry2));
console.log(matchingBST(testArry1, testArry3));