class TimeMap:

    def __init__(self):
        self.store = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = []

        self.store[key].append([value, timestamp])

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.store:
            return ''

        left = 0
        right = len(self.store[key]) - 1
        result = ""

        while left <= right:
            mid = (left + right) // 2
            currVal = self.store[key][mid][0]
            currTim = self.store[key][mid][1]

            if currTim > timestamp:
                right = mid - 1
            else:
                result = currVal
                left = mid + 1

        return result
