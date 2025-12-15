function ListNode(val) {
  this.val = val;
  this.next = null;
}

function buildLinkedList(values, pos) {
  if (values.length === 0) return null;

  let head = new ListNode(values[0]);
  let current = head;
  let cycleNode = pos === 0 ? head : null;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;

    if (i === pos) {
      cycleNode = current;
    }
  }

  if (pos !== -1) {
    current.next = cycleNode;
  }

  return head;
}


function hasCycle(head) {
    let slow = new ListNode(0);
    slow.next = head;
    let fast = head;

    while (slow.next && fast.next && fast.next.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}

const head1 = buildLinkedList([3, 2, 0, -4], 1);
console.log(hasCycle(head1)); // true

const head2 = buildLinkedList([1, 2], 0);
console.log(hasCycle(head2)); // true

const head3 = buildLinkedList([1], -1);
console.log(hasCycle(head3)); // false
