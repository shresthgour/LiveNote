const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
// npm run server

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// * Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook backend listening on port at http://localhost:${port}`)
});
