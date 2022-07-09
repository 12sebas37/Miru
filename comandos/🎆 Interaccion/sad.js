const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://nekocdn.com/images/Kl85bHSrT.gif","https://nekocdn.com/images/STtJCRRD.gif","https://nekocdn.com/images/l99EsaUHw.gif","https://nekocdn.com/images/8qLm59CI5.gif","https://nekocdn.com/images/40C2KzGww.gif","https://nekocdn.com/images/ADKvnAFp.gif","https://nekocdn.com/images/xkBmWhyD.gif","https://nekocdn.com/images/V-PzD47EL.gif","https://nekocdn.com/images/LsIRg88x.gif","https://nekocdn.com/images/pn5eTTyOG.gif","https://nekocdn.com/images/mB9djlmN.gif","https://nekocdn.com/images/8K0xfsIET.gif","https://nekocdn.com/images/BnlQ14Zm.gif","https://nekocdn.com/images/AztXABA6R.gif","https://nekocdn.com/images/lMLcXniV.gif","https://nekocdn.com/images/j9GHG5TJ.gif","https://nekocdn.com/images/4KUxCGqv.gif","https://nekocdn.com/images/xW2nwQUS.gif","https://nekocdn.com/images/BlSV-Bvp.gif","https://nekocdn.com/images/V-0kYioxi.gif","https://nekocdn.com/images/NVzR9mqf7.gif","https://nekocdn.com/images/ZD4HsFqHZ.gif","https://nekocdn.com/images/kVR0VZm6.gif","https://nekocdn.com/images/Ldy4AmpBk.gif","https://nekocdn.com/images/tNNc35Qr.gif"];
module.exports = {
    name: "sad",
    aliases: ["triste"],
    desc: "Sirve para ponerte triste",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Sad"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Esta triste <:x_x:992220568617230347>")
            .setThumbnail("https://cdn.superaficionados.com/imagenes/23-animes-tristes-to-your-eternity-cke.jpg")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}