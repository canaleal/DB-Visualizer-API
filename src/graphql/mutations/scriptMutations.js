// graphql/mutations/ScriptMutations.mjs

import { GraphQLString, GraphQLNonNull } from 'graphql';
import ScriptType from '../types/scriptsTypes.js';
import Script from '../../models/script.js';

const ScriptMutations = {
    addScript: {
        type: ScriptType,
        args: {
            title: { type: new GraphQLNonNull(GraphQLString) },
            text: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
            const script = new Script({
                title: args.title,
                text: args.text,
                created_at: new Date(),
                updated_at: new Date(),
            });
            return script.save();
        },
    },
};

export default ScriptMutations;
