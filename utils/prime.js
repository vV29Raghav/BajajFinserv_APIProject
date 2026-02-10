function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export function primes(arr) {
    if (!Array.isArray(arr) || arr.some(n => !Number.isInteger(n))) {
        throw { code: 400, message: "prime must be an array of integers" };
    }
    return arr.filter(isPrime);
}
