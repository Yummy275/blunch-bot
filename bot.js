const fetch = require('node-fetch');
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const blunch67 = require('./images/blunch67.jpg');
client.login(process.env.BOTTOKEN);

client.on('ready', () => {
    console.log('beep beep');
});

const blunchDayWords = [
    'BLUNCH DAY EEEEYA!!',
    'ITS A GOOD DAY FOR A BLUNCH DAY!',
    'DAMN DAWG...BLUNCH DAY?? DAMN',
    'GET YOUR SAC IN THE AIR!! ITS BLUNCH DAY',
    'THE HACK, IS BACK. FOR BLUNCH DAY!!!!',
    'LETS GO BLUNCH DAYYYY!!!!!!!! yYEYAYYEAY!!',
    'auiwjneiuwneiuan@!!!!! YEAAAAA!',
    'FUCK YEAAA BLUNCH DAY MOFO!!!!!',
    'MAY YOUR BLUNCH DAY LIFT YOUR SAC',
];

const globDayWords = [
    'GET GLOOOBBBBEEED',
    'ITS GLOB DAAAAY BABY!! GET GLOBEEED',
    'What a might fine day for a glob day indeed',
    'WELL WELL WELL IF ISNT GLOB DAYYY',
    'HE AtTE THE GLOB GLOB FRUIT AND STUCK IT UP HIS Y-ASS HIS Y-ASS Y-OLE',
    'HAPPY MUTHAFUCKIN PLANT GANG DAY',
    'GLOBULE MARTIN DAY YEEEEEEEAU. YYYEA',
    'JARMANDER TOP, MAKING DEM SWEAT ON GLOB DAY!!!',
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const postJojo = async (channel) => {
    let response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.APIKEY}&tag=Jojos bizarre adventure&rating=r`,
        { mode: 'cors' }
    );
    let json = await response.json();
    channel.send(json.data.url);
};

client.on('message', (msg) => {
    if (msg.content === 'Happy Blunch day!') {
        returnMessage =
            blunchDayWords[getRandomInt(0, blunchDayWords.length - 1)];
        msg.channel.send(returnMessage);
    } else if (msg.content === '!blunchjo') {
        postJojo(msg.channel);
    } else if (msg.content === 'Happy Glob day!') {
        returnMessage = globDayWords[getRandomInt(0, globDayWords.length - 1)];
        msg.channel.send(returnMessage);
    } else if (msg.content === 'You like the weather corn?') {
        msg.channel.send('', { files: [blunch67] });
    }
});
