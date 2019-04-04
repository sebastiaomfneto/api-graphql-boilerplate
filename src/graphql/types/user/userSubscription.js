import userType from './userType';
import * as userResolver from './userResolver';

export const watchNewUsers = {
  description: 'Listening for new Users',
  type: userType,
  resolve: value => value,
  subscribe: userResolver.watchNewUsers
};
