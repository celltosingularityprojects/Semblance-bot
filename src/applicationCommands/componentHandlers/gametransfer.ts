import { ButtonData } from '#lib/interfaces/Semblance';
import { MessageComponentInteraction, MessageEmbed } from 'discord.js';
import { gameTransferPages } from '#constants/commands';
import config from '#config';
const { currentLogo } = config;

export const run = async (interaction: MessageComponentInteraction, { action, id }: ButtonData) => {
  const message = interaction.message;
  const embed = message.embeds[0] as MessageEmbed;
  let currentPage = gameTransferPages.indexOf(embed.image.url);

  if (action == 'right') currentPage = currentPage == 4 ? 0 : ++currentPage;
  else if (action == 'left') currentPage = currentPage == 0 ? 4 : --currentPage;

  embed
    .setThumbnail(currentLogo.name)
    .setImage(gameTransferPages[currentPage])
    .setDescription(`Step ${currentPage + 1}:`);
  await interaction.update({ embeds: [embed] });
};
