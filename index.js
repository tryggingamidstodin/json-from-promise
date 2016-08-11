'use strict';

module.exports = function jsonFromPromise(fn) {
    return function(req, res, next) {
        fn(req, res, next).then(res.json.bind(res)).catch(next);
    };
};
