import { gcd } from './hcf.js';

export function lcm(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(n => !Number.isInteger(n))) {
        throw { code: 400, message: "lcm must be a non-empty array of integers" };
    }
    return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
