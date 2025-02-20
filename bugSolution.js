const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    // Error handling is done by the central error handler
    next(err);
  }
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});