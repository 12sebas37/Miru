const luckSchema = require(`${process.cwd()}/modelos/suerte.js`);
const duration = require('humanize-duration');
module.exports = {
    name: "luck",
    aliases: ["suerte"],
    desc: "Mira tu suerte",
    run: async (client, message, args, prefix) => {
        //leemos la economia el usuario
        let luck = ["¡Hoy es tu día de suerte! ¡Caerá un relámpago y no te golpeará! <:Happy:992560664247799868> ","Te irá mal. Pero no te preocupes, alguien se apiadará de ti, dándote más tareas para la casa. ¿Qué eso no es bueno? F por ti.<:Cry:992567243022020778>","De que vuelan, vuelan. Quizás te hicieron brujería.<:Pandatonto:992626945139425361>","Tienes una suerte de maravilla. El fantasma detrás de ti la envidia.<:PandaAngelWings:992627778430185562>","Normal. Completamente normal. Tan normal que nadie la envidiaría.<:Pandagalleta:992627521583591455>","La vida te dará limones. ¿Qué harás con ellos? ¡No, no me los tires a mi!<:Cry:992567243022020778>","Hoy te irá de maravilla. Pero mañana tu mala suerte se multiplicará por dos.<:Pandatonto:992626945139425361>","Después de que te golpees el meñique con la esquina de ese mueble, tu mala suerte se levantará.<:Pandatonto:992626945139425361>","Ten cuidado. El clima pronóstica abusers.<:Pandakratos:992627638092976178>","Recalculando, recalculando... No, tu suerte no va a cambiar.<:hm:992630587003261008>","Si dijo que no te quiere, no te quiere. Tu suerte cambiará día a día, pero su respuesta no.<:Cry:992567243022020778>","La buena suerte no existe, lo que existe es tu trabajo duro.<:Happy:992560664247799868>","Será mejor que te sientes, porque no hay una forma fácil de decirte que todo seguirá como está.<:hm:992630587003261008>"];
        let tusuerte = luck[Math.floor(Math.random() * luck.length)];
        let data = await luckSchema.findOne({userID: message.author.id});
        //definimos cada cuanto tiempo se puede ejecutar el comando EN MS
        let tiempo_ms =  2 * 60 * 1000 // 86400000 ms
        //comprobaciones previas
        if(tiempo_ms - (Date.now() - data.daily) > 0) {
            let tiempo_restante = duration(Date.now() - data.daily - tiempo_ms,
            {
                language: "es",
                units: ["m", "s"],
                round: true,
            })
            return message.reply(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a mirar tu suerte**`)
        }
        await luckSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
            },
            daily: Date.now()
        })
        return message.reply(tusuerte)
    }
}
