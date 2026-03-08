class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(set(nums)) == 1:
            return 1

        theSet = set(nums)
        results = 0

        for num in theSet:
            prev = num - 1
            count = num
            counter = 1
            
            if prev not in theSet:
                continue
            
            while num in theSet:
                num += 1
                counter += 1

            results = max(counter, results)

        return results