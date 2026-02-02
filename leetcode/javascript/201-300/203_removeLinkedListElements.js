function removeElements(head, val) {
    let holder = new ListNode(0, head);
    let prev = holder;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }

        curr = curr.next;
    }

    return holder.next;
}