import Snoowrap from 'snoowrap';
import { config } from 'dotenv';

config();

console.log('client id');
console.log(process.env.CLIENT_ID);

export default new Snoowrap({
  userAgent: 'reddit-inflation-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
});
