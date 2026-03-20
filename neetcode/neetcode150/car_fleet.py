class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        ranked = [list(x) for x in sorted(zip(position, speed), key=lambda x: x[0], reverse=True)]
        count = 0
        lastCalc = 0

        for [pos, spe] in ranked:
            leftover = target - pos
            calc = leftover / spe

            if lastCalc < calc:
                count += 1
                lastCalc = calc 

        return count