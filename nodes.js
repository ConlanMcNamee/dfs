var node1 = {
  //each node has some data we can acess
  data: 1
}
var node2 = {
  data: 2
}
var node3 = {
  data: 3
}
var node4 = {
  data: 4
}
var node5 = {
  data: 5
}
var node6 = {
  data: 6
}
var node7 = {
  data: 7
}
//link all the nodes in a tree
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node4.right = null;
node5.right = null;
node6.right = null;
node7.right = null;
node4.left = null;
node5.left = null;
node6.left = null;
node7.left = null;
//tree would appear as below n is a node

/*
            n1
      n2            n3
  n4      n5    n6      n7

*/


module.exports = {
  node1: node1,
  node2: node2,
  node3: node3,
  node4: node4,
  node5: node5,
  node6: node6,
  node7: node7
}
