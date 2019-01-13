import { GraphQLObjectType } from 'graphql';

import * as userMutation from './user/userMutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation Type',
  fields: () => ({
    ...userMutation
  })
});
