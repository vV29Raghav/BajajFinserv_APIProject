import { fibonacci } from '../utils/fibonacci.js';
import { primes } from '../utils/prime.js';
import { hcf } from '../utils/hcf.js';
import { lcm } from '../utils/lcm.js';
import { callAI } from '../utils/ai.js';


const officialEmail = process.env.OFFICIAL_EMAIL;

export async function handleBFHL(req, res) {
    const body = req.body;

    try {
        if (!body || Object.keys(body).length !== 1) throw { code: 400, message: "Request must contain exactly one key" };

        const key = Object.keys(body)[0];
        let data;

        switch (key) {
            case 'fibonacci': data = fibonacci(body.fibonacci); break;
            case 'prime': data = primes(body.prime); break;
            case 'hcf': data = hcf(body.hcf); break;
            case 'lcm': data = lcm(body.lcm); break;
            case 'AI':
                if (typeof body.AI !== 'string') throw { code: 400, message: "AI input must be a string" };
                data = await callAI(body.AI);
                break;
            default: throw { code: 400, message: "Invalid key. Allowed keys: fibonacci, prime, hcf, lcm, AI" };
        }

        res.json({ is_success: true, official_email: process.env.OFFICIAL_EMAIL, data });

    } catch (err) {
        let status = err.code || 500;
        res.status(status).json({ is_success: false, official_email: process.env.OFFICIAL_EMAIL, error: err.message || "Internal Server Error" });
    }
}
