"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squared = void 0;
const squared = (numbers) => {
    const squaredNumbers = numbers.map(number => number * number);
    return squaredNumbers;
};
exports.squared = squared;
