import { GraphQLSchema } from 'graphql';
import { ApolloServer } from 'apollo-server';
import { dataSources, DataSources } from '@data-sources';
import { schema } from '@type-definitions';
import { Config } from '@utils/config';

Config.read();

const config = Config.value;

type ApolloConfig = {
  schema: GraphQLSchema,
  dataSources: () => DataSources
};

const server = new ApolloServer({
    schema,
    dataSources
} as ApolloConfig);

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options.
server.listen({ port: config.apolloServer.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.dir(config);
});