// @ts-nocheck
// linked list

class LinkedList {
  constructor() {
    this.head= null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for(let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  print() {
    let output = '';
    let current = this.head;
    while(current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }

    console.log(`${output}null`)
  }

  insertAtIndex(data, index) {
    if (index === 0) {
      return this.insertAtHead(data);
    }

    let prev = this.getByIndex(index - 1);
    prev.next = new Node(data, prev.next);
    this.length++;
  }

  removeAtHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeAtHead();

    const prev = this.getByIndex(index - 1);
    prev.next = prev.next.next;
    this.length--;
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
trace.insertAtHead(44);

console.clear();
console.log(trace);
console.log('>>>', trace.getByIndex(1).value);
trace.print();

trace.insertAtIndex('BB', 2);
trace.print();
trace.insertAtIndex('CC', 2);
trace.print();
trace.removeAtHead();
trace.print();
trace.removeAtIndex(2);
trace.print();
