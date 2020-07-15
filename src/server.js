const { GraphQLServer } = require("graphql-yoga");

const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

// let url = "mongodb://localhost:27017/admin?retryWrites=true&w=majority";
let url = "mongodb+srv://cluster0.3avtk.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(url, {
  user:'teste',
  pass:'7uROi25QIvAuSv9T',
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