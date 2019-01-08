'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _environment = require('./environment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_express2.default.json());

_http2.default.createServer(server).listen(_environment.PORT, _environment.HOST, function () {
  return console.log('Server listening on http://' + _environment.HOST + ':' + _environment.PORT);
});