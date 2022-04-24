function calculate(...a) {
    return (...b) => {
        return [...a, ...b].reduce((acc, item) => acc + item);
    };
}