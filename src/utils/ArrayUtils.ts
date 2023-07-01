export default {
	isValid <T> (arr: Array<T>): boolean {
		return !!arr && !!arr.length
	},
	isInvalid <T> (arr: Array<T>): boolean { 
		return !this.isValid(arr)
	},
	swapIdx <T> (arr: Array<T>, idx1: number, idx2: number): void {
		if (this.isInvalid(arr) ||
					idx1 < 0 || arr.length <= idx1 ||
					idx2 < 0 || arr.length <= idx2) return 

		let temp: T = arr[idx1]
		arr[idx1] = arr[idx2]
		arr[idx2] = temp
	},
	deleteIdx <T> (arr: Array<T>, idx: number): Array<T> {
		return this.isValid(arr) ?
			[ ...arr.slice(0, idx), ...arr.slice(idx+1) ] :
			arr
	},
}
