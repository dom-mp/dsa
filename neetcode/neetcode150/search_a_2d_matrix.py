class Solution:
    def isWithin(self, arr: List[int], target: int) -> bool:
        left = 0
        right = len(arr) - 1

        while left <= right:
            mid = math.floor((left + right) / 2)

            if target == arr[mid]:
                return True
            elif target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1

        return False

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        left = 0
        right = len(matrix) - 1

        while left <= right:
            mid = math.floor((left + right) / 2)

            if target >= matrix[mid][0] and target <= matrix[mid][-1]: # It's in this array
                return self.isWithin(matrix[mid], target)
            elif target < matrix[mid][0]:
                right = mid - 1
            else:
                left = mid + 1
            
        return False