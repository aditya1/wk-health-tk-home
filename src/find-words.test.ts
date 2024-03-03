import { findWords } from './find-words'

describe('findWords', () => {
	it('returns empty array if no words cannot be consturcted', () => {
		const words = findWords('ate', ['go'])
		expect(words).toEqual([])
	})

	it('returns all the words which can be constructed a,t,e', () => {
		const words = findWords('ate', [
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
		expect(words).toEqual(['ate', 'eat', 'tea'])
	})
	it('returns all the words can contructed using good', () => {
		const words = findWords('oogd', [
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
		expect(words).toEqual(['dog', 'do', 'god', 'goo', 'go', 'good'])
	})
	it('returns empty array if repeated chars doesnt match', () => {
		const words = findWords('ab', ['aa', 'bb', 'aabb', 'aab', 'aba', 'bba'])
		expect(words).toEqual([])
	})
})
