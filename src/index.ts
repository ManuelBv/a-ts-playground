// @ts-nocheck

class LinkedList {
  constructor() {
    this.head= null;
    this.length = 0;
  }

  output() {
    console.log('hey')
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next= next;
  }
}



const trace = new LinkedList();
trace.insertAtHead(10);
trace.insertAtHead(20);


console.log(trace);
