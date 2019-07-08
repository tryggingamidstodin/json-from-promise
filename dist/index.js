"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonFromPromise(fn) {
    return function (req, res, next) {
        fn(req, res, next)
            .then(res.json.bind(res))
            .catch(next);
    };
}
exports.jsonFromPromise = jsonFromPromise;
//# sourceMappingURL=index.js.map