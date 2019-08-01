/*
RANDOM NODE:
You are implementing a binary tree class from scratch which -- in addition to insert, find, and delete-- has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm to getRandomNode, and explain how you would implement the rest of the methods.
*/

//My solution:
//Time Complexity: O(1)

class BinaryTree {
  constructor(d, l, r) {
    this.data = d;
    this.left = null || l;
    this.right = null || r;
    this.all = [d];
    this.idx = 0;
  }

  insert(node) {
    node.idx = this.all.push(node.data) - 1; //this.all.push(node.data) returns array length, -1 gets the idx of the element
    //rest of standard insert method
  }

  delete(n) {

    if (this.all.length - 1 === n.idx) {
      this.all.pop();
    } else {
      const replacement = this.all.pop();
      this.all[n.idx] = replacement;
      replacement.idx = n.idx;
    }
    //rest of standard delete method
  }
  randomNode() {
    const idx = Math.floor((Math.random() * this.all.length));
    return this.all[idx]
  }
}

/*
CTCI Solution #7 -- optimizied:
Time Complexity: O (log N) to O (D) where D is depth/height of tree

Node -- class constructore for node data, with standard left and right properties that refer to possible other nodes.
  *size -- refers to the number of nodes that are decendent nodes, includes the node itself.

getRandomNode() -- generates a random number based on the size of the node. The size is the number of possible nodes to choose from (0 indexed). The random number is then passed to the node method getIthNode which finds a node whose size matches that random number.

getIthNode(i) -- takes a random number (i), which is a 0 - number of available nodes (exclusive), and finds the node that fits that randomly generated number.
  *leftSize -- is assigned to a number based on its size, which is used to compare to i. leftSizze provides the numbering system for the nodes to help determine finding i.
  This could have been done with the right instead of the left. What matters is it provides a numbering system to either go left, right, or current in choosing a node -- and therefore allows a randomly chosen node to be returned.

*/

class Node {
  constructor(d, l, r, s) {
    this.data = d;
    this.left = l || null;
    this.right = r || null;
    this.size = 1;
  }
  insertInOrder(data) {
    if (data <= this.data) {
      this.left === null ? this.left = new Node(data) : this.left.insertInOrder(data);
    } else {
      this.right === null ? this.right = new Node(data) : this.right.insertInOrder(data);
    }
    this.size++;
  }
  getIthNode(i) {
    const leftSize = this.left === null ? 0 : this.left.size();
    if (i < leftSize) {
      return this.left.getIthNode(i);
    }
    if (i === leftSize) {
      return this;
    }
    if (i > leftSize) {
      return this.right.getIthNode(i - (leftSize + 1));
    }
  }
  //put the find on the node makes it easier to use .left.find given that nodes are not considered trees w/ tree method.
  find(d) {
    if (this.data === d) return this;
    if (this.data >= d) {
      return this.left === null ? null : this.left.find(d);
    }
    if (this.data < d) {
      return this.right === null ? null : this.right.find(d);
    }
    return null; //in the case the d is not a valid input??
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node || null;
    this.size = this.root === null ? 0 : root.size;
  }
  insertInOrder(data) {
    if (this.root === null) this.root = new Node(data);
    else root.insertInOrder(data)
  }
  getRandomNode() {
    if (this.root === null) return null; //accounts for possibility that tree/root is empty/null
    const num = Math.random(this.size);
    return this.root.getIthNode(num);
  }

}
