const path = require('path');
const { PythonShell } = require('python-shell');

const modelPath = path.resolve(__dirname, '../../models/gpt4all/ggml-small.bin');
const pythonPath = path.resolve(__dirname, '../../models/gpt4all/venv/bin/python');

module.exports = {
  loadModel: () => {
    console.log(`✅ Model ready at ${modelPath}`);
    return modelPath;
  },

  generate: async (prompt) => {
    return new Promise((resolve, reject) => {
      const code = `
from gpt4all import GPT4All

model = GPT4All("${modelPath}")
output = model.generate("${prompt}", n_predict=100)
print(output)
      `;

      PythonShell.runString(
        code,
        { pythonPath, pythonOptions: ['-u'], env: process.env },
        (err, results) => {
          if (err) return reject(err);
          resolve(results.join('\n'));
        }
      );
    });
  }
};
