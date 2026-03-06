class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(0, len(nums) + 1)]
        
        for num in nums:
            count[num] = count.get(num, 0) + 1

        for num, index in count.items():
            freq[index].append(num)

        results = []
        count = 0

        for i in range(len(freq) - 1, -1, -1):
            if len(freq[i]) > 0:
                while len(freq[i]) > 0:
                    num = freq[i].pop()
                    results.append(num)
                    count += 1

                    if count == k:
                        break
            if count == k:
                break
        
        return results