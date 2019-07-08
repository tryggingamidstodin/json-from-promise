json-from-promise
=====
Small Express connect-middlewere that sends json-response from your promise and  errors with next. 

## Examples

### CommonJS
```javascript
const jsonFromPromise = require('json-from-promise').jsonFromPromise
app.get('/ping/:id', jsonFromPromise(function(req) {
  const id = req.params.id
  return Promise.resolve({
    pong: id
  })  
```

### ES6
```javascript
import { jsonFromPromise } from 'json-from-promise'
app.get('/ping/:id', jsonFromPromise(req => Promise.resolve({
  pong: req.params.id
})  
```

Note that you should (always) have a error-handler at the end of your application. If you don't you will get a unhandle promise rejection.