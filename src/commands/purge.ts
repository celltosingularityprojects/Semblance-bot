﻿import type { Command } from '#lib/interfaces/Semblance';
import type { Message, Snowflake, TextChannel } from 'discord.js';

export default {
  description: 'Purge a specified number of messages within a channel.',
  category: 'admin',
  usage: {
    '<channel> <number of msgs>': '',
  },
  permissionRequired: 1,
  checkArgs: args => args.length >= 2,
  run: (_client, message, args) => run(message, args),
} as Command<'admin'>;

const run = async (message: Message, args: string[]) => {
  const channelRegex = /\d{17,20}/.exec(args[0]);
  if (!channelRegex) return message.reply('The channel you specified is invalid');
  const channelId = channelRegex[0] as Snowflake;
  let purgeNum = Number.parseInt(args[1]);
  if (!purgeNum) return message.reply('That value for purge amount is invalid');
  purgeNum = purgeNum > 100 ? 100 : purgeNum;
  const channel = message.guild.channels.cache.get(channelId) as TextChannel;
  if (!channel) return message.reply('That channel doesn\'t exist in this server');

  channel.bulkDelete(purgeNum).catch(console.error);
};
