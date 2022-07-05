const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://nekocdn.com/images/VrjVnQfw5.gif","https://nekocdn.com/images/K5M-y16O.gif","https://nekocdn.com/images/igLWdONCp.gif","https://nekocdn.com/images/ftUuhPVYz.gif","https://nekocdn.com/images/KyUyBI21B.gif","https://nekocdn.com/images/jzuxhTqGC.gif","https://nekocdn.com/images/-gY-Wnks.gif","https://nekocdn.com/images/O35kA7l5.gif","https://nekocdn.com/images/IoU9Pg1u.gif","https://nekocdn.com/images/Q6ZCselw6.gif","https://nekocdn.com/images/ZX1UXViG.gif","https://nekocdn.com/images/GpG7n1BDb.gif","https://nekocdn.com/images/XkohhbkC.gif","https://nekocdn.com/images/BtQSg__r.gif","https://nekocdn.com/images/aH-AMFRfZ.gif","https://nekocdn.com/images/AAomx-X4.gif","https://nekocdn.com/images/D55PDCN8B.gif","https://nekocdn.com/images/m8dkHnQ62.gif","https://nekocdn.com/images/7UAsH21lG.gif","https://nekocdn.com/images/n6aKWAPc.gif","https://nekocdn.com/images/MYeMgQtwq.gif","https://nekocdn.com/images/2dXUJK47U.gif","https://nekocdn.com/images/9H2U-D8u.gif","https://nekocdn.com/images/HwLQdgtB.gif","https://nekocdn.com/images/M3AA73_Z4.gif","https://nekocdn.com/images/PSqdAw2e.gif","https://nekocdn.com/images/ykDOURSQ.gif","https://nekocdn.com/images/bsiwSw6o7.gif","https://nekocdn.com/images/nw1nhbEa2.gif","https://nekocdn.com/images/EEhcDmNR.gif","https://nekocdn.com/images/fI2sSTGwr.gif","https://nekocdn.com/images/7m-B9OriS.gif","https://nekocdn.com/images/w1CXnwvH_.gif","https://nekocdn.com/images/YfpdryZE.gif","https://nekocdn.com/images/9qG-XYDFL.gif","https://nekocdn.com/images/HlzkHoIT.gif","https://nekocdn.com/images/wuxP6YTFH.gif","https://nekocdn.com/images/fdhMOSk8.gif","https://nekocdn.com/images/EZ5C-gmBR.gif","https://nekocdn.com/images/KqirgdV6Y.gif","https://nekocdn.com/images/ndQojmwa.gif","https://nekocdn.com/images/5qopH8X9.gif","https://nekocdn.com/images/r2h6HSSB.gif","https://nekocdn.com/images/D1pS1ev6.gif","https://nekocdn.com/images/BPv4IDhj.gif","https://nekocdn.com/images/Zqr1SFqS.gif","https://nekocdn.com/images/HC8V2P74.gif","https://nekocdn.com/images/XkohhbkC.gif","https://nekocdn.com/images/u1l3nWFa.gif","https://nekocdn.com/images/6xTzrffs.gif","https://nekocdn.com/images/M7-UeAHm.gif","https://nekocdn.com/images/NngR-Bh-W.gif","https://nekocdn.com/images/Ryh5D24Wf.gif","https://nekocdn.com/images/9H2U-D8u.gif","https://nekocdn.com/images/7UAsH21lG.gif"];
module.exports = {
    name: "cry",
    aliases: ["weep", "mourn"],
    desc: "Sirve para llorar",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Cry"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Esta llorando <:Cry:992567243022020778>")
            .setThumbnail("https://c.tenor.com/EZsmE8l33TcAAAAC/anime-anime-cry.gif")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}