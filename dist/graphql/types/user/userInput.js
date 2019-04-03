'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _GraphQLEmail = require('../../scalars/GraphQLEmail');

var _GraphQLEmail2 = _interopRequireDefault(_GraphQLEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User Model Input',
  fields: function fields() {
    return {
      name: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      email: {
        type: (0, _graphql.GraphQLNonNull)(_GraphQLEmail2.default)
      },
      active: {
        type: _graphql.GraphQLBoolean
      }
    };
  }
});