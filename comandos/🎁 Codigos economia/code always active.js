const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
module.exports = {
    name: "code-always-active",
    aliases: ["claimcode 24/7"],
    desc: "Reclama el codigo-24/7",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms = 1000000000000 * 60 * 60 * 1000 // 86400000 ms
        let recompensa = 2200;
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - data.codea) > 0) {
            let tiempo_restante = duration(Date.now() - data.codea - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply(`**Ya reclamaste este codigo <:hm:992630587003261008>**`)
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa
            },
            codea: Date.now()
        })
        return message.reply(`✅ **Has reclamado el codigo, tu recompensa es de \`${recompensa} Dolares <:Happy:992560664247799868>\`!**`)
    }
}