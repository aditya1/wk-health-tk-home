type FrequencyMap = Map<string, number>

/**
 *
 * @param inputString input string
 * @param dictionary array of strings to match with inputString
 * @returns Array of strings, words which can be constructed using characters in input
 * string
 * This function takes in inputString and array of strings and
 * returns the array of the words which can be constructed
 * from characters in orignal string.
 * Function will create the Map of character count,
 * if the count of all the characters in a word is less than the inputString
 * then that word can be constructed.
 */
export const findWords = (
	inputString: string,
	dictionary: string[]
): string[] => {
	if (!inputString.length || !dictionary.length) return []
	const inputCharFreq = getCharFrequency(inputString)
	const words: Array<string> = []
	for (const word of dictionary) {
		const wordCharFreq = getCharFrequency(word)
		if (isWordConstructible(inputCharFreq, wordCharFreq)) {
			words.push(word)
		}
	}
	return words
}

/**
 *
 * @param inputString input string
 * @returns The frequency map of characters in string
 * This function will return the Map with char as key
 * and count of that char in the given string
 */
const getCharFrequency = (inputString: string): FrequencyMap => {
	const freq: FrequencyMap = new Map<string, number>()
	for (const char of inputString) {
		if (freq.has(char)) {
			const count = freq.get(char) as number
			freq.set(char, count + 1)
		} else {
			freq.set(char, 1)
		}
	}
	return freq
}

/**
 *
 * @param inputCharFreq character frequency map of inputString
 * @param wordCharFreq character frequency map of words in the array
 * This function will compare the character count in the fucntion with inputstring
 * If characterCount in the new word is less than or equal to the inputString then
 * function will return true.
 */
const isWordConstructible = (
	inputCharFreq: FrequencyMap,
	wordCharFreq: FrequencyMap
): boolean => {
	for (let [key, value] of wordCharFreq.entries()) {
		if (!inputCharFreq.has(key)) return false
		const charCountInput = inputCharFreq.get(key) ?? 0
		if (value > charCountInput) return false
	}
	return true
}
