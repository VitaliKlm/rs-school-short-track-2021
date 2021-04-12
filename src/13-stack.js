/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
    this.lastElementIndex = -1;
    this.isUndefined = () => (this.lastElementIndex === -1 ? undefined : '');
  }

  push(element) {
    this.stack.splice(this.lastElementIndex + 1, 0, element);
    this.lastElementIndex++;
  }

  pop() {
    this.isUndefined();
    this.lastElementIndex--;
    return this.stack.splice(this.lastElementIndex + 1, 1)[0];
  }

  peek() {
    this.isUndefined();
    return this.stack[this.lastElementIndex];
  }
}

module.exports = Stack;
