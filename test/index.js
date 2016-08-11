'use strict';
const jsonFromPromise = require('../');
const express = require('express');
const request = require('supertest');

describe('express', function() {
    it('should respond', function(done) {
        const app = express();
        app.get('/ping/:msg', jsonFromPromise(req => Promise.resolve({pong: req.params.msg})));
        request(app)
            .get('/ping/foo')
            .expect(200, {
                pong: 'foo'
            }, done);
    });
    it('should return 500 on error', function(done) {
        const app = express();
        app.get('/ping/:msg', jsonFromPromise(() => Promise.reject(new Error('testerror'))));
        request(app)
            .get('/ping/foo')
            .expect(500, done);
    });
});
