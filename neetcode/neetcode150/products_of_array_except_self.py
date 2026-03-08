class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = [1]
        suffix = [1]

        for num in nums:
            last = prefix[len(prefix) - 1]
            prefix.append(last * num)

            if len(prefix) >= len(nums):
                break
        
        for i in range(len(nums) - 1, -1, -1):
            curr = nums[i]
            peak = suffix[0]

            suffix.insert(0, curr * peak)

            if len(suffix) >= len(nums):
                break

        results = []

        for i in range(len(prefix)):
            num1 = prefix[i]
            num2 = suffix[i]

            results.append(num1 * num2)

        return results
# [1, 2, 4, 6]

# [1, 1, 2, 8]
# [48, 24, 6, 1]

# [48, 24, 12, 8]