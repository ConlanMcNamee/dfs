module.exports = function pre_order(tree) {
  //in order, we go left, current, right

  //first check that tree.left is not null
  //we can then recursively call pre_order again with tree.left passed in
  if(tree.left !== null) {
    pre_order(tree.left);
  }
  console.log(tree.data);
  //same null check
  //and then pre_rder with tree.right passed in
  if(tree.right !== null) {
    pre_order(tree.right);
  }
}
