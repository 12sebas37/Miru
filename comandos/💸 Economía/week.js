const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
module.exports = {
    name: "week",
    aliases: ["Semana"],
    desc: "Reclama una recompensa semanal",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 7* 24 * 60 * 60 * 1000 // 86400000 ms
        let recompensa = 4000;
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - data.semana) > 0) {
            let tiempo_restante = duration(Date.now() - data.semana - tiempo_ms,
            {
                language: "es",
                units: ["d", "h", "m", "s"],
                round: true,
            })
            return message.reply(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a reclamar tu recompensa semanal**`)
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            semana: Date.now()
        })
        return message.reply(`✅ **Has reclamado tu recompensa diaria de \`${recompensa} Dolares\`!**`)
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarollado por dewstouh#1088 || - ||    ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
