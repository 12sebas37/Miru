const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://nekocdn.com/images/qOkqYru9S.gif","https://nekocdn.com/images/4CWIW9DQf.gif","https://nekocdn.com/images/BIWv0szSt.gif","https://nekocdn.com/images/dK0xDrNQv.gif","https://nekocdn.com/images/21kudGWC.gif","https://nekocdn.com/images/SZzHV6bou.gif","https://nekocdn.com/images/YgRhi9Lkl.gif","https://nekocdn.com/images/5AdZDyCw.gif","https://nekocdn.com/images/goyD4I5c.gif","https://nekocdn.com/images/UKA5qbFO.gif","https://nekocdn.com/images/Y-MIlcjw.gif","https://nekocdn.com/images/VeY3vftEK.gif","https://nekocdn.com/images/umH5GGmR.gif","https://nekocdn.com/images/y-6jpM1Db.gif","https://nekocdn.com/images/AmC5gEIl-.gif","https://nekocdn.com/images/T-lgEkpR.gif","https://nekocdn.com/images/AmC5gEIl-.gif","https://nekocdn.com/images/P8cJQy-G.gif","https://nekocdn.com/images/_EqxTVpp9.gif","https://nekocdn.com/images/dK0xDrNQv.gif","https://nekocdn.com/images/_1w8_Cvq8.gif","https://nekocdn.com/images/caqErQKR.gif","https://nekocdn.com/images/7ZNsl3Kcf.gif","https://nekocdn.com/images/LNt03iIfM.gif","https://nekocdn.com/images/QAosOH6lI.gif"];
module.exports = {
    name: "smile",
    aliases: ["sonreir"],
    desc: "Sirve para correr",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Smile"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Esta sonriendo")
            .setThumbnail("https://pm1.narvii.com/6190/06e1288d123cf47b0151983eacc1f5f68ce64d2a_hq.jpg")
            .setImage(imagen)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}