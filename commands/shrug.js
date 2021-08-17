module.exports = {
	name: 'shrug',
	aliases: false,
	description: false,
	cooldown: 5,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        msg.reply(String.fromCharCode(175,92,95,40,12484,41,95,47,175));  
        
    }
};