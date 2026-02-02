// Node definition
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Helper: build linked list from array
function buildLinkedList(values) {
  if (values.length === 0) return null;

  let head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

// Helper: convert linked list back to array
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

/*
Prev = 0
Curr = 1
Next = 2

null  1->2->3->4->5->null
p     c  n

null<-1  2->3->4->5->null
      p  c  n

null<-1<-2--3--4--5--null
            c
         p



*/

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const head1 = buildLinkedList([1, 2, 3, 4, 5]);
const result1 = reverseList(head1);
console.log(linkedListToArray(result1)); // [5,4,3,2,1]

const head2 = buildLinkedList([1, 2]);
const result2 = reverseList(head2);
console.log(linkedListToArray(result2)); // [2,1]

const head3 = buildLinkedList([]);
const result3 = reverseList(head3);
console.log(linkedListToArray(result3)); // []
