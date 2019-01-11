'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _modelResolver = require('./modelResolver');

var _modelResolver2 = _interopRequireDefault(_modelResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInterfaceType({
  name: 'Model',
  description: 'Model Interface',
  fields: function fields() {
    return {
      id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      }
    };
  },
  resolveType: _modelResolver2.default
});