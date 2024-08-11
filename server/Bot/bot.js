const TelegramBot = require('node-telegram-bot-api');


const token = '7317675498:AAEkwdAupyPVM1l3Td41kJ52K-xtvdJCf9U';
const bot = new TelegramBot(token, { polling: true });
// Define the URL of your web app
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (messageText.startsWith('/start')) {
        // Extract parameter if present
        const urlParts = messageText.split(' ');
        const parameter = urlParts.length > 1 ? urlParts[1] : '';
        const webAppUrl = `https://telegram-eosin-iota.vercel.app?ref=${parameter}`;
        // Create an Inline Keyboard button to open the web app
        const options = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Open Web App',
                            web_app: {
                                url: webAppUrl,
                            }
                        }
                    ]
                ]
            }
        };

        // Send the message with the Inline Keyboard
        bot.sendMessage(chatId, `Click the button below to open the web app: ${parameter}`, options);
 
    }
});

bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});