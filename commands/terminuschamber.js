const { MessageEmbed } = require('discord.js'), {randomColor} = require('../constants'),
    { currentLogo, terminusChamber } = require('../config').default;

module.exports = {
    description: "Details on how to obtain each node within the Terminus Chamber",
    category: 'game',
    subcategory: 'main',
    usage: {
        "": ""
    },
    permissionRequired: 0,
    aliases: ['terminus', 'chamber'],
    checkArgs: (args) => args.length >= 0
}

module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
        .setTitle("Terminus Chamber")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor(randomColor)
        .attachFiles([currentLogo, terminusChamber])
        .setThumbnail(currentLogo.name)
        .setImage(terminusChamber.name)
        .setDescription(['**Yellow Cube** - ||Explore the Mesozoic Valley||',
            '**Purple Cube** - ||Unlock Singularity for the first time||',
            '**Light Pink Cube** - ||Unlock the human brain||',
            '**Light Blue Cube** - ||Obtain/Evolve Neoaves||',
            '**Blue Cube** - ||Unlock Cetaceans||',
            '**Lime Green Cube** - ||Unlock Crocodilians||',
            '**Orange Cube** - ||Unlock Feliforms||',
            '**Red Cube** - ||Terraform Mars||'].join('\n'));
    message.channel.send(embed);
}
