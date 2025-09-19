import { algorithmRecursive, algorithmIterative } from '../src/index.js';

const tests = [
  { max: 10, sentence: 'Hello world.', expected: 'Hello.' },
  {
    max: 20,
    sentence: 'Hello world this is fun.',
    expected: 'Hello world this.',
  },
  { max: 5, sentence: 'Hi.', expected: 'Hi.' },
  { max: 0, sentence: 'Test sentence.', expected: '.' },
  {
    max: 50,
    sentence: 'A quick brown fox jumps over the lazy dog.',
    expected: 'A quick brown fox jumps over the lazy dog.',
  },
];

for (let { max, sentence, expected } of tests) {
  console.log('_______________________');
  console.log(`Input: ${max}, "${sentence}"`);
  console.log(
    'Recursive:',
    algorithmRecursive(max, sentence),
    'Expected:',
    expected
  );
  console.log(
    'Iterative:',
    algorithmIterative(max, sentence),
    'Expected:',
    expected
  );
}
