const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://nekocdn.com/images/liVJhdgk1.gif","https://nekocdn.com/images/zOQanRiz2.gif","https://nekocdn.com/images/nGwDs4HPH.gif","https://nekocdn.com/images/iUswMjYpO.gif","https://nekocdn.com/images/3HK6BWYFI.gif","https://nekocdn.com/images/BnFAimllg.gif","https://nekocdn.com/images/JJ2A4u15i.gif","https://nekocdn.com/images/PP6ziDMUX.gif","https://nekocdn.com/images/BnFAimllg.gif","https://nekocdn.com/images/neXeAA1X.gif","https://nekocdn.com/images/Ftu1IBw2.gif","https://nekocdn.com/images/3_Y8BcCke.gif","https://nekocdn.com/images/OLxwlqzLa.gif","https://nekocdn.com/images/JJ2A4u15i.gif","https://nekocdn.com/images/9FYeZPy3d.gif","https://nekocdn.com/images/7p59cFi8.gif","https://nekocdn.com/images/4r1YObRGq.gif","https://nekocdn.com/images/MHc3Vqk0s.gif","https://nekocdn.com/images/UCIJx7ol8.gif","https://nekocdn.com/images/HhLZsbqqa.gif","https://nekocdn.com/images/42IAL-a9W.gif","https://nekocdn.com/images/DEtILN1kQ.gif","https://nekocdn.com/images/UMF6pFHIt.gif","https://nekocdn.com/images/ujGhSLiUl.gif","https://nekocdn.com/images/By9LHB3n.gif","https://nekocdn.com/images/IPDg9nxE4.gif","https://nekocdn.com/images/e7J26q6Yi.gif","https://nekocdn.com/images/gU-kiMzmX.gif","https://nekocdn.com/images/K2pjFQwMK.gif","https://nekocdn.com/images/JqihzWKgC.gif","https://nekocdn.com/images/L3ek4XA6.gif","https://nekocdn.com/images/KjWCH1d_N.gif","https://nekocdn.com/images/zOQanRiz2.gif","https://nekocdn.com/images/acTR43TS.gif","https://nekocdn.com/images/IPDg9nxE4.gif","https://nekocdn.com/images/Ftu1IBw2.gif","https://nekocdn.com/images/Jd6W6AfMl.gif","https://nekocdn.com/images/K6axErbZ.gif","https://nekocdn.com/images/MuUD-2gC.gif","https://nekocdn.com/images/5IS0n7mkL.gif","https://nekocdn.com/images/KdgpGJnl.gif"];
module.exports = {
    name: "happy",
    aliases: ["feliz"],
    desc: "Sirve para ponerte feliz",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Happy"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Esta feliz <:Happy:992560664247799868>")
            .setThumbnail("https://c.tenor.com/nBWlYPbKxzwAAAAC/anime-happy.gif")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}