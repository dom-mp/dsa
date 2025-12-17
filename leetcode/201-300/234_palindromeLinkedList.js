// [1, 2, 3, 4, 3, 2, 1]
// [1, 2, 3, 4, 4, 3, 2, 1]
// [1, 2]
// [1, 2, 1]


function isPalindrome(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;

    while (slow) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    while (prev) {
        if (prev.val !== head.val) return false;
        prev = prev.next;
        head = head.next;
    }

    return true;
}