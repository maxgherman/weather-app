import { ApolloServer } from 'apollo-server';
import { dataSources } from '@data-sources';
import { schema } from '@type-definitions';
import { Config } from '@utils/config';

Config.read();
const config = Config.value;

const server = new ApolloServer({
    schema,
    dataSources
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options.
server.listen({ port: config.apolloServer.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.dir(config);
});