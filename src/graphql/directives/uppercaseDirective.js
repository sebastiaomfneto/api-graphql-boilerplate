import { GraphQLDirective, DirectiveLocation } from 'graphql';

export default new GraphQLDirective({
  name: 'uppercase',
  description: 'Transform a text to Uppercase',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT]
});
