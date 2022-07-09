const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
module.exports = {
    name: "month",
    aliases: ["mes"],
    desc: "Reclama una recompensa mensual",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 3* 7* 24* 60* 60* 1000 // 86400000 ms
        let recompensa = 10000;
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - data.mes) > 0) {
            let tiempo_restante = duration(Date.now() - data.mes - tiempo_ms,
            {
                language: "es",
                units: ["w","d","h","m","s"],
                round: true,
            })
            return message.reply(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a reclamar tu recompensa mensual**`)
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            mes: Date.now()
        })
        return message.reply(`✅ **Has reclamado tu recompensa diaria de \`${recompensa} Dolares\`!**`)
    }
}