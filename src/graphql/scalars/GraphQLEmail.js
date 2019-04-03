import { GraphQLScalarType, Kind } from 'graphql';
import { GraphQLError } from 'graphql/error';

/**
 * Método responsável por validar se o valor é um e-mail válido.
 * @param {string} value 
 */
function validateEmail(value) {
  if (typeof value !== 'string') {
    throw new GraphQLError('Value must be either a String.');
  }

  if (/^\S+@\S+$/.test(ast.value) === false) {
    throw new Error('Value must be a valid email.');
  }

  return value;
}

export default new GraphQLScalarType({
  name: 'Email',
  serialize: validateEmail,
  parseValue: validateEmail,
  parseLiteral: valueNode => {
    if (valueNode.kind !== Kind.STRING) {
      throw new Error('Value must be either a String.');
    }

    if (/^\S+@\S+$/.test(valueNode.value) === false) {
      throw new Error('Value must be a valid email.');
    }

    return valueNode.value;
  }
});
