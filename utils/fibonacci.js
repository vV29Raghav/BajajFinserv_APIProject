export function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw { code: 400, message: "fibonacci must be a non-negative integer" };
    }
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, n);
}
