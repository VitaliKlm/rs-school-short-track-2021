/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let prevNode = null;
  let head = l;
  let currentNode = head;
  while (currentNode) {
    if (currentNode.value === k) {
      // when remove node from the center of the NodeList
      // have to replace 'next' pointer from current to previous node
      if (prevNode) {
        prevNode.next = currentNode.next;
      } else {
        // when remove node from the top of the NodeList
        // have to remove 'head' pointer of the NodeList to next node
        head = currentNode.next;
      }
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return head;
}

module.exports = removeKFromList;
