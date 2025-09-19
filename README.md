# Word Combiner

A small JavaScript project that demonstrates two approaches (recursive and iterative) to combine words from a sentence into the longest possible sequence that fits within a character limit.

---

## Project Structure

```bash
word-combiner/
│
├─ src/
│ └─ index.js # Main script with both recursive and iterative solutions
│
├─ tests/
│ └─ index.test.js # Test cases for both functions
│
├─ package.json
└─ README.md
```

---

## Description

- **Recursive Solution (`algorithmRecursive`)**: Tries all possible word combinations recursively to maximize the number of words without exceeding the character limit.
- **Iterative Solution (`algorithmIterative`)**: Greedily adds words in ascending length order to maximize the number of words within the limit.

Both solutions:

- Ignore the final period when computing lengths, but append it to the result.
- Handle empty input or `maxLength <= 0` by returning `"."`.

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/jovejob/word-combiner.git
cd word-combiner
```

2. Install dependencies (optional if using a test runner like jest):

```bash
npm install
```

(Currently, no extra dependencies are required; tests run with Node.js directly.)

## Running the Tests

Tests are located in the tests folder. Run them with:

```bash
npm test
```

or directly with Node.js:

```bash
node tests/index.test.js
```

## Usage Example

import { algorithmRecursive, algorithmIterative } from './src/index.js';

const sentence = "Hello world this is fun.";
const maxLength = 20;

console.log(algorithmRecursive(maxLength, sentence));
// Output: "Hello world this."

console.log(algorithmIterative(maxLength, sentence));
// Output: "Hello world this."

## Notes

Both functions are flexible and can handle any sentence with words separated by spaces and ending with a period.
The recursive solution guarantees the maximum number of words, while the iterative solution is greedy and may select a different order but still maximizes the number of words efficiently.
