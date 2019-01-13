import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';

import userType from './userType';
import * as userResolver from './userResolver';

/**
 * @type {GraphQLFieldConfig}
 */
export const getUser = {
  description: 'Get User',
  type: userType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve: userResolver.getUser
};  

/**
 * @type {GraphQLFieldConfig}
 */
export const getUsers = {
  description: 'Get Users',
  type: GraphQLNonNull(GraphQLList(userType)),
  resolve: userResolver.getUsers
};