var ServerID = "510980248435949568"; //اي دي السيرفر
var ChannelID = "517439251881918474";// اي دي الروم


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Alphacodes','\n','ProBot credits miner is ready!'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send("آنيكك آمك يخوو آلقحبةة ختفوووووووووو") 


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN);


client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Alphacodes','\n','ProBot credits miner is ready!'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send("آنيكك آمكك بدون تفآل يخوآت القحبةةء") 


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN2);
