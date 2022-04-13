export default () => {
	Object.defineProperty(Array.prototype, 'last', {
		get() {
			return this[this.length - 1];
		},
	});

	Object.defineProperty(Array.prototype, 'first', {
		get() {
			return this[0];
		},
	});
};
