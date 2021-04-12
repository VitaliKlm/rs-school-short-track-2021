const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

// first in, first out queue realisation using NodeList
class Queue {
  constructor() {
    this.prevNode = null;
    this.length = 0;
  }

  get size() {
    return `${this.length}`;
  }

  // first element whitch get in NodeList stay in the head
  // next elements will be deeper
  enqueue(element) {
    const node = new ListNode(element);
    this.length++;
    if (this.length > 1) {
      this.prevNode.next = node;
    } else {
      this.head = node;
    }
    this.prevNode = node;
  }

  // all elements come out of the head of NodeList
  // this provides better performance
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    const output = this.head.value;
    this.head = this.head.next;
    this.length--;
    return output;
  }
}

module.exports = Queue;
