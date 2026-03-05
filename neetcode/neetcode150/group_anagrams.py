class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        results = {}

        for wordIndex in range(0, len(strs)):
            word = strs[wordIndex]
            count = [0] * 26;

            for letterIndex in range(0, len(word)):
                index = ord(word[letterIndex]) - ord('a')
                count[index] += 1

            joinedStr = ','.join([str(num) for num in count])
            if joinedStr not in results:
                results[joinedStr] = []

            results[joinedStr].append(word)

        return list(results.values())