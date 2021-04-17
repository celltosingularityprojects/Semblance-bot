const { MessageEmbed } = require('discord.js'),
	{randomColor} = require("../constants"),
	{ currentLogo, sharks } = require('../config').default;

module.exports = {
	description: "Get info on sharks.",
	category: 'game',
	usage: {
		"": ""
	},
	permissionRequired: 0,
	checkArgs: (args) => args.length >= 0
}

module.exports.run = async (client, message, args) => {
	let embed = new MessageEmbed()
	.setTitle("Sharks")
	.setColor(randomColor)
	.attachFiles([sharks, currentLogo])
	.setImage(sharks.name)
	.setThumbnail(currentLogo.name)
	.setDescription("There are six sharks within the game that can be unlocked every 14 days until all of them have been unlocked, which takes 84 days to unlock all of them and by unlocking them all, you'll gain the achievement, \"Shark Week\".\n They're unlocked in this order: \n" +
					"1. Leopard Shark \n 2. Whale Shark \n 3. Tiger Shark \n 4. Great White \n 5. Hammerhead \n 6. **MEGALODON!!**");
	message.channel.send(embed);
}