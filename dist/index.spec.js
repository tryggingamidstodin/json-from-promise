'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const express = require("express");
const request = require("supertest");
describe('express', () => {
    it('should respond', () => {
        const app = express();
        app.get('/ping/:msg', _1.jsonFromPromise(req => Promise.resolve({ pong: req.params.msg })));
        return request(app)
            .get('/ping/foo')
            .expect(200, {
            pong: 'foo'
        });
    });
    it('should return 500 on error', () => {
        const app = express();
        app.get('/ping/:msg', _1.jsonFromPromise(() => Promise.reject(new Error('testerror'))));
        return request(app)
            .get('/ping/foo')
            .expect(500);
    });
});
//# sourceMappingURL=index.spec.js.map