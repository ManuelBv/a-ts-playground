// @ts-nocheck
// binary tree 
// from https://www.youtube.com/watch?v=ZNH0MuQ51m4&t=3s

class Node {
  constructor(value) {
    this.value = value;
    this.left= null;
    this.right = null;
  }

  addNode(n) {
    if (n.value < this.value) {
      if (this.left === null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right === null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }

  visit() {
    if (this.left !== null) {
      this.left.visit();
    }
    console.log(this.value);
    if (this.right !== null) {
      this.right.visit();
    }
  }

  search(value) {
    if (this.value === value) {
      return this;
    } else if (value < this.value && this.left !== null) {
      return this.left.search(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.search(value);
    }
    return null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addValue(n) {
    if (this.root === null) {
      this.root = new Node(n);
    } else {
      this.root.addNode(new Node(n));
    }
  }

  traverse() {
    this.root.visit();
  }

  search(value) {
    const found = this.root.search(value);
    return found;
  }
}



const tr = new Tree();
tr.addValue(5);
tr.addValue(3);
tr.addValue(7);
tr.addValue(6);

console.clear();
console.log(tr);
tr.traverse();
console.log(tr.search(6))
