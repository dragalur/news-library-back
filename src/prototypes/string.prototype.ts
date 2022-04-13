export default () => {
	Object.defineProperty(String.prototype, 'equal', {
		value: function (anotherString) {
			return this === anotherString;
		},
	});

	Object.defineProperty(String.prototype, 'notEqual', {
		value: function (anotherString) {
			return this !== anotherString;
		},
	});
};
