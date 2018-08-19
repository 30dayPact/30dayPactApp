const express   = require('express');
// const graphqlHTTP = require('express-graphql');
//const schema = require('./schema/schema');
//const mongoose = require('mongoose'); 

// bind express with graphql
//app.use('/graphql', graphqlHTTP({
  //schema,
  //graphiql: true
//}));

const app = express();

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
