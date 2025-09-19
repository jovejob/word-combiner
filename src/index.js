// -------- Helper Functions --------
function preprocess(sentence) {
  // Remove trailing period and split words
  return sentence.replace(/\.$/, '').split(/\s+/).filter(Boolean);
}

function buildSentence(wordsArray) {
  // Join words with space and add period at the end
  return wordsArray.length > 0 ? wordsArray.join(' ') + '.' : '.';
}
// -------- Helper Functions --------

// Recursive Solution
export function algorithmRecursive(maxLength, sentence) {
  if (maxLength <= 0) return '.';

  const words = preprocess(sentence);
  let bestCombination = [];

  function helper(current, remainingWords) {
    for (let i = 0; i < remainingWords.length; i++) {
      const nextWord = remainingWords[i];
      const newCombo = [...current, nextWord];
      const strLength = newCombo.join(' ').length + 1; // +1 for final "."

      // skip this branch if it already exceeds maxLength
      if (strLength > maxLength) continue;

      // update bestCombination if this is a better one
      const bestLength = bestCombination.join(' ').length + 1;
      if (
        newCombo.length > bestCombination.length ||
        (newCombo.length === bestCombination.length && strLength > bestLength)
      ) {
        bestCombination = newCombo;
      }

      // recurse with remaining words (excluding current one)
      helper(
        newCombo,
        remainingWords.filter((_, idx) => idx !== i)
      );
    }
  }

  helper([], words);
  return buildSentence(bestCombination);
}

// Iterative Solution
export function algorithmIterative(maxLength, sentence) {
  if (maxLength <= 0) return '.';

  const words = preprocess(sentence);
  const result = [];
  let currentLength = 1; // account for final period

  // Sort words by length ascending to try to fit more words
  const sortedWords = [...words].sort((a, b) => a.length - b.length);

  for (const word of sortedWords) {
    // Calculate new length if we add this word
    const space = result.length > 0 ? 1 : 0; // add space if not first word
    const newLength = currentLength + space + word.length;

    // Skip word if it exceeds maxLength
    if (newLength > maxLength) continue;

    result.push(word);
    currentLength = newLength;
  }

  return buildSentence(result);
}
