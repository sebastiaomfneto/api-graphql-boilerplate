'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUser = exports.updateUser = exports.createUser = undefined;

var _graphql = require('graphql');

var _userType = require('./userType');

var _userType2 = _interopRequireDefault(_userType);

var _userInput = require('./userInput');

var _userInput2 = _interopRequireDefault(_userInput);

var _userResolver = require('./userResolver');

var userResolver = _interopRequireWildcard(_userResolver);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {GraphQLFieldConfig}
 */
var createUser = exports.createUser = {
  description: 'Create User',
  type: _userType2.default,
  args: {
    user: {
      type: (0, _graphql.GraphQLNonNull)(_userInput2.default)
    }
  },
  resolve: userResolver.createUser
};

/**
 * @type {GraphQLFieldConfig}
 */
var updateUser = exports.updateUser = {
  description: 'Update User',
  type: _userType2.default,
  args: {
    id: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    },
    user: {
      type: (0, _graphql.GraphQLNonNull)(_userInput2.default)
    }
  },
  resolve: userResolver.updateUser
};

/**
 * @type {GraphQLFieldConfig}
 */
var removeUser = exports.removeUser = {
  description: 'Remove User',
  type: _graphql.GraphQLBoolean,
  args: {
    id: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  },
  resolve: userResolver.removeUser
};