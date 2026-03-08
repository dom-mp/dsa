class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        colValues = {}
        squareValues = {}

        for rowI in range(len(board)):
            rowValues = []
            for colI in range(len(board[0])):
                curr = board[rowI][colI]

                if curr != '.':
                    #append to rowValues
                    rowValues.append(curr)
                    #append to colValues
                    colValues.setdefault(colI, []).append(curr)
                    #append to squareValues
                    c = colI // 3
                    r = rowI // 3
                    squareValues.setdefault(f'{r}|{c}', []).append(curr)
            
            # Check if rowValues valid
            if len(rowValues) != len(set(rowValues)):
                return False

        #Iterate through colValues to check if valid
        for value in colValues.values():
            if len(value) != len(set(value)):
                return False
        #Iterate through squareValues to check if valid
        for value in squareValues.values():
            if len(value) != len(set(value)):
                return False

        return True