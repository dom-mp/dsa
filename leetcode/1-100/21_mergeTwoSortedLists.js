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

// Helper: convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

function mergeTwoLists(list1, list2) {
    let newHead = new ListNode(0);
    let prev = newHead;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            prev.next = list2;
            list2 = list2.next;
        } else {
            prev.next = list1;
            list1 = list1.next;
        }

        prev = prev.next;
    }

    prev.next = list1 ?? list2;

    return newHead.next;
}

const list1a = buildLinkedList([1, 2, 4]);
const list2a = buildLinkedList([1, 3, 4]);
const result1 = mergeTwoLists(list1a, list2a);
console.log(linkedListToArray(result1)); // [1,1,2,3,4,4]


const list1b = buildLinkedList([]);
const list2b = buildLinkedList([]);
const result2 = mergeTwoLists(list1b, list2b);
console.log(linkedListToArray(result2)); // []

const list1c = buildLinkedList([]);
const list2c = buildLinkedList([0]);
const result3 = mergeTwoLists(list1c, list2c);
console.log(linkedListToArray(result3)); // [0]
