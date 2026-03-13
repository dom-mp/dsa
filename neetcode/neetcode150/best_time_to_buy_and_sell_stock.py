class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_val = float('inf')
        result = 0

        for num in prices:
            if min_val > num:
                min_val = num
            else:
                diff = num - min_val
                result = max(result, diff)
            
        return result