# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        count = 0
        curr = head

        #Figure out size of linked list
        while curr:
            curr = curr.next
            count += 1

        if count == n:
            return head.next

        index = count - n
        count = 0
        curr = head
        prev = None

        # iterate and remove that node
        while count != index:
            count += 1
            
            prev = curr
            curr = curr.next

            if count == index:
                prev.next = curr.next

        return head