// server.js

const http = require('http');
const calculator = require('./calculator');

const server = http.createServer((req, res) => {
  // được sử dụng để lấy các tham số được truyền từ form HTML khi người dùng submit form.
  const { query } = require('url').parse(req.url, true);

  const { num1, num2, op } = query;
  let result;
  switch (op) {
    case 'add':
      result = calculator.add(Number(num1), Number(num2));
      break;
    case 'subtract':
      result = calculator.subtract(Number(num1), Number(num2));
      break;
    case 'multiply':
      result = calculator.multiply(Number(num1), Number(num2));
      break;
    default:
      result = 'Invalid operation';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Result: ${result}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
