// graphql/index.mjs

import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import ScriptQueries from './queries/scriptQueries.js';
import ScriptMutations from './mutations/scriptMutations.js';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...ScriptQueries,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...ScriptMutations,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

