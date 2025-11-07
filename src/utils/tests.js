// Utilities for generating questions and validating answers for three test types

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function generateCharValueQuestion() {
  const idx = Math.floor(Math.random() * 26)
  const char = alphabet[idx]
  return { prompt: char, answer: String(idx + 1) }
}

export function generateOppositeCharQuestion() {
  const idx = Math.floor(Math.random() * 26)
  const char = alphabet[idx]
  const mirrorIdx = 25 - idx
  const mirror = alphabet[mirrorIdx]
  return { prompt: char, answer: mirror }
}

export function generateNumLetterQuestion() {
  const length = Math.floor(Math.random() * 4) + 3 // 3..6
  const indices = Array.from({ length }, () => Math.floor(Math.random() * 26))
  const nums = indices.map((i) => i + 1)
  const text = indices.map((i) => alphabet[i]).join('')
  return { prompt: nums.join(' '), answer: text }
}

export function getTestMeta(type) {
  switch (type) {
    case 'char-value':
      return {
        title: 'Character Value Test',
        generator: generateCharValueQuestion,
        inputPlaceholder: 'Enter the numeric value here...'
      }
    case 'opposite-char':
      return {
        title: 'Opposite Character Test',
        generator: generateOppositeCharQuestion,
        inputPlaceholder: 'Enter the mirror opposite letter...'
      }
    case 'num-letter':
      return {
        title: 'Number-Letter Mapping Test',
        generator: generateNumLetterQuestion,
        inputPlaceholder: 'Decode numbers into letters...'
      }
    default:
      return null
  }
}


