'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userConnection = undefined;

var _graphqlRelay = require('graphql-relay');

var _userType = require('./userType');

var _userType2 = _interopRequireDefault(_userType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _connectionDefinition = (0, _graphqlRelay.connectionDefinitions)({ nodeType: _userType2.default }),
    userConnection = _connectionDefinition.connectionType;

exports.userConnection = userConnection;