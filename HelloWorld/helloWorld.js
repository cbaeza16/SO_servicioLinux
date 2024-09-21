const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Helloooo World Test!');
});

app.listen(port, () => {
  console.log(`Hello World app at http://localhost:${port}`);
});
