class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        result = nums[left]

        while left <= right:
            mid = math.floor((left + right) / 2)
            result = min(result, nums[mid])

            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
        return result
            