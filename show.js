//create a tree
var nodes = require('./nodes.js')
//have to create all the nodes so they link properly
var node1 = nodes.node1;
var node2 = nodes.node2;
var node3 = nodes.node3;
var node4 = nodes.node4;
var node5 = nodes.node5;
var node6 = nodes.node6;
var node7 = nodes.node7;

//appears likes this
/*
            n1
        /      \
     n2          n3
    /   \       /   \
  n4     n5   n6    n7
*/

var pre_order = require('./pre_order.js');
var in_order = require('./in_order.js');
var post_order = require('./post_order.js');

//pre order
console.log('pre order: ')
pre_order(node1);
console.log('in order: ')
in_order(node1);
console.log('post order: ')
post_order(node1);
