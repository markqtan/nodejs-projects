const request = require('supertest');
var app = require('./app').app;
it('should return hello world response', (done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect('hello world.')
    .end(done);
})