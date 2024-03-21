/**
    Given an integer x, return true if x is a palindrome, and false otherwise.

    Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
    Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

    
    -- intuition --

    1 2 3 4 3 2 1
    ^           ^
    f           l
    while f != l
    check str[f] == str[l]
         ok -> f++ & l--
         !ok return false
    o(n) <- 1 loop

 */

export default function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }

    const str = x.toString()

    let f = 0
    let l = str.length - 1

    for (let n = 0; n < str.length; n++) {
        if (str[f] !== str[l]) {
            return false
        }

        f++
        l--
    }

    return true
}

// given solution
export function isPalindromeSolution(x: number): boolean {
    console.log('__________')

    if (x < 0) {
        return false
    }

    // to store the reversed integer.
    let reversed = 0
    let n = x

    // to ensure we process all digits of the input integer
    while (n > 0) {
        // takes the last digit
        // 12321 -> 1
        const digit = n % 10

        // stores it
        // 1
        reversed = reversed * 10 + digit

        // trick to remove the last digit of input
        // 123 / 10 = 123.1
        // 123.1 floor -> 123
        n = Math.floor(n / 10)

        console.log({ digit, reversed, n })
    }

    // if reversed number is same as original then it's a palindrome
    return reversed === x
}

// isPalindromeSolution(12321)
