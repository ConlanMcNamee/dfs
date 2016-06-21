module.exports = function pre_order(tree) {
  //in pre order we handle the data in the current node First
  //handling the data will be a simple console.log

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
  console.log(tree.data);
}
