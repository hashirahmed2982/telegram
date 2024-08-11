const express = require('express');
const mongoose = require('mongoose');
const app = express();
let cors = require('cors');

const PORT = process.env.PORT || 4000;
let dbConfig = require('./database/db');
const gameRoute = require('./routes/game');
const referalRoute = require('./routes/referalRoutes');



mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, ).then(() => {
console.log('Database successfully connected!')
},
error => {
	console.log('Could not connect to database : ' + error)
}
)

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/game', gameRoute);
app.use('/referal', referalRoute);


// Error Handling Middleware
app.use((req, res, next) => {
    res.status(404).send('Error 404: Not Found!');
    next(); // Allow the error handler to execute
});

app.use((err, req, res, next) => {
    console.error('Server Error:', err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

