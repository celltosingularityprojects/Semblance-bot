import type { Subcategory } from '#lib/interfaces/Semblance';
import type {
  ColorResolvable,
  GuildMember,
  MessageActionRow,
  MessageButton,
  MessageComponentInteraction,
  RoleResolvable,
  Snowflake,
  User,
} from 'discord.js';
import { Permissions } from 'discord.js';
import type { Semblance } from '../structures';

export const prefix = 's!';
//export const prefix = '@Semblance ';

export const getAvatar = (user: User) => {
  const avatarType = user.avatar.startsWith('a_') ? `${user.avatar}.gif` : `${user.avatar}.png`;
  return `https://cdn.discordapp.com/avatars/${user.id}/${avatarType}?size=4096`;
};
export const insertionsort = (list: [Snowflake, number][]) => {
  for (let i = 0; i < list.length; i++) {
    const curItem = list[i];
    let curIndex = i - 1;
    while (curIndex >= 0 && curItem[1] > list[curIndex][1]) {
      list[curIndex + 1] = list[curIndex];
      curIndex--;
    }
    list[curIndex + 1] = curItem;
  }
  return list;
};
export const quickSort = (list: [Snowflake, number][], left: number, right: number) => {
  let index: number;
  if (list.length > 1) {
    index = partition(list, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(list, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(list, index, right);
    }
  }
  return list;
};
const swap = (list: [Snowflake, number][], leftIndex: number, rightIndex: number) => {
  const temp = list[leftIndex];
  list[leftIndex] = list[rightIndex];
  list[rightIndex] = temp;
  return list;
};
const partition = (list: [Snowflake, number][], left: number, right: number) => {
  // eslint-disable-next-line prefer-const
  let pivot = list[Math.floor((right + left) / 2)][1],
    i = left,
    j = right;
  while (i <= j) {
    while (list[i][1] > pivot) {
      i++;
    }
    while (list[j][1] < pivot) {
      j--;
    }
    if (i <= j) {
      swap(list, i, j);
      i++;
      j--;
    }
  }
  return i;
};
export const filterAction = (components: MessageActionRow[], action: string) =>
  components.map(c => {
    c.components = (c.components as MessageButton[]).filter(b => eval(`(${b.customId})`).action != action);
    return c;
  });
export const subcategoryList = (client: Semblance, category: string, subcategory: Subcategory) =>
  Object.keys(client.commands)
    .filter(key => client.commands[key].category == category && client.commands[key].subcategory == subcategory)
    .map(key => `**\`${prefix}${key}\`**`)
    .join(', ');
export const emojis = {
  tick: '✅',
  cross: '❌',
  buffer: '⏳',
  entropy: '<:entropy:742748357163745413>',
  idea: '<:idea:775808337303437353>',
  c2s: '<:CellToSing:498910740200161280>',
  darwinium: '<:darwinium:742748359781122169>',
  metabitOG: '<:metabitOG:724684027419951177>',
  metabit: '<:metabit:789526514524880906>',
  mutagen: '<:mutagen:742748361852977184>',
  fossil: '<:fossil:742748364625543239>',
  trexBadge: '<:Dino_Gold:667471422334959619>',
  trexSkull: '<:trex_skull:657015647359860767>',
  singularity: '<:singularity:789526513812504617>',
  nanobotUp: '<:NanobotUp:764149893937102858>',
  nanobotDown: '<:NanobotDown:764149995032412180>',
  darkMatter: '<:darkMatter:808445570078867496>',
  stardust: '<:stardust:808445612013518868>',
  energy: '<:energy:808445587803471922>',
  sentience: '<:sentience:808445599078809670>',
};
export const addableEmojis = [
  '<:entropy:742748357163745413>',
  '<:idea:775808337303437353>',
  '<:darwinium:742748359781122169>',
  '<:metabit:789526514524880906>',
  '<:mutagen:742748361852977184>',
  '<:fossil:742748364625543239>',
  '<:Dino_Gold:667471422334959619>',
  '<:Dino_Bronze:667471174766428160>',
  '<:Dino_Silver:667471406950514688>',
  '<:trex_skull:657015647359860767>',
  '<:singularity:789526513812504617>',
  '<:NanobotUp:764149893937102858>',
  '<:NanobotDown:764149995032412180>',
  '<:darkMatter:808445570078867496>',
  '<:stardust:808445612013518868>',
  '<:energy:808445587803471922>',
  '<:sentience:808445599078809670>',
];
export const emojiSnowflakes = {
  entropy: '742748357163745413',
  idea: '775808337303437353',
  c2s: '498910740200161280',
  darwinium: '742748359781122169',
  metabitOG: '724684027419951177',
  metabit: '789526514524880906',
  mutagen: '742748361852977184',
  fossil: '742748364625543239',
  trexBadge: '667471422334959619',
  trexSkull: '657015647359860767',
  singularity: '789526513812504617',
  nanobotUp: '764149893937102858',
  nanobotDown: '764149995032412180',
  darkMatter: '808445570078867496',
  stardust: '808445612013518868',
  energy: '808445587803471922',
  sentience: '808445599078809670',
};
export const messageLinkRegex =
  /https?:\/\/(?:canary\.|ptb\.)?discord(?:app)?\.com\/channels\/(?<guildId>@me|\d{17,19})?\/(?<channelId>\d{17,20})\/(?<messageId>\d{17,20})/g;
export const attachmentLinkRegex =
  /https?:\/\/(?:cdn\.)?discord(?:app)?\.com\/attachments\/\d{17,19}\/\d{17,20}\/(?<name>\w*\W*)(?:\.png|\.jpg|\.jpeg|\.webp|\.gif)/i;
export const customIdRegex =
  /(?<!.){command:'[a-z]{3,20}',action:'([a-z]|\d){1,20}(-([a-z]|\d){1,20})?',id:'\d{17,20}'(,page:\d{1,3})?}(?!.)/;
export const properCustomIdRegex =
  /(?<!.){"command":"[a-z]{3,20}","action":"([a-z]|\d){1,20}(-([a-z]|\d){1,20})?","id":"\d{17,20}"(,"page":\d{1,3})?}(?!.)/;
export const timeInputRegex =
  /(?:(?<months>\d{1,2})mo )?(?:(?<weeks>\d{1,2})w )?(?:(?<days>\d{1,2})d )?(?:(?<hours>\d{1,2})h )?(?:(?<minutes>\d{1,2})m)?/;
export const timeInputAutocompleteAssistantRegex =
  /(?:\d{1,2}(?<previousInputType>mo|w|d|h|m) )?(?<numInput>\d{1,2})(?![\s\S])/;
export const trelloLinkRegex = /https:\/\/trello\.com\/c\/([0-9]|[A-Z]){8}/i;
export const onlyUnique = (value: unknown, index: number, self: unknown[]) => self.indexOf(value) == index;
export const parseArgs = (_arguments: string) =>
  (_arguments.match(/"[^"]+"|[^ ]+/g) ?? []).map(argument =>
    argument.startsWith('"') && argument.endsWith('"') ? argument.slice(1).slice(0, -1) : argument,
  );
export const lockMessage = (user: User) => `👮 👮 ***CHANNEL IS LOCKED BY ${user}*** 👮 👮`;
export const formattedDate = (ms: number) => `<t:${Math.floor(ms / 1000)}:F>`;
export const timeInputToMs = (months: number, weeks: number, days: number, hours: number, minutes: number) => {
  let ms = 0;
  ms += months * 30 * 24 * 60 * 60 * 1000;
  ms += weeks * 7 * 24 * 60 * 60 * 1000;
  ms += days * 24 * 60 * 60 * 1000;
  ms += hours * 60 * 60 * 1000;
  ms += minutes * 60 * 1000;
  return ms;
};
export const msToTime = (ms: number) => {
  const days = Math.floor(ms / 86400000); // 24*60*60*1000
  const daysms = ms % 86400000; // 24*60*60*1000
  const hours = Math.floor(daysms / 3600000); // 60*60*1000
  const hoursms = ms % 3600000; // 60*60*1000
  const minutes = Math.floor(hoursms / 60000); // 60*1000
  const minutesms = ms % 60000; // 60*1000
  const sec = Math.floor(minutesms / 1000);

  let str = '';
  if (days) str = str + days + 'd';
  if (hours) str = str + hours + 'h';
  if (minutes) str = str + minutes + 'm';
  if (sec) str = str + sec + 's';

  return str;
};
export const roles = {
  admin: Permissions.FLAGS.ADMINISTRATOR,
  exec: Permissions.FLAGS.MANAGE_GUILD,
  srmod: Permissions.FLAGS.MENTION_EVERYONE,
  mod: Permissions.FLAGS.MANAGE_CHANNELS,
  jrmod: Permissions.FLAGS.MANAGE_ROLES,
  helper: Permissions.FLAGS.MANAGE_MESSAGES,
  duty: Permissions.FLAGS.MUTE_MEMBERS,
};
export const c2sRoles = {
  dev: '493796775132528640' as RoleResolvable,
  realityExperts: '499316778426433538' as RoleResolvable,
  martianCouncil: '535129309648781332' as RoleResolvable,
  betaTester: '564870410227679254' as RoleResolvable,
  CouncilOverseer: '567039914294771742' as RoleResolvable,
  monthlyContestWinner: '643528653883441203' as RoleResolvable,
  paleontologist: '657305968442474502' as RoleResolvable,
  serverBooster: '660930089990488099' as RoleResolvable,
  muted: '718796622867464198' as RoleResolvable,
  alumniDev: '739233828064722965' as RoleResolvable,
  fanArtist: '762382937668714528' as RoleResolvable,
  serverEvents: '776980182070067211' as RoleResolvable,
  eventOrganizer: '778927954763841546' as RoleResolvable,
  caniforms: '808580036022108202' as RoleResolvable,
  feliforms: '808580140262359041' as RoleResolvable,
};
export const cellChannels = [
  '488478893586645004', // cells-chat
  '496430259114082304', // share-your-prestige
  '511658545280712726', // suggestions
  '545344551095894028', // beta
  '694901423732686878', // cells-art
  '506940509441490947', // general
  '567042187443961858', // memes
  '751513380413505618', // semblance
  '706852533393686581', // bot-room
  '807324470615605308', // international
  '573912366509457411', // español
  '547455179302109186', // polski
  '547452339179487249', // pyccкий
  '547456263546601523', // deutsch
  '547523244371214336', // français
  '575377407750438912', // português
  '658077773138493464', // türkçe
];
export const sirhChannels = [
  '794054989529874493', // general
  '794054989529874494', // memes
  '794054989529874495', // suggestions
  '794054989529874496', // bug-reports
  '794054989529874497', // bot-room
  '794054989529874500', // voice-chat
];
export const getPermissionLevel = function (member: GuildMember) {
  try {
    if ('506458497718812674' === member.user.id || member.user.id == '780995336293711875') return 7;
    // Aditya, SirH //RIP SirH OG: "279080959612026880" === member.user.id // SirH#4297
    if (member.permissions.has(roles.admin)) return 6; // admin
    if (member.permissions.has(roles.exec)) return 5; // exec
    if (member.permissions.has(roles.srmod)) return 4; // sr.mod
    if (member.permissions.has(roles.mod)) return 3; // mod
    if (member.permissions.has(roles.jrmod)) return 2; // jr.mod
    if (member.permissions.has(roles.helper)) return 1; // helper
    return 0; // normal user
  } catch {
    return 0;
  }
};
class RandomColor {
  static get randomColor() {
    let red = Math.floor(Math.random() * 256),
      green = Math.floor(Math.random() * 256),
      blue = Math.floor(Math.random() * 256);
    while (red < 100 || green < 100 || blue < 100) {
      if (red < 100) {
        red += Math.floor(Math.random() * 100);
      }
      if (green < 100) {
        green += Math.floor(Math.random() * 100);
      }
      if (blue < 100) {
        blue += Math.floor(Math.random() * 100);
      }
    }
    const redString = red.toString(16),
      greenString = green.toString(16),
      blueString = blue.toString(16);
    return ('#' + redString + greenString + blueString) as ColorResolvable;
  }
}
export const randomColor = RandomColor.randomColor;

export const disableAllComponents = (interaction: MessageComponentInteraction) => {
  (interaction.message.components as MessageActionRow[]).forEach(component =>
    component.components.forEach(comp => comp.setDisabled(true)),
  );
  return interaction.channel.messages.edit(interaction.message.id, {
    components: interaction.message.components as MessageActionRow[],
  });
};
// Command related functions and constants
export { gameTransferPages, correctReportList, bugChannels, serversPerPage, guildBookPage } from '#constants/commands';
export { bigToName, nameToScNo, checkValue } from '#constants/largeNumberConversion';
