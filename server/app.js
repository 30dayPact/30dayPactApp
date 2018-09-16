const express   = require('express');

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//ADD THIS LATER
// const routes = require("./routes");
const app = express();

const path = require('path')


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

//will need to un-comment once models are created
// const db = require('./models')


// Serve up static assets (usually on heroku) LATER FOR HEROKU
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Add api routes WHEN BUILT
// app.use(routes);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/30days"
);

app.listen(PORT, () => {
  console.log('🌎 now listening for requests on port 4000');
});







// const graphqlHTTP = require('express-graphql');
//const schema = require('./schema/schema');
//const mongoose = require('mongoose'); 

// bind express with graphql
//app.use('/graphql', graphqlHTTP({
  //schema,
  //graphiql: true
//}));