'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLDirective({
  name: 'DateFormat',
  description: 'Format a Date with pattern',
  args: {
    pattern: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString),
      description: 'Pattern'
    }
  },
  locations: [_graphql.DirectiveLocation.FIELD, _graphql.DirectiveLocation.FRAGMENT_SPREAD, _graphql.DirectiveLocation.INLINE_FRAGMENT]
});