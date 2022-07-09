const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://nekocdn.com/images/dYG6krkh.gif","https://nekocdn.com/images/df3MWKsEQ.gif","https://nekocdn.com/images/ED7SvvaM.gif","https://nekocdn.com/images/6iZIXJF7h.gif","https://nekocdn.com/images/3aMHPgoA.gif","https://nekocdn.com/images/41qc0jku.gif",""];
module.exports = {
    name: "kill",
    aliases: ["matar","asesinar"],
    desc: "Sirve para matar a una persona",
    run: async (client, message, args, prefix) => {
        let user = message.mentions.users.first();
        if(!user) return message.channel.send("Lo siento, a quien quieres matar?")
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Kill"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Mató a" + " " + `**${user.username} D:**`)
            .setThumbnail("https://i.pinimg.com/originals/99/28/fc/9928fc961ed0782c8ccdcb392b078939.gif")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}