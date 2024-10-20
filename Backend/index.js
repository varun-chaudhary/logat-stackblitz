const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'src/index.html'));
});

app.get('/api/data', (req, res) => {
  const data = {
      message: "Hello from the backend! varun here!",
      timestamp: new Date()
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
