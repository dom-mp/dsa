function middleNode(head) {
    let slow = new ListNode(0);
    slow.next = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return fast.next ? slow.next.next : slow.next;
}