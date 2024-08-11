const express = require('express');
const mongoose = require('mongoose');
const app = express();
let cors = require('cors');

const PORT = process.env.PORT || 4000;
let dbConfig = require('./database/db');
const gameRoute = require('./routes/game');
const TELEGRAM_API_TOKEN = '7317675498:AAEkwdAupyPVM1l3Td41kJ52K-xtvdJCf9U'; // Replace with your actual API token
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}`;

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

app.post('/telegram-webhook', async (req, res) => {
    const message = req.body.message;
    if (message) {
      const chatId = message.chat.id;
      const text = message.text;
  
      if (text.startsWith('/start')) {
        // Extract the referral ID if available
        const referralId = text.split(' ')[1] || null;
  
        // Respond with a link to your Vite.js app, passing the referral ID
        const responseText = `Welcome! Click the link to open the web app: [Open Web App](https://yourdomain.com?start=${referralId})`;
  
        await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
          chat_id: chatId,
          text: responseText,
          parse_mode: 'Markdown',
        });
      }
    }
    res.sendStatus(200);
  });
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((req, res, next) => {
    res.status(404).send('Error 404!')
    console.log(res)
    });
    
    app.use(function (err, req, res, next) {
    console.error(err.message);
    console.log(err.statusCode)
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
    });
