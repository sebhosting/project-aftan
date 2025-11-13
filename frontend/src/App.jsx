import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generateContent = async () => {
    try {
      const res = await axios.post('http://localhost:3001/generate', { prompt });
      setResult(res.data.result);
    } catch (err) {
      setResult('Error generating content');
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Project Aftan Dashboard</h1>
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter a prompt" 
        className="border p-2 mr-2"
      />
      <button onClick={generateContent} className="bg-blue-600 text-white px-4 py-2 rounded">Generate</button>
      <div className="mt-4 p-4 border rounded">{result}</div>
      <Dashboard />
    </div>
  );
}

export default App;
