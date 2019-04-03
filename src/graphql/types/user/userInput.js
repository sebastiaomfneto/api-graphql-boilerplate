import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import GraphQLEmail from '../../scalars/GraphQLEmail';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User Model Input',
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    email: {
      type: GraphQLNonNull(GraphQLEmail)
    },
    active: {
      type: GraphQLBoolean
    }
  })
});
