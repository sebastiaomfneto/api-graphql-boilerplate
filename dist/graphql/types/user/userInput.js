'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User Model Input',
  fields: function fields() {
    return {
      name: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      email: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      active: {
        type: _graphql.GraphQLBoolean
      }
    };
  }
});