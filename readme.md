json-from-promise
=====

Example
```javascript
const app = require('express')();
const jsonFromPromise = require('json-from-promise');
app.get('/ping/:msg', jsonFromPromise(req => Promise.resolve({pong: req.params.id})));
```
