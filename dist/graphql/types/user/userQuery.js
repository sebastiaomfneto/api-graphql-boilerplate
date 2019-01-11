'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.getUser = undefined;

var _graphql = require('graphql');

var _userType = require('./userType');

var _userType2 = _interopRequireDefault(_userType);

var _userResolver = require('./userResolver');

var userResolver = _interopRequireWildcard(_userResolver);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUser = exports.getUser = {
  description: 'Get User',
  type: _userType2.default,
  args: {
    id: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: userResolver.getUser
};

var getUsers = exports.getUsers = {
  description: 'Get Users',
  type: (0, _graphql.GraphQLNonNull)((0, _graphql.GraphQLList)(_userType2.default)),
  resolve: userResolver.getUsers
};