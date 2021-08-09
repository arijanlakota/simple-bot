module.exports = {
	name: 'come-back',
	aliases: false,
	description: "My algorithm for decrypting",
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        var argsarr = args[0].split("")
        var tinylet = "abcdefghijklmnopqrstuvwxyz "
        var biglet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
        var alphabet = tinylet.split("")
        var cipherStr = ""
        var index = 0
        for(var i = 0;i < argsarr.length;i++){
            cipherStr += alphabet[(argsarr[i].charCodeAt(index) / (i + 1)) - 1]
        }
        msg.reply(cipherStr)


    

    }
};