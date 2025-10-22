// Write a function `reverseSegment` that reverses a segment
// of a singly linked list between two given positions,
// `start` and `end`. The function should take the head of
// the linked list and two integers, `start` and `end`, as
// input and return the modified list.

// The positions `start` and `end` are 1-indexed, and `start`
// is guaranteed to be less than or equal to `end`.

// The list is guaranteed to have at least one node, and `start`
// and `end` are guaranteed to be within the bounds of the list.

// Example:
// Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
// Output: [1, 7, 5, 3, 9]
// Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
//              is reversed to (7 -> 5 -> 3).

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

/*
Input: Head of List, start index, end index
Output: Linked List with start index val and end index val switched
1, 3, 5, 7, 9
   2.    4



*/

// function reverseSegment(head, start, end) {
//   let index = 1;
//   let node1 = null;
//   let node2 = null;
//   let curr = head;
  
//   while (curr !== null) {
//     if (index === start) {
//         node1 = curr;
//     }
//     if (index === end) {
//         node2 = curr;
//     }
//     curr = curr.next;
//     index += 1;
//   }

//   [node1.val, node2.val] = [node2.val, node1.val];

//   return head;
// }

function reverseSegment(head, start, end) {
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curr = dummy.next;
    let index = 1;

    while (curr !== null && start !== index) {
        prev = curr;
        curr = curr.next;
        index += 1;
    }

    let conn = prev;
    let tail = curr;

    while (curr !== null && end + 1 !== index) {

        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        index += 1;
    }
    // console.log(curr);
    conn.next = prev;
    tail.next = curr;
    return dummy.next;
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null