const jwt =require('jsonwebtoken');

const secret='long secret';

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNTgxMTY0MzU1fQ.0wd8NdMwED-7YXNvbXFjkpgraG36dlIAfYgVfzqZTCg";

const valid =jwt.verify(token,secret);
console.log(valid);