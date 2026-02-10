// Calculate GCD
export const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// Calculate HCF of an array
export function hcf(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(n => !Number.isInteger(n))) {
        throw { code: 400, message: "hcf must be a non-empty array of integers" };
    }
    return arr.reduce((a, b) => gcd(a, b));
}
