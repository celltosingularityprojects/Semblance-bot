import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import type { Message } from 'discord.js';
import { randomColor } from '#constants/index';
import { currentLogo } from '#config';
import { Information } from '#models/Information';
import type { Command } from '#lib/interfaces/Semblance';

export default {
  description: 'get all of the ingame codes',
  category: 'game',
  subcategory: 'other',
  permissionRequired: 0,
  checkArgs: () => true,
  run: (_client, message) => run(message),
} as Command<'game'>;

const run = async (message: Message) => {
  const codeHandler = await Information.findOne({ infoType: 'codes' });
  const embed = new MessageEmbed()
    .setTitle('Darwinium Codes')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor(randomColor)
    .setThumbnail(currentLogo.name)
    .setDescription(codeHandler.info)
    .setFooter(codeHandler.footer);
  const component = new MessageActionRow().addComponents([
    new MessageButton()
      .setCustomId(
        JSON.stringify({
          command: 'codes',
          action: 'expired',
          id: message.author.id,
        }),
      )
      .setLabel('View Expired Codes')
      .setStyle('PRIMARY'),
  ]);
  message.channel.send({
    embeds: [embed],
    files: [currentLogo],
    components: [component],
  });
};
