module.exports = {
	name: 'math',
	aliases: false,
	description: false,
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        const a = args[0]
        const b = args[2]
        const zbir = parseInt(a)+parseInt(b);
        const razlika = parseInt(a)-parseInt(b);
        const proizvod = parseInt(a)*parseInt(b);
        const kolicnik = parseInt(a)/parseInt(b);
		switch(args[1]){
            case "+":
            msg.reply("The result is :" +zbir)
            break
            case "-":
            msg.reply("The result is :" + razlika)
            break
            case "*":
            msg.reply("The result is :" + proizvod)
            break
            case "/":
            msg.reply("The result is :" + kolicnik)
            break
                
        }
	}
};