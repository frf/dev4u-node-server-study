const { GraphQLServer } = require("graphql-yoga");

const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

let url = "mongodb://localhost:27017/graphqlnode?retryWrites=true&w=majority";
mongoose.connect(url, {
  user:'root',
  pass:'example',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(erro => {
  console.log("err", erro);
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start();