module.exports = {
    name: "skip",
    aliases: ["saltar"],
    desc: "Salta las canciones",
    run: async (client, message, args, prefix) => {
        //comprobaciones previas
        const queue = client.distube.getQueue(message);
        if(!queue) return message.reply(`❌ **No hay ninguna canción reproduciéndose!**`);
        if(!message.member.voice?.channel) return message.reply(`❌ **Unete a un canal de voz**`);
        if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply(`❌ **Unete a mi canal de voz**`);
        client.distube.skip(message);
        message.reply(`⏭ **Saltando a la siguiente canción!**`)
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarollado por dewstouh#1088 || - ||    ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
