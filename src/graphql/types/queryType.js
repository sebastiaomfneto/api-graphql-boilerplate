import { GraphQLObjectType } from 'graphql';

import * as userQuery from './user/userQuery';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query Type',
  fields: {
    ...userQuery
  }
});
