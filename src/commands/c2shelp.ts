import { Message, MessageEmbed } from 'discord.js';
import { randomColor, subcategoryList } from '#constants/index';
import { currentLogo } from '#config';
import type { Semblance } from '#structures/Semblance';
import type { Command } from '#lib/interfaces/Semblance';

export default {
  description: 'List of all Cell to Singularity related commands',
  category: 'help',
  permissionRequired: 0,
  checkArgs: () => true,
  run: (client, message) => run(client, message),
} as Command<'help'>;

const run = async (client: Semblance, message: Message) => {
  const mainCommands = subcategoryList(client, 'game', 'main');
  const mesozoicCommands = subcategoryList(client, 'game', 'mesozoic');
  const otherCommands = subcategoryList(client, 'game', 'other');
  const embed = new MessageEmbed()
    .setTitle('**-> Cell to Singularity Commands**')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor(randomColor)
    .setThumbnail(currentLogo.name)
    .addFields([
      { name: 'Main Simulation', value: mainCommands, inline: true },
      { name: 'Mesozoic Valley', value: mesozoicCommands, inline: true },
      { name: '\u200b', value: '\u200b' },
      { name: 'Other/Extras', value: otherCommands, inline: true },
    ])
    .setFooter('C2S for the win!');
  message.channel.send({ embeds: [embed], files: [currentLogo] });
};
