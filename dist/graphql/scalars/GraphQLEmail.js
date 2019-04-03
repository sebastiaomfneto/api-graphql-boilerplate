'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

/**
 * Método responsável por validar se o valor é um e-mail válido.
 * @param {string} value 
 */
function validateEmail(value) {
  if (typeof value !== 'string') {
    throw new _error.GraphQLError('Value must be either a String.');
  }

  if (/^\S+@\S+$/.test(ast.value) === false) {
    throw new Error('Value must be a valid email.');
  }

  return value;
}

exports.default = new _graphql.GraphQLScalarType({
  name: 'Email',
  serialize: validateEmail,
  parseValue: validateEmail,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _graphql.Kind.STRING) {
      throw new Error('Value must be either a String.');
    }

    if (/^\S+@\S+$/.test(valueNode.value) === false) {
      throw new Error('Value must be a valid email.');
    }

    return valueNode.value;
  }
});