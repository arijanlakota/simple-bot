module.exports = {
	name: 'decipher',
	aliases: false,
	description: false,
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        var CryptoJS = require("crypto-js");
        var bytes  = CryptoJS.AES.decrypt(args[0], 'secret key 123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        msg.reply(originalText)


    }
};