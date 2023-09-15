import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql';

// Create schema for script type

export const ScriptType = new GraphQLObjectType({
    name: 'Script',
    description: 'Script type',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        text: {
            type: new GraphQLNonNull(GraphQLString),
        },
        created_at: {
            type: new GraphQLNonNull(GraphQLString),
        },
        updated_at: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

export default ScriptType;