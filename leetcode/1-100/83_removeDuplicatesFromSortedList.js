// [1, 1, 1, 2, 3, 3, 4]

function deleteDuplicates(head) {
    let lastVal = null;
    let holder = new ListNode(0, head);
    let prev = holder;
    let curr = head;

    while (curr) {
        if (curr.val === lastVal) {
            prev.next = curr.next;
        } else {
            lastVal = curr.val;
            prev = curr;
        }

        curr = curr.next;
    }

    return holder.next;
}