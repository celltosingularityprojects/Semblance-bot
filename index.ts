require('dotenv').config();
import 'source-map-support/register';
import 'module-alias/register';
(async () => await require(`@semblance/config`).config())()
// Semblance client
import { Semblance } from '@semblance/structures'; 
import { Intents } from 'discord.js'; 
import { interactionCreate, messageCreate, messageDelete, messageReactionAdd, messageReactionRemove, messageUpdate, ready, checkTweet,
	playerUpdate, userVote
} from '@semblance/events';
const client = new Semblance({
	disableMentions: { parse: ['users', 'roles'], repliedUser: true },
	messageCacheLifetime: 30,
	messageSweepInterval: 300,
	partials: [ "USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE" ],
	intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES ]
});
// express routing
import * as express from 'express';
import { Request, Response } from 'express';
const app = express();
// Database connection import
import { connect } from 'mongoose';
import { Afk, Game, Information, Jump, Leaderboard, Reminder, Report, UserData, Votes } from '@semblance/models';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listen to client events
interactionCreate(client);
messageCreate(client);
messageDelete(client);
messageReactionAdd(client);
messageReactionRemove(client);
messageUpdate(client);
ready(client);
// Listen to model events
playerUpdate(client);
userVote(client);

import router from '@semblance/src/routes';
router(app, client);

app.use((req: Request, res: Response) => res.redirect('https://officialsirh.github.io/'));

// Check for Tweet from ComputerLunch
setInterval(() => checkTweet(client), 2000);

(async () => {
	await connect(process.env.mongoDBKey, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
	await client.login(process.env.token);
	app.listen(8079);
})()

export default client;