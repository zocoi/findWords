type Dictionary = Record<string, number>;

function findWords(inputString: string, dictionary: string[]): string[] {
  // Create a dictionary of input string
  // with key as the letter and value as the count of each letter
  const inputDict: Dictionary = {};
  for (const letter of inputString) {
    inputDict[letter] ||= 0;
    inputDict[letter] += 1;
  }

  // Filter dictionary to find words that can be formed
  const foundWords = dictionary.filter((word) => findWord(inputDict, word));
  return foundWords;
}

function findWord(dictionary: Dictionary, word: string): boolean {
  const dictCopy = { ...dictionary };
  for (const letter of word) {
    // If letter is not present in dictionary, return false
    if (!dictCopy[letter]) {
      return false;
    } else {
      dictCopy[letter] -= 1;
      // If there are more letters in word than in dictionary, return false
      if (dictCopy[letter] < 0) {
        return false;
      }
    }
  }
  return true;
}

// NOTE: console.assert only prints message if the test fails.
// When all tests pass, nothing is printed.

// Test 1:
const inputString1 = "atepl";
const dictionary1 = ["apple", "plate", "late", "eat", "tea", "pale"];
const expectedOutput1 = ["plate", "late", "eat", "tea", "pale"];
const foundWords1 = findWords(inputString1, dictionary1);
console.assert(
  JSON.stringify(foundWords1) === JSON.stringify(expectedOutput1),
  `Test 1 failed. Expected: ${expectedOutput1}, Actual: ${foundWords1}`
);

// Test 2:
const inputString2 = "ate";
const dictionary2 = [
  "ate",
  "eat",
  "tea",
  "dog",
  "do",
  "god",
  "goo",
  "go",
  "good",
];
const expectedOutput2 = ["ate", "eat", "tea"];
const foundWords2 = findWords(inputString2, dictionary2);
console.assert(
  JSON.stringify(foundWords2) === JSON.stringify(expectedOutput2),
  `Test 2 failed. Expected: ${expectedOutput2}, Actual: ${foundWords2}`
);

// Test 3:
const inputString3 = "oogd";
const dictionary3 = [
  "ate",
  "eat",
  "tea",
  "dog",
  "do",
  "god",
  "goo",
  "go",
  "good",
];
const expectedOutput3 = ["dog", "do", "god", "goo", "go", "good"];
const foundWords3 = findWords(inputString3, dictionary3);
console.assert(
  JSON.stringify(foundWords3) === JSON.stringify(expectedOutput3),
  `Test 3 failed. Expected: ${expectedOutput3}, Actual: ${foundWords3}`
);

// Test 4: Test with input string containing a single character
const inputString4 = "a";
const dictionary4 = ["a", "aa", "b", "ab"];
const expectedOutput4 = ["a"];
const foundWords4 = findWords(inputString4, dictionary4);
console.assert(
  JSON.stringify(foundWords4) === JSON.stringify(expectedOutput4),
  `Test 4 failed. Expected: ${expectedOutput4}, Actual: ${foundWords4}`
);

// Test 5: Test with empty input string
const inputString5 = "";
const dictionary5 = ["a", "aa", "b", "ab"];
const expectedOutput5: string[] = [];
const foundWords5 = findWords(inputString5, dictionary5);
console.assert(
  JSON.stringify(foundWords5) === JSON.stringify(expectedOutput5),
  `Test 5 failed. Expected: ${expectedOutput5}, Actual: ${foundWords5}`
);

// Test 6: Test with empty dictionary
const inputString6 = "abc";
const dictionary6: string[] = [];
const expectedOutput6: string[] = [];
const foundWords6 = findWords(inputString6, dictionary6);
console.assert(
  JSON.stringify(foundWords6) === JSON.stringify(expectedOutput6),
  `Test 6 failed. Expected: ${expectedOutput6}, Actual: ${foundWords6}`
);

// Test 7: Test with repeated letters in input string
const inputString7 = "att";
const dictionary7 = ["tat", "tata", "at", "ta", "tt"];
const expectedOutput7 = ["tat", "at", "ta", "tt"];
const foundWords7 = findWords(inputString7, dictionary7);
console.assert(
  JSON.stringify(foundWords7) === JSON.stringify(expectedOutput7),
  `Test 7 failed. Expected: ${expectedOutput7}, Actual: ${foundWords7}`
);

// Test 8: Test with repeated letters in dictionary words
const inputString8 = "att";
const dictionary8 = ["tat", "tata", "at", "ta", "ttt"];
const expectedOutput8 = ["tat", "at", "ta"];
const foundWords8 = findWords(inputString8, dictionary8);
console.assert(
  JSON.stringify(foundWords8) === JSON.stringify(expectedOutput8),
  `Test 8 failed. Expected: ${expectedOutput8}, Actual: ${foundWords8}`
);

// Test 9: Test with case sensitivity
const inputString9 = "Ate";
const dictionary9 = ["Ate", "ate", "Tea", "TEA"];
const expectedOutput9 = ["Ate"];
const foundWords9 = findWords(inputString9, dictionary9);
console.assert(
  JSON.stringify(foundWords9) === JSON.stringify(expectedOutput9),
  `Test 9 failed. Expected: ${expectedOutput9}, Actual: ${foundWords9}`
);

// Test 10: Test with Unicode characters
const inputString10 = "é";
const dictionary10 = ["é", "e", "ee"];
const expectedOutput10 = ["é"];
const foundWords10 = findWords(inputString10, dictionary10);
console.assert(
  JSON.stringify(foundWords10) === JSON.stringify(expectedOutput10),
  `Test 10 failed. Expected: ${expectedOutput10}, Actual: ${foundWords10}`
);
