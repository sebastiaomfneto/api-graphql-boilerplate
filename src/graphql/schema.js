import { GraphQLSchema } from 'graphql';

import queryType from './types/queryType';
import mutationType from './types/mutationType';

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
