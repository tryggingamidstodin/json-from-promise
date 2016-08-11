response-with-promise
=====================

Example
```javascript
const app = require('express')();
const withPromise = require('response-with-promise');
app.get('/ping/:msg', withPromise(req => Promise.resolve('pong' + req.params.id)));
```
