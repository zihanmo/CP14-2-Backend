const jwt =require('jsonwebtoken');

const secret='long secret';

const payload={
    id:1234
};

const token =jwt.sign(payload,secret);

console.log(token);