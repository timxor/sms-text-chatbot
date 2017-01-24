// bot.js
var botBuilder = require('claudia-bot-builder');
var greeting = require('greeting');
var fetch = require('node-fetch');
var excuse = require('huh');

var bot = botBuilder(function(message) {

    // log to aws cloudwatch
    console.log('****  New text message  ****');
    console.log('contents: ', message.text);
    console.log('full request: ', JSON.stringify(message.originalRequest));


    if (message.text.match(/quote/i)) {
        return fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en')
                .then(function(res) {
                    return res.text();
        });
    } else {
        return greeting.random() + '! ' + excuse.get();
    }
});

module.exports = bot;