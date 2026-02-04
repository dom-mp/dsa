from typing import List

def find_disappeared_numbers(nums: List[int]) -> List[int]:
    uniq = set(nums)
    results = []

    for num in range(1, len(nums) + 1):
        if num not in uniq:
            results.append(num)

    return results