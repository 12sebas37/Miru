module.exports = {
    name: "play",
    aliases: ["reproducir"],
    desc: "Reproduce una cancion",
    owner: false,
    run: async (client, message, args, prefix) => {
        //comprobaciones previas
        if(!args.length) return message.reply(`❌ **Especifica una cancion**`);
        if(!message.member.voice?.channel) return message.reply(`❌ **Unete a un canal de voz**`);
        if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply(`❌ **Entra a mi canal de voz**`);
        client.distube.play(message.member.voice?.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        });
        message.reply(`🔎 **Buscando \`${args.join(" ")}\`...**`);
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarollado por dewstouh#1088 || - ||    ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
