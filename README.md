# findWords

The approach involves iterating over the input string to build a dictionary of letter counts, and then iterating over each word in the dictionary to check if it can be formed using the letters in the input string. The function returns an array containing the words that can be formed.


### Setup

Get `ts-node`
```
npm install -g ts-node
```

Run the code

```
ts-node findWords.ts
```

### Next step if there's more time
- Extract in-line tests into a separate file and setup jest
- Create a cache for repeating words, e.g `["abc". "def", "abc"]` so we don't have
to loop through it again