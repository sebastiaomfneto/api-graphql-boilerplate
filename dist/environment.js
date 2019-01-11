'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _process$env = process.env,
    _process$env$NODE_ENV = _process$env.NODE_ENV,
    NODE_ENV = _process$env$NODE_ENV === undefined ? 'development' : _process$env$NODE_ENV,
    _process$env$HOST = _process$env.HOST,
    HOST = _process$env$HOST === undefined ? '127.0.0.1' : _process$env$HOST,
    _process$env$PORT = _process$env.PORT,
    PORT = _process$env$PORT === undefined ? 3000 : _process$env$PORT,
    _process$env$GRAPHIQL = _process$env.GRAPHIQL,
    GRAPHIQL = _process$env$GRAPHIQL === undefined ? true : _process$env$GRAPHIQL;
exports.NODE_ENV = NODE_ENV;
exports.HOST = HOST;
exports.PORT = PORT;
exports.GRAPHIQL = GRAPHIQL;