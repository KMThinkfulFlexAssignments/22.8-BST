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
console.log(thirdLargest(numberBST()));

//8. Balanced BST

//9. Are they the same BSTs?