const sum = (n01, n02) => n01 + n02;
const sub = (n01, n02) => n01 - n02;
const mult = (n01, n02) => n01 * n02;
const div = (n01, n02) => (n02 === 0 ? 0 : n01 / n02);

export { sum, div, sub, mult };
