class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        anchor = 0
        runner = 0
        result = 0

        while runner < len(s):
            char = s[runner]

            if count.get(char) == None:
                count[char] = 0
            
            count[char] += 1

            highestCount = max(count.values())

            while runner - anchor + 1 - highestCount > k:
                count[s[anchor]] -= 1
                highestCount = max(count.values())
                anchor += 1

            result = max(result, runner - anchor + 1)
            runner += 1

        return result