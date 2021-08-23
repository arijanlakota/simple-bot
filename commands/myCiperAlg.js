module.exports = {
	name: 'cp',
	aliases: false,
	description: "My algorithm for encrypting",
	cooldown: 5,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        console.log("pozvano")
        var argsarr = (args.join()).split("") 
        var tinylet = "abcdefghijklmnopqrstuvwxyz "
        var biglet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
        var alphabet = tinylet.split("")
        var alphabetBig = biglet.split("")
        var results = []
        var cipherStr = ""
        for(var i = 0;i < argsarr.length;i++){
            if(alphabet.includes(argsarr[i])){
                results.push((alphabet.indexOf(argsarr[i]) + 1)  *   (i + 1))
            }
            else if(alphabetBig.includes(args[i])){
                results.push((alphabetBig.indexOf(argsarr[i]) + 1)  *   (i + 1))
            }
        }
        for(var j = 0;j < results.length;j++){
            cipherStr += String.fromCharCode(results[j])
        }
        msg.reply(cipherStr)
        
    }
};