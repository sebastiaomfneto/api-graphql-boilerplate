import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql';
import GraphQLEmail from '../../scalars/GraphQLEmail';

export default new GraphQLObjectType({
  name: 'User',
  description: 'User Model',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve(root, _args, _ctx, info) {
        const [fieldNode] = info.fieldNodes;

        const directive = fieldNode.directives.find(i => i.name.value === 'uppercase');

        if (directive) {
          return root.name.toUpperCase();
        }

        return root.name;
      }
    },
    email: {
      type: GraphQLNonNull(GraphQLEmail)
    },
    active: {
      type: GraphQLBoolean
    }
  })
});
