/*
PROMPT:
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

  insert(n) {
    n.idx = this.all.push(n.d) - 1; //this.all.push(n) returns array length, -1 gets the idx of the element
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

//CTCI Solution #7-- optimizied:
//Time Complexity: O (log N) to O (D) *where D is depth/height of tree

class Node {
  constructor(d, l, r, s) {
    this.data = d;
    this.left = l || null;
    this.right = r || null;
    this.size = 1;
  }
  insertInOrder(data) {
    if (data <= this.data) {
      this.left === null ? this.left = new Node(data) : this.left.insertBefore(data)
    } else {
      this.right.insertInOrder(data)
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
}

class BinaryTree {
  constructor(node) {
    this.root = node || null;
    this.size = this.root === null ? 0 : root.size();
  }
  insertInOrder(data) {
    if (this.root === null) this.root = new Node(data);
    else root.insertInOrder(data)
  }
  getRandomNode() {
    if (this.root === null) return null;
    const num = Math.random(this.size);
    return this.root.getIthNode(num);
  }
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
