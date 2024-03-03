import { findWords } from './src/find-words'

console.log(
	'Test case 1',
	findWords('ate', [
		'ate',
		'eat',
		'tea',
		'dog',
		'do',
		'god',
		'goo',
		'go',
		'good',
	])
)

console.log(
	'Test case 2',
	findWords('oogd', [
		'ate',
		'eat',
		'tea',
		'dog',
		'do',
		'god',
		'goo',
		'go',
		'good',
	])
)

console.log('Test case 3', findWords('ab', ['aabb', 'aa', 'aaa', 'bbb', 'bb']))

console.log('Test case 4', findWords('', ['ab', 'abc']))

console.log('Test case 5', findWords('abc', []))
