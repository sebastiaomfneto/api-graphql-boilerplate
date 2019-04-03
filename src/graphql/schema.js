import { GraphQLSchema } from 'graphql';

import queryType from './types/queryType';
import mutationType from './types/mutationType';

import uppercaseDirective from './directives/uppercaseDirective';

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
  directives: [uppercaseDirective]
});
