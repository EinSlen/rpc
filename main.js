var rpc = require('discord-rpc');
var client = new rpc.Client({ transport: 'ipc' });
const { clientid } = require('./package.json');

client.on('ready', () => {
    client.resquest('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `Vocal in ${client.member.voice.channel.join()}`,
            buttons: [{label: 'Rejoins', url: 'https://discord.com'}]
        }
    })
})

client.login({ clientId: `${clientid}` }).catch(error => console.log(error))
