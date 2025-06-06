const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Retail & Logistics Web Platform - Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});