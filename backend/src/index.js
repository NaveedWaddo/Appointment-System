const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs/user');
const resolvers = require('./resolvers/user');
require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
