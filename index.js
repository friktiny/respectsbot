const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log("Respects are about to be paid!")
});
client.on('message', message => {
    if(message.content.toLowerCase() === "f") {
        db.add(`respects_${message.guild.id}`, 1)
        db.add(`respects_global`, 1)
        let serverrespects = db.fetch(`respects_${message.guild.id}`)
        let globalrespects = db.fetch(`respects_global`)
        let embed = new MessageEmbed()
            .setTitle("**Respects Given**")
            .setDescription(`${message.author.tag} has paid their respects. :regional_indicator_f: :pray:`)
            .addField("Server Respects", `\`${serverrespects}\``, true)
            .addField("Global Respects", `\`${globalrespects}\``, true)
            .setColor("BLUE")
            .setTimestamp()
        message.channel.send(embed)
    }
    
})


client.login(token-here)
