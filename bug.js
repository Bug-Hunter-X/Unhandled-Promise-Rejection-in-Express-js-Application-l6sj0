const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling for someAsyncOperation()
    console.error('Error:', err);
    // Do not handle the error here, let it propagate
  });
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that may fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});