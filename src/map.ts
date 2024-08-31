export const squared = (numbers: number[]): number[] => {
    const squaredNumbers = numbers.map(number => number * number);
    return squaredNumbers;
}