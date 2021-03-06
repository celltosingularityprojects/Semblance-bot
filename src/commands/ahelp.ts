import type { Message } from 'discord.js';
import type { Semblance } from '#structures/Semblance';
import { MessageEmbed } from 'discord.js';
import { prefix, randomColor } from '#constants/index';
import type { Command } from '#lib/interfaces/Semblance';

export default {
  description: 'Gives a list of all available admin commands.',
  category: 'help',
  permissionRequired: 1,
  checkArgs: () => true,
  run: (client, message) => run(client, message),
} as Command<'help'>;

const run = async (client: Semblance, message: Message) => {
  const adminCommands = Object.keys(client.commands)
    .filter(key => client.commands[key].category == 'admin')
    .map(key => `**\`${prefix}${key}\`**`);
  const embed = new MessageEmbed()
    .setColor(randomColor)
    .setTitle('**-> Admin Commands**')
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(adminCommands.join(', '));
  message.channel.send({ embeds: [embed] });
};
