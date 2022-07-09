const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');

module.exports = {
    name: "bot",
    aliases: ["enojado", "enfadado"],
    desc: "Sirve para enojarte",
    run: async (client, message, args, prefix) => {
        message.reply({
            embeds: [new Discord.MessageEmbed()
                .setTitle("Actu Bot 🎁")
                .setDescription("Reacciona a este mensaje si quieres enterarte de las actualizaciones que tendra el bot del clan")
                .setThumbnail("https://c.tenor.com/T4664VfiM0cAAAAC/asistente-robot.gif")
                .setImage("https://images-ext-1.discordapp.net/external/zdJy54DDRHANKsLAsIhyTCkm7VFsW42Fbjx-5doG9Rw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/986428982591361040/b1c3ed881a8099839ca673f93a847b9e.png?width=442&height=442")
                .setColor(0x8E45F1)
            ]
        });
    }
}