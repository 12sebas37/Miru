const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://c.tenor.com/EvqygcHxejAAAAAC/anime-suicide.gif","https://c.tenor.com/OdehztbrpecAAAAC/anime-falling.gif","https://c.tenor.com/0uGObo7wlWMAAAAC/anime-sad.gif","https://c.tenor.com/Um1a4sSC4fYAAAAC/milosh-monster-anime.gif","https://i.pinimg.com/originals/35/30/ac/3530ac9cef873181afc7f9d36d0ce101.gif","https://i.gifer.com/F5Ai.gif","https://c.tenor.com/27uVoMBjJs0AAAAC/suicide6.gif","https://i.gifer.com/UYOF.gif","https://data.whicdn.com/images/290510883/original.gif","https://i.pinimg.com/originals/9e/18/d2/9e18d2eed4b2559f44ddf5e22af45401.gif","https://68.media.tumblr.com/36315c30c7f5bb6e7a03e28b1ed1024c/tumblr_olvtjiDS2i1tw58h4o1_500.gif"];
module.exports = {
    name: "death",
    aliases: ["suicide", "muricion"],
    desc: "Sirve para hacer la auto muricion",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Death"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Hizo la auto muricion <:x_x:992220568617230347>")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}