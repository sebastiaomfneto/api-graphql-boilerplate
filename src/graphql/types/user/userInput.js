import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User Model Input',
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    email: {
      type: GraphQLNonNull(GraphQLString)
    },
    active: {
      type: GraphQLBoolean
    }
  })
});
