const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./Schema');
const resolvers = require('./resolvers');

mongoose.connect('mongodb://localhost:27017/Sample').then(()=>{

  console.log("connected to mongoDB");
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the server
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});