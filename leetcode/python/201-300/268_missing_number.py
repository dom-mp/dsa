from typing import List

def missing_number(nums: List[int]) -> int:
    uniqs = set(nums)

    for num in range(len(nums) + 1):
        if num not in uniqs:
            return num