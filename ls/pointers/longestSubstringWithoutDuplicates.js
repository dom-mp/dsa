// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

/*
Input: string
return: number, count

examples:
helloworld
hel
low
world

variables:
longest = 0
count = new Map();

- We can keep a history of the index:
{
h: 0
e: 1
l: 2
l: 3
}

- If the current character, l: 3 in this case, is seen (included in the map/hash)
    - We restart the count from the last seen (l: 2, + 1)
    - if current length/size of Map is > longest, then we assign longest to current map.length/size
    - Everytime we restart we start the map as new


*/

function longestSubstringLength(string) {
  let count = new Map();
  let longest = 0;

  for (let i = 0; i < string.length; i += 1) {
    let curr = string[i];

    if (count.has(curr)) {
        let lastIndex = count.get(curr);

        longest = longest > count.size ? longest : count.size;

        i = lastIndex;
        count = new Map();
    } else {
        count.set(curr, i);
    }
  }

  longest = longest > count.size ? longest : count.size;
  return longest;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);