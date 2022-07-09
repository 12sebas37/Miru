const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://c.tenor.com/rFomhnWNTYwAAAAC/i-love-you-love.gif","https://c.tenor.com/LX-2YEcAtzMAAAAC/hearts-anime.gif","https://i.pinimg.com/originals/f9/1b/0d/f91b0d99d914cb9e44f1e8cabdf4b689.gif","https://c.tenor.com/HCCXdEb9s3wAAAAC/anime.gif","https://i.gifer.com/Xacw.gif","https://animesher.com/orig/0/75/759/7594/animesher.com_white-black-ojos-759481.gif","http://25.media.tumblr.com/643c9fd8b38b96da0d6e20067e623526/tumblr_mmkk4ognnU1sqy5fio1_500.gif","https://acegif.com/wp-content/uploads/anime-love-29.gif","https://i.gifer.com/8KqY.gif","https://animesher.com/orig/1/124/1245/12458/animesher.com_amor-gif-pareja-1245818.gif","https://c.tenor.com/4T7o2rO57cMAAAAC/love-anime.gif","https://i.gifer.com/ZQpx.gif","https://c.tenor.com/PGXshKPAUh4AAAAC/my-dress-up-darling-anime-love.gif","https://c.tenor.com/nOARJZENR9UAAAAC/anime-in-love.gif","https://c.tenor.com/73cUvhdcbKUAAAAC/anime-love.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89NJ9P6ka6Vwc-5YkTzyPS3e0unvo0bRVu6-lvtSa2fgqTgk3YHJoCHivZxnQ0pg_Qpc&usqp=CAU"];
module.exports = {
    name: "love",
    aliases: ["enamorado","amor"],
    desc: "Sirve para enamorarse",
    run: async (client, message, args, prefix) => {
        let user = message.mentions.users.first();
        if(!user) return message.channel.send("Lo siento, menciona de quien estas enamorad@")
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Loved"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Esta enamorad@ de" + " " + `**${user.username}**`)
            .setThumbnail("https://animecorner.me/wp-content/uploads/2022/05/Yomiji-Otono_Movies.png")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}