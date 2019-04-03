'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _queryType = require('./types/queryType');

var _queryType2 = _interopRequireDefault(_queryType);

var _mutationType = require('./types/mutationType');

var _mutationType2 = _interopRequireDefault(_mutationType);

var _directives = require('./directives');

var directives = _interopRequireWildcard(_directives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = new _graphql.GraphQLSchema({
  query: _queryType2.default,
  mutation: _mutationType2.default,
  directives: [].concat(_toConsumableArray(directives))
});