'use strict';

// node1 = {

//   data: 1,

//   left: node2,

//   right: node3

// }
//the search takes in a tree or head node of the tree
// which are the same thing
module.exports = function pre_order(tree) {
  //in pre order we handle the data in the current node First
  //handling the data will be a simple console.log
  console.log(tree.data);
  //first check that tree.left is not null
  //we can then recursively call pre_order again with tree.left passed in
  if(tree.left !== null) {
    pre_order(tree.left);
  }
  //same null check
  //and then pre_rder with tree.right passed in
  if(tree.right !== null) {
    pre_order(tree.right);
  }
}
//now lets call pre_order with the tree passed in.
//the output through console.log should appear as 1,2,4,5,3,6,7
