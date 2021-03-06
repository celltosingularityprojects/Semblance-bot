import type { QueriedInfoBuilder } from '#lib/interfaces/Semblance';
import { randomColor, prefix } from '#constants/index';
import { MessageEmbed } from 'discord.js';

export const build: QueriedInfoBuilder = interaction => {
  const { client } = interaction;
  const embed = new MessageEmbed()
    .setTitle('Vote')
    .setColor(randomColor)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(
      [
        '**Rewardable voting sites**',
        `[Top.gg](https://top.gg/bot/${client.user.id})`,
        '[Discordbotlist.com](https://discordbotlist.com/bots/semblance)',
        `[Discords.com](https://discords.com/bots/bot/${client.user.id})`,
        `[Discord.boats](https://discord.boats/bot/${client.user.id})`,
        '**Unrewardable voting sites**',
        `[Botlist.space](https://botlist.space/bot/${client.user.id})`,
        '**Unvotable sites**',
        `[Discord.bots.gg](https://discord.bots.gg/bots/${client.user.id})`,
      ].join('\n'),
    ) // Old Semblance Id: 668688939888148480
    .setFooter(
      `Thanks, ${interaction.user.tag}, for considering to support my bot through voting, you may also support me with ${prefix}patreon :D`,
      interaction.user.displayAvatarURL(),
    );
  return { embeds: [embed] };
};
