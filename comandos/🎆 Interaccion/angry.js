const {asegurar_todo} = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
let gifs = ["https://pa1.narvii.com/6249/497a6fab874d4cddaf32d1a734c431aff7eca2bf_hq.gif","https://c.tenor.com/yCR6JOoxS6wAAAAd/anime-angry.gif","https://c.tenor.com/X3x3Y2mp2W8AAAAC/anime-angry.gif","https://c.tenor.com/4a4d9b6kbKEAAAAC/angry-anime-angry.gif","https://media4.giphy.com/media/U77FFxuyoIPvHEIgkq/giphy.gif","https://acegif.com/wp-content/uploads/funny-anime-gif-24.gif","https://i.pinimg.com/originals/01/48/a2/0148a2c426e64d9ce20db34779832197.gif","https://media1.giphy.com/media/dTWMCXuvFHJhOMS4OJ/200.gif","https://i.gifer.com/OxyN.gif","https://www.icegif.com/wp-content/uploads/anime-icegif-9.gif","https://64.media.tumblr.com/fdbf9be4143fb8ec642d61748e8d71d2/tumblr_oqs7yxfFUa1scqbpuo1_500.gifv","https://thumbs.gfycat.com/SlushyEminentKagu-size_restricted.gif","https://c.tenor.com/LDtFXl57-hMAAAAC/angry-anime-girl.gif","https://data.whicdn.com/images/62219440/original.gif","https://pa1.narvii.com/6191/3d7d00b7a013ff28aa42fd0cd4d82266a9787696_hq.gif","https://i.makeagif.com/media/7-13-2018/5bypmu.gif","https://64.media.tumblr.com/1bd0a91503c985d20460aebe3c32c626/a060f146972d4ae9-8b/s640x960/68a078f5628f80d861029feda95ea5ad833afa04.gifv","https://i.imgur.com/HbRSFXI.gif","https://i.gifer.com/embedded/download/IDsd.gif","https://animesher.com/orig/1/114/1144/11440/animesher.com_angry-toradora-taiga-aisaka-1144082.gif","https://i.gifer.com/2y8x.gif","https://angelaco.files.wordpress.com/2018/11/959d60662504637ee331e1543f13b9765b3497b7_hq.gif","http://k43.kn3.net/taringa/2/2/8/7/0/9/20/direcitonerv/B2A.gif?314","https://media.giphy.com/media/7J4pbfnQaamDjzGAnq/giphy.gif","https://i.pinimg.com/originals/b3/96/e0/b396e0fd1ced8ad36545a9094c5218ad.gif","https://nekocdn.com/images/LTVz_oqo2.gif","https://nekocdn.com/images/Yi28c6XO.gif","https://nekocdn.com/images/KLupyCdWS.gif","https://nekocdn.com/images/qNj4v8DQ.gif","https://nekocdn.com/images/uOHIfxDs.gif","https://nekocdn.com/images/XG3A9I9R.gif","https://nekocdn.com/images/_EheYVrY.gif","https://nekocdn.com/images/IqdiH2nt.gif","https://nekocdn.com/images/fSR6VmEk.gif","https://nekocdn.com/images/J6DCUVYX.gif","https://nekocdn.com/images/pASonhic.gif","https://nekocdn.com/images/Z_eB_TyV.gif","https://nekocdn.com/images/NhhXfaEEa.gif","https://nekocdn.com/images/GgK--HtC.gif","https://nekocdn.com/images/h9Kbitj_.gif","https://nekocdn.com/images/be13s9UF.gif","https://nekocdn.com/images/oVehY1S-B.gif","https://nekocdn.com/images/ZDGTT_0Z.gif","https://nekocdn.com/images/BbOMcHd8u.gif",
"https://nekocdn.com/images/560TM2HsQ.gif"];

module.exports = {
    name: "angry",
    aliases: ["enojado", "enfadado"],
    desc: "Sirve para enojarte",
    run: async (client, message, args, prefix) => {
        let imagen = gifs[Math.floor(Math.random() * gifs.length)];
        message.reply({
            embeds: [new Discord.MessageEmbed()
            .setAuthor(("Angry"), message.author.displayAvatarURL())
            .setDescription(`**${message.author.username}**` + " " + "Se enojo<:Angry:992320871224070155>")
            .setImage(imagen)
            .setThumbnail("https://i.pinimg.com/originals/a6/dd/86/a6dd867ed87ccbe1c51453268fa5a41a.jpg")
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setColor(client.color)
            .setTimestamp()
            ]
        });
    }
}