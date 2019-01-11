import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';

import userType from './userType';

import * as userResolver from './userResolver';

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

export const getUsers = {
  description: 'Get Users',
  type: GraphQLNonNull(GraphQLList(userType)),
  resolve: userResolver.getUsers
};