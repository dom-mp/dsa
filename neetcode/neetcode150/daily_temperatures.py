class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        results = [0] * len(temperatures)
        stack = []

        for i in range(len(temperatures) -1, -1, -1):
            num = temperatures[i]

            while stack and stack[-1][0] <= num:
                stack.pop()
            
            if stack:
                results[i] = stack[-1][1] - i

            stack.append([num, i])
                
        return results