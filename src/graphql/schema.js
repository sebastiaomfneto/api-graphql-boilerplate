import { GraphQLSchema } from 'graphql';

import queryType from './types/queryType';
import mutationType from './types/mutationType';
import subscriptionType from './types/subscriptionType';

import directives from './directives';

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
  subscription: subscriptionType,
  directives
});
