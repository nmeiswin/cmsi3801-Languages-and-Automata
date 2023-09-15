class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBalanced(root) {
    // Helper function to calculate the height of a subtree
    function getHeight(node) {
      if (node === null) {
        return 0;
      }
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    // Helper function to check balance recursively
    function checkBalance(node) {
      if (node === null) {
        return true;
      }
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
  
      // Check if the heights of the left and right subtrees differ by more than one
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }
  
      // Recursively check the balance of left and right subtrees
      return checkBalance(node.left) && checkBalance(node.right);
    }
  
    return checkBalance(root);
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(6);
  
  console.log(isBalanced(root));