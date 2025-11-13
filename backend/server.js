const express = require('express');
const cors = require('cors');
const generateRoute = require('./routes/generate');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/generate', generateRoute);

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
