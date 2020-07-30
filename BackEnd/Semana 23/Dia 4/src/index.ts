class LinkedListNode {
  public value: any;
  public next: LinkedListNode | null = null;
}

class LinkedList {
  start: LinkedListNode | null = null;

  public add(value: any): void {
    const newNode = new LinkedListNode();
    newNode.value = value;

    if (this.start === null) {
      this.start = newNode;
    }

    let node = this.start;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = newNode;
  }
}

const firstNode = new LinkedListNode();
firstNode.value = 2;

const list = new LinkedList()
list.start = firstNode

list.add(9)

console.log(list)