const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/user-info', (req, res) => {
  exec('node fetch_video_state.js', { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch user info' });
      return;
    }
    try {
      const data = JSON.parse(stdout);
      res.json(data);
    } catch (e) {
      res.status(500).json({ error: 'Invalid JSON output' });
    }
  });
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 