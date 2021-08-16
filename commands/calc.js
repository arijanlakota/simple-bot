module.exports = {
	name: 'calc',
	aliases: false,
	description: false,
	cooldown: 3,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
    let obim
    let povrsina
    let keyWord = args[0]
    let inputValue = parseInt(args[1])
    let inputValue2 = parseInt(args[2])
    let inputValue3 = parseInt(args[3])
    if(keyWord == "krug") {
        povrsina = Math.pow(inputValue,2)*Math.PI
        obim = 2 * inputValue*Math.PI
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
        
    } 
    else if(keyWord == "kvadrat"){
        
        povrsina = Math.pow(inputValue,2)
        obim = 4 * inputValue
        console.log(povrsina)
        console.log(obim)
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
    }  
    else if(keyWord == "trougao"){
        let a = inputValue
        let b = inputValue2
        let c = inputValue3
        let isTriangle = a + b > c && b + c > a && a + c > b
        if(!isTriangle){
            return msg.reply("Nemoguce je formirati trougao od datih duzina")
        }
        obim = a + b + c
        let s = obim / 2
        let povrsinaH = s * (s - a) * (s - b) * (s - c)
        povrsina = Math.sqrt(povrsinaH)
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
    }
    else if(keyWord == "pravougaonik"){
        povrsina = inputValue * inputValue2
        obim = 2 * (inputValue + inputValue2)
        msg.reply(`Povrsina je: ${povrsina}`)
        msg.reply(`Obim je: ${obim}`)
    }

    }
};