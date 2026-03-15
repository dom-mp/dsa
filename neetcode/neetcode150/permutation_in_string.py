class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        anchor = 0
        runner = 0
        count1 = [0] * 26
        count2 = [0] * 26
        MIN_ORD = ord('a')

        for char in s1:
            index = ord(char) - MIN_ORD
            count1[index] += 1

        while runner < len(s2):
            curr = s2[runner]
            index = ord(curr) - MIN_ORD
            count2[index] += 1

            while runner - anchor >= len(s1):
                index2 = ord(s2[anchor]) - MIN_ORD
                count2[index2] -= 1
                anchor += 1

            runner += 1
            if count1 == count2:
                return True

        return False