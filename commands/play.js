var wordArr = ["povodac","varijabla","deklaracija","dijapazon",
"kontradiktornost","privilegija","potrcati","znatizelja","suton","developer","satirican","vodolija","impresionizam","instrumentarijum",
"balada","transedentalno","vitamini","nagovestaj","proporcija","kantautor","pozamasan","natalitet","centrafor","lansirati"]
var pokusaji;
var randomWord;
var pomocnaLista;
var players = {}
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
        var userId = msg.author.id
        if(args[0] == "start"){
            randomWord = wordArr[Math.floor(Math.random() * wordArr.length)].split("")
            pomocnaLista = []
            for(var i =0;i < randomWord.length;i++){
                pomocnaLista.push(" . ")
            
            }
            pokusaji = 0;
            players[userId] = {x:randomWord,y:pomocnaLista,z:pokusaji}
            return msg.reply("game sterted, we choose a random word ")
        }
        if(players[userId].x && players[userId].z <= 12 && players[userId].x.join("") !== players[userId].y.join){
            if(args[0].length > 1){
                if(args[0] === players[userId].x.join("")){
                    return msg.reply("You are right,the game is over")
                }
                players[userId].z++
                return msg.reply("you didn't guess right")
            }
            if(players[userId].x.includes(args[0])){
                for(i = 0;i<players[userId].x.length;i++){
                if(players[userId].x[i] == args[0]){
                        pomocnaLista[i] = args[0]
                    }
                }
                return msg.reply(players[userId].y.join(" "))
                }
                players[userId].z++
                return msg.reply("there is no such latter in our word")
            }
        return msg.reply("game over the word was",players[userId].x.join(""))
        players[userId] = undefined

	}
};
