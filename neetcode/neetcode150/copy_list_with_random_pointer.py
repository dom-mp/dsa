"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head == None:
            return

        prev = None
        curr = head
        hashMap = {}

        while curr:
            #copy Node
            newNode = Node(curr.val)
            hashMap[curr] = newNode

            #next
            curr = curr.next

        curr = head
        currCopy = hashMap[head]

        while curr:
            copy = hashMap[curr]

            if curr.random:
                copy.random = hashMap[curr.random]
            else:
                copy.random = None

            if curr.next:
                currCopy.next = hashMap[curr.next]
            else:    
                currCopy.next = None

            #next
            curr = curr.next
            currCopy = currCopy.next
        
        return hashMap[head]