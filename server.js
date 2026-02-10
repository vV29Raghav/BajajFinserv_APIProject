import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import bfhlRoutes from './routes/bfhl.js';
import healthRoutes from './routes/health.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoutes);
app.use('/health', healthRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

