class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left = 0
        right = len(heights) - 1
        result = 0

        while left < right:
            shortest = min(heights[right], heights[left])
            result = max(shortest * (right - left), result)

            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1

        return result
        