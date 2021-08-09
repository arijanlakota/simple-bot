var wordArr = ["povodac","varijabla","deklaracija","dijapazon","kontradiktornost","privilegija","potrcati","znatizelja","suton"]
var pokusaji;
var randomWord;
var pomocnaLista;
module.exports = {
	name: 'play',
	aliases: false,
	description: "Play command for my game",
	cooldown: false,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        if(args[0] == "start"){
            randomWord = wordArr[Math.floor(Math.random() * 9)].split("")
            pomocnaLista = []
            for(var i =0;i < randomWord.length;i++){
                pomocnaLista.push("_")
            
            }
            pokusaji = 0;
            return msg.reply("game sterted, we choose a random word ")
        }
        if(randomWord && pokusaji <= 10 && pomocnaLista.join("") !== randomWord.join("")){
            if(args[0].length > 1){
                if(args[0] === randomWord.join("")){
                    return msg.reply("You are right,the game is over")
                }
                pokusaji++
                return msg.reply("you didn't guess right")
            }
            if(randomWord.includes(args[0])){
                for(i = 0;i<randomWord.length;i++){
                if(randomWord[i] == args[0]){
                        pomocnaLista[i] = args[0]
                    }
                }
                return msg.reply(pomocnaLista.join(" "))
                }
                pokusaji++
                return msg.reply("there is no such latter in our word")
            }
        return msg.reply("game over the word was",randomWord.join(""))
        randomWord = undefined

	}
};
