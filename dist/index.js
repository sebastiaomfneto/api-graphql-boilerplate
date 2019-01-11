'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _environment = require('./environment');

var _schema = require('./graphql/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_express2.default.json());

server.use('/graphql', (0, _expressGraphql2.default)({
  graphiql: _environment.GRAPHIQL,
  schema: _schema2.default
}));

_http2.default.createServer(server).listen(_environment.PORT, _environment.HOST, function () {
  return console.log('Server listening on http://' + _environment.HOST + ':' + _environment.PORT);
});