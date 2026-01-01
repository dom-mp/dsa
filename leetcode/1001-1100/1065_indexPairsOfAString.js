// NEVER TESTED. I don't have access to this problem.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

function createTrie(words) {
    const root = new TrieNode();

    for (let i = 0; i < words.length; i += 1) {
        let word = words[i];
        let node = root;

        for (let ii = 0; ii < word.length; ii += 1) {
            let char = word[ii];

            if (node.children[char] === undefined) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEnd = true;
    }

    return root;
}

function indexPairs(text, words) {
    const trie = createTrie(words);
    let results = [];

    for (let i = 0; i < text.length; i += 1) {
        let ii = i;
        let node = trie;

        while (node.children[text[ii]]) {
            node = node.children[text[ii]];

            if (node.isEnd) {
                results.push([i, ii]);
            }

            ii++;
        }
    }

    return results;
}

console.log(indexPairs("thestoryofleetcodeandme", ["story","fleet","leetcode"])); // [[3,7],[9,13],[10,17]]
console.log(indexPairs("ababa", ["aba","ab"])); // [[0,1],[0,2],[2,3],[2,4]]
