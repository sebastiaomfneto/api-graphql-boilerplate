import { GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';

import userType from './userType';
import userInput from './userInput';

import * as userResolver from './userResolver';

export const createUser = {
  description: 'Create User',
  type: userType,
  args: {
    user: {
      type: GraphQLNonNull(userInput)
    }
  },
  resolve: userResolver.createUser
};

export const updateUser = {
  description: 'Update User',
  type: userType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    },
    user: {
      type: GraphQLNonNull(userInput)
    }
  },
  resolve: userResolver.updateUser
};

export const removeUser = {
  description: 'Remove User',
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve: userResolver.removeUser
};
