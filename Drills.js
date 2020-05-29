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
console.log(numberBST());

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
console.log(letterBST());

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

//6. Is it a BST?

//7. 3rd largest node

//8. Balanced BST

//9. Are they the same BSTs?