def minimizeResult(expression):
    minValue = float('inf')
    result = ''
    [left, right] = expression.split("+")
    
    for num1 in range(0, len(left)):
        for num2 in range(0, len(right)):
            express = f"{left[:num1]}({left[num1:]}+{right[:num2+1]}){right[num2+1:]}"
            leftOfP = 1 if left[:num1] == '' else int(left[:num1])
            rightOfP = 1 if right[num2+1:] == '' else int(right[num2+1:])
            value = (int(left[num1:]) + int(right[:num2+1])) * leftOfP * rightOfP

            if min(minValue, value) == value:
                result = express
                minValue = value

    return result

test_cases = [
    ("247+38", "2(47+38)"),
    ("12+34", "1(2+3)4"),
    ("999+999", "(999+999)")
]

for expr, expected in test_cases:
    result = minimizeResult(expr)
    print(
        f"Input: {expr}\n"
        f"Expected: {expected}\n"
        f"Got:      {result}\n"
        f"Correct:  {result == expected}\n"
    )

