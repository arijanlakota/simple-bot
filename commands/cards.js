let cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
let playArr
module.exports = {
	name: 'karte',
	aliases: false,
	description: false,
	cooldown: false,
	guildOnly: true,
	args:true,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        function sum(arr){
            let sum = 0
            for(let i =0 ; i< arr.length;i++){
                switch(arr[i]){
                    case "A":
                        arr[i] = 1
                        break
                    case "J":
                        arr[i] = 11
                        break
                    case "Q":
                        arr[i] = 12
                        break
                    case "K":
                        arr[i] = 13
                        break    
                }
                sum += arr[i]
            }
            return sum
        }
        let action = args[0]
        let compArr = []
        let probability
        if(action == "start"){
            playArr = []
            playArr.push(cards[Math.floor(Math.random() * cards.length)])
            compArr.push(cards[Math.floor(Math.random() * cards.length)])
            msg.reply(playArr)
        }
        if(action == "add" && playArr.length){
            playArr.push(cards[Math.floor(Math.random() * cards.length)])
            if(Math.random() < 0.4){
                probability = 0
            }
            else{
                probability = 1
            }
            if(probability){
                compArr.push(cards[Math.floor(Math.random() * cards.length)]) 
            }
            msg.reply([...playArr])
        }
        if(action == "submit" && playArr.length){
            while(sum(compArr) < 16){
                compArr.push(cards[Math.floor(Math.random() * cards.length)]) 
            }
            if( (sum(playArr) > 21 && sum(compArr) > 21) || (sum(playArr)==  sum(compArr))){
                msg.reply(compArr)
                msg.reply("Nereseno je")

            }
            else if(sum(playArr) > 21 && sum(compArr) <= 21){
                msg.reply(compArr)
                msg.reply("izgubili ste.Mozete ponovo pokrenuti igru")
            }
            else if(21 - sum(playArr) < 21 - sum(compArr)){
                msg.reply(compArr)
            }
            else{
                msg.reply(compArr)
                msg.reply("Kompjuter je pobedio")
            }
            playArr = undefined
        }
        
    }
};