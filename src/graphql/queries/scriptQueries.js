// graphql/queries/ScriptQueries.mjs

import { GraphQLID, GraphQLList } from 'graphql';
import ScriptType from '../types/scriptsTypes.js';
import Script from '../../models/script.js';

const ScriptQueries = {
  script: {
    type: ScriptType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Script.findById(args.id);
    },
  },
  scripts: {
    type: new GraphQLList(ScriptType),
    resolve() {
      return Script.find({});
    },
  },
};

export default ScriptQueries;
