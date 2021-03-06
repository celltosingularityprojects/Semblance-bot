import type { BotInfo, UserInfo, BotVotes, UserBots, Widget } from '#lib/interfaces/discords';
import type { Snowflake } from 'discord.js';
import { BaseAPI } from '#structures/BaseAPI';

/**
 * discords.com API Client for Posting stats or Fetching data
 * @example
 * import { DiscordsApi } from '#structures/DiscordsAPI';
 *
 * const api = new DiscordsApi('Your discords.com token')
 */
export class DiscordsApi extends BaseAPI {
  /**
   * Create discords.com API instance
   * @param {string} token Token or options
   */
  constructor(token: string) {
    super({ token, baseUrl: 'https://discords.com/bots/api' });
  }

  /**
   * @param {number} serverCount Server count
   * @returns {number} Passed server count
   * @example
   * await client.postStats({
   *   serverCount: 28199
   * })
   */
  async postStats(serverCount: number): Promise<number> {
    if (!serverCount) throw new Error('Missing Server Count');
    await this._request('POST', '/bot/794033850665533450', {
      server_count: serverCount,
    });
    return serverCount;
  }
  /**
   * Get bot info
   * @param {Snowflake} id Bot Id
   * @returns {BotInfo} Info for bot
   * @example
   * await client.getBot('794033850665533450') // returns bot info
   */
  async getBot(id: Snowflake): Promise<BotInfo> {
    if (!id) throw new Error('Id Missing');
    return this._request('GET', `/bot/${id}`) as Promise<BotInfo>;
  }
  /**
   * Get bot's vote info
   * @returns {BotVotes} bot's vote info
   * @example
   * await client.getVotes() // returns bot's vote info
   */
  async getVotes(): Promise<BotVotes> {
    return this._request('GET', '/bot/794033850665533450/votes') as Promise<BotVotes>;
  }
  /**
   * Get bot's widget
   * @param {Snowflake} id Bot Id
   * @param {Number} width The width of the widget
   * @param {String} theme The theme of the widget
   * @returns {Widget} the bot's widget
   * @example
   * await client.getBotWidget('794033850665533450', 480, 'dark') // returns bot's widget
   */
  async getBotWidget(id: Snowflake, width: number, theme: string): Promise<Widget> {
    if (!id) throw new Error('Id Missing');
    if (!width && !theme) return this._request('GET', `/bot/${id}/widget`) as Promise<Widget>;
    if (!width)
      return this._request('GET', `/bot/${id}/widget`, {
        theme,
      }) as Promise<Widget>;
    if (!theme)
      return this._request('GET', `/bot/${id}/widget`, {
        width,
      }) as Promise<Widget>;
  }
  /**
   * Get user info
   * @param {Snowflake} id User Id
   * @returns {UserInfo} Info for user
   * @example
   * await client.getUser('780995336293711875')
   * // =>
   * user.username // SirH
   */
  async getUser(id: Snowflake): Promise<UserInfo> {
    if (!id) throw new Error('Id Missing');
    return this._request('GET', `/user/${id}`) as Promise<UserInfo>;
  }

  /**
   * Get user's bots
   * @param {Snowflake} id User Id
   * @returns {UserBots} user's bots
   * @example
   * await client.getUserBots('780995336293711875')
   * // =>
   *
   */
  async getUserBots(id: Snowflake): Promise<UserBots> {
    if (!id) throw new Error('Id Missing');
    return this._request('GET', `/user/${id}/bots`) as Promise<UserBots>;
  }
}
