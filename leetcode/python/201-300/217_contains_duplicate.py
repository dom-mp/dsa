from typing import List

def contains_duplicate(nums: List[int]) -> bool:
    uniq = set(nums)
    return len(uniq) == len(nums)

contains_duplicate([1,1,1,3,3,4,3,2,4,2])