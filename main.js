var rpc = require('discord-rpc');
var client = new rpc.Client({ transport: 'ipc' });
const { client-id } = require('./package.json');

client.on('ready', () => {
    client.resquest('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `Vocal in ${client.member.voice.channel.join()}`,
            buttons: [{label: 'Rejoins', url: 'https://discord.com'}]
        }
    })
})

client.login({ clientId: `${client-id}` }).catch(error => console.log(error))