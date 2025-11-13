const express = require('express');
const router = express.Router();
const model = require('../ai/modelLoader');

// GET endpoint just to test
router.get('/', (req, res) => {
  res.send('Project Aftan AI endpoint is alive! Send POST requests to generate content.');
});

// POST endpoint for actual generation
router.post('/', async (req, res) => {
  const { prompt } = req.body;
  try {
    const output = await model.generate(prompt);
    res.json({ result: output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

module.exports = router;
