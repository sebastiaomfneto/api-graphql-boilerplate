import { GraphQLObjectType, GraphQLString } from 'graphql';

import * as userSubscription from './user/userSubscription';

export default new GraphQLObjectType({
  name: 'Subscription',
  description: 'Root Subscription Type',
  fields: () => ({
    clock: {
      type: GraphQLString,
      resolve: value => value,
      subscribe: async function*() {
        let nextResolve;

        setInterval(() => {
          nextResolve(new Date().toISOString());
        }, 1000);

        while (true) {
          yield new Promise(resolve => (nextResolve = resolve));
        }
      }
    },
    ...userSubscription
  })
});
