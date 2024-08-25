const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

  const lowercases = alphabets.filter(item => /^[a-z]$/.test(item));
  const highestLowercase = lowercases.length > 0 ? [lowercases.sort().pop()] : [];

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase,
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
