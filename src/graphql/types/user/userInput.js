import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import GraphQLEmail from '../../scalars/GraphQLEmail';
//import { GraphQLEmailAddress } from 'graphql-scalars';
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
