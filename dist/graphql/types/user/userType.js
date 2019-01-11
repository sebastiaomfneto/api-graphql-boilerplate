'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _userInput = require('./userInput');

var _userInput2 = _interopRequireDefault(_userInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
  name: 'User',
  description: 'User Model',
  fields: function fields() {
    return _extends({
      id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      }
    }, _userInput2.default.getFields());
  }
});