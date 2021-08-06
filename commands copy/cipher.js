module.exports = {
	name: 'cipher',
	aliases: false,
	description: false,
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        var cryptoJS = require("crypto-js")
        var enText = cryptoJS.AES.encrypt(args,'secret key 123').toString()
        msg.reply(enText);


    }
};