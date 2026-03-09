class Solution:
    def isPalindrome(self, s: str) -> bool:
        allowed = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
        left = 0
        right = len(s) - 1

        while left < right:
            while left < right and s[left] not in allowed:
                left += 1

            while right > left and s[right] not in allowed:
                right -= 1

            if s[left].lower() != s[right].lower():
                return False

            left += 1
            right -= 1

        return True

