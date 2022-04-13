export default () => {
    Object.defineProperty(Number.prototype, 'isPositive', {
        get() {
            return this > 0;
        },
    });
};
