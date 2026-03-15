class Solution:
    def minWindow(self, s: str, t: str) -> str:
        result = ""
        tCount = {}
        sCount = {}
        runner, anchor = 0, 0

        def valid():
            for c in tCount:
                if sCount.get(c, 0) < tCount[c]:
                    return False
            return True

        for char in t:
            if tCount.get(char) == None:
                tCount[char] = 0
            tCount[char] += 1

        while runner < len(s):
            currChar = s[runner]

            if currChar in tCount:
                if sCount.get(currChar) == None:
                    sCount[currChar] = 0
                sCount[currChar] += 1

            while valid():
                window = s[anchor:runner + 1]
                if result == "" or len(window) < len(result):
                    result = window

                if s[anchor] in tCount:
                    sCount[s[anchor]] -= 1
                    if sCount[s[anchor]] == 0:
                        sCount.pop(s[anchor])

                anchor += 1

            runner += 1

        return result