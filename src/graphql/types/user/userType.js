import { GraphQLObjectType, GraphQLNonNull, GraphQLID } from 'graphql';

import userInput from './userInput';

export default new GraphQLObjectType({
  name: 'User',
  description: 'User Model',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    ...userInput.getFields()
  })
});
