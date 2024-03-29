
const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false  });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});




// import all of our models
require('./models/Post');
require('./models/User');



//Start app
const app = require('./app');

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'),()=>{
  console.log(`Express running → Port ${server.address().port}`);
})
