class Solution:
    def is_number(self, token: str) -> bool:
        try:
            int(token)
            return True
        except ValueError:
            return False

    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for token in tokens:
            print(stack)
            if self.is_number(token):
                stack.append(int(token))
            else:
                first = stack.pop()
                second = stack.pop()
                val = None

                match token:
                    case '+':
                       val = second + first
                    case '-':
                        val = second - first
                    case '*':
                        val = second * first
                    case '/':
                        val = int(second / first)
                    
                result = val
                stack.append(val)


        return stack[-1]