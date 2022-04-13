export default () => {
	Object.defineProperty(Object.prototype, 'isEmpty', {
		value: function (object) {
			return Object.keys(object).length === 0;
		},
	});

	Object.defineProperty(Object.prototype, 'isNotEmpty', {
		value: function (object) {
			return Object.keys(object).length !== 0;
		},
	});
};
