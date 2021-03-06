import type { QueriedInfoBuilder } from '#lib/interfaces/Semblance';
import { msToTime, randomColor } from '#constants/index';
import { MessageEmbed } from 'discord.js';

export const build: QueriedInfoBuilder = interaction => {
  const { client } = interaction;
  const uptime = Date.now() - client.readyTimestamp,
    duration = msToTime(uptime),
    responseTime = Date.now() - interaction.createdTimestamp,
    userAvatar = interaction.user.displayAvatarURL({ dynamic: true }),
    embed = new MessageEmbed()
      .setTitle('Latency')
      .setColor(randomColor)
      .setThumbnail(userAvatar)
      .setDescription(
        `**Bot Response Time:** \`${responseTime}ms\`\n **API**: \`${Math.round(
          client.ws.ping,
        )}ms\` \n **Bot Uptime:** \`${duration}\``,
      )
      .setFooter(`Why do this to me ${interaction.user.tag}`, userAvatar);
  return { embeds: [embed] };
};
