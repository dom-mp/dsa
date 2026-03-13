class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        anchor = 0
        runner = 0
        unique = set()

        while runner < len(s):
            while s[runner] in unique:
                unique.remove(s[anchor])
                anchor += 1

            unique.add(s[runner])
            result = max(result, len(unique))
            runner += 1

        return result