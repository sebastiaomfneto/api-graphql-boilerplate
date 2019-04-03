import { GraphQLScalarType, Kind } from 'graphql';
import { GraphQLError } from 'graphql/error';

function validateEmail(value) {
  if (typeof value !== 'string') {
    throw new GraphQLError('Value must be either a String.');
  }

  if (value.match(/^\S+@\S+$/) === false) {
    throw new GraphQLError('Value must be a valid email.');
  }

  return value;
}

export default new GraphQLScalarType({
  name: 'Email',
  serialize: validateEmail,
  parseValue: validateEmail,
  parseLiteral: ast => {
    if (ast.kind !== Kind.STRING) {
      throw new Error('Value must be either a String.');
    }

    if (/^\S+@\S+$/.test(ast.value) === false) {
      throw new Error('Value must be a valid email.');
    }

    return ast.value;
  }
});
