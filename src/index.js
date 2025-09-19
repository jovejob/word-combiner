// Recursive Solution
export function algorithmRecursive(maxLength, sentence) {
  if (maxLength <= 0) return '.';

  // Preprocess/ split words, remove final "."
  const words = sentence.replace(/\.$/, '').split(/\s+/).filter(Boolean);

  let bestCombination = [];

  function helper(current, remainingWords) {
    for (let i = 0; i < remainingWords.length; i++) {
      const nextWord = remainingWords[i];
      const newCombo = [...current, nextWord];
      const strLength = newCombo.join(' ').length + 1; // +1 for the final "."

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
      const nextRemaining = remainingWords.filter((_, idx) => idx !== i);
      helper(newCombo, nextRemaining);
    }
  }

  helper([], words);

  return bestCombination.length > 0 ? bestCombination.join(' ') + '.' : '.';
}

export function algorithmIterative(maxLength, sentence) {
  if (maxLength <= 0) return '.';

  // Preprocess/ split words, remove final "."
  const words = sentence.replace(/\.$/, '').split(/\s+/).filter(Boolean);

  const result = [];
  let currentLength = 1; // account for the final "."

  // Sort words by length ascending to try to fit more words
  const sortedWords = [...words].sort((a, b) => a.length - b.length);

  for (const word of sortedWords) {
    // Calculate new length if we add this word
    const space = result.length > 0 ? 1 : 0; // add space only if not first word
    const newLength = currentLength + space + word.length;

    // Skip word if it exceeds maxLength
    if (newLength > maxLength) continue;

    // Add word and update currentLength
    result.push(word);
    currentLength = newLength;
  }

  // Build final sentence
  return result.length > 0 ? result.join(' ') + '.' : '.';
}
