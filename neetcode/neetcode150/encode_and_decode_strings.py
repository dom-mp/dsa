class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ''

        for string in strs:
            result += (f'{len(string)}#{string}')
        
        return result
            
    def decode(self, s: str) -> List[str]:
        results = []    
        i = 0

        while len(s) > i:
            length = ''
            while s[i] != '#':
                length += s[i]
                i += 1
            
            length = int(length)
            # Skip over delimiter
            i += 1
            results.append(s[i:i + length])
            i = i + length

        return results
