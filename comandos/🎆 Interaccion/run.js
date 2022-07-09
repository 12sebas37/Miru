const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://nekocdn.com/images/8xGtTG_b.gif","https://nekocdn.com/images/blBAJiwH.gif","https://nekocdn.com/images/2jF85dGS.gif","https://nekocdn.com/images/rSYZjKNj.gif","https://nekocdn.com/images/qpU9ll0UJ.gif","https://nekocdn.com/images/j6h2f8xz.gif","https://nekocdn.com/images/t8ZAH7CB.gif","https://nekocdn.com/images/pKY8flgFe.gif","https://nekocdn.com/images/Pik9-Inh.gif","https://nekocdn.com/images/BF46dwxH.gif","https://nekocdn.com/images/53FCq4gZ.gif","https://nekocdn.com/images/j8NcXT9o8.gif","https://nekocdn.com/images/ta1m6pR1.gif","https://nekocdn.com/images/GD2nvLZO.gif","https://nekocdn.com/images/9gp87Dbrq.gif","https://nekocdn.com/images/noHiQLFZ.gif","https://nekocdn.com/images/1LZAyXzcm.gif","https://nekocdn.com/images/zluT8RcRa.gif","https://nekocdn.com/images/VfuHdbK6U.gif","https://nekocdn.com/images/dESUgdFq.gif","https://nekocdn.com/images/2jF85dGS.gif","https://nekocdn.com/images/hQKh7vNd.gif","https://nekocdn.com/images/Xw7ot-KUT.gif","https://nekocdn.com/images/EXkKMcs7.gif","https://nekocdn.com/images/IrUxpnYr1.gif","https://nekocdn.com/images/Otgkk6C9.gif","https://nekocdn.com/images/pKGi3Q7j.gif","https://nekocdn.com/images/BHyrYtmQD.gif","https://nekocdn.com/images/wNxtEG-c.gif"];
module.exports = {
    name: "run",
    aliases: ["correr"],
    desc: "Sirve para correr",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Run"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Se fue corriendo o esta huyendo")
            .setThumbnail("https://s1.1zoom.me/big0/443/Grisaia_Phantom_Trigger_Two_Run_541562_1280x720.jpg")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}