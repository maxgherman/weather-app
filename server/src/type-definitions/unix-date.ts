import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const unixDateType = new GraphQLScalarType({
    name: 'UnixDate',
    description: 'Unix to UTC Date scalar type',
    parseValue(value) {
        return new Date(value); // value from the client
    },
    serialize(value) {
        return new Date(parseInt(value, 10) * 1000).toISOString() // value sent to the client
    },
    parseLiteral(ast) {
        return ast.kind === Kind.STRING ? new Date(ast.value) : null;
    }
});
