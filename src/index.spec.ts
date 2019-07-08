'use strict'
import jsonFromPromise from './'
import * as express from 'express'
import * as request from 'supertest'

describe('express', () => {
  it('should respond', () => {
    const app = express()
    app.get(
      '/ping/:msg',
      jsonFromPromise(req => Promise.resolve({ pong: req.params.msg }))
    )

    return request(app)
      .get('/ping/foo')
      .expect(200, {
        pong: 'foo'
      })
  })

  it('should return 500 on error', () => {
    const app = express()
    app.get(
      '/ping/:msg',
      jsonFromPromise(() => Promise.reject(new Error('testerror')))
    )

    return request(app)
      .get('/ping/foo')
      .expect(500)
  })
})
