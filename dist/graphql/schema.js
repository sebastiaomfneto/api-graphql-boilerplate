'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _queryType = require('./types/queryType');

var _queryType2 = _interopRequireDefault(_queryType);

var _mutationType = require('./types/mutationType');

var _mutationType2 = _interopRequireDefault(_mutationType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
  query: _queryType2.default,
  mutation: _mutationType2.default
});