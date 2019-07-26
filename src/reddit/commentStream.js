import { CommentStream } from 'snoostorm';
import client from './redditClient';

const streamOptions = { subreddit: 'testingground4bots', limit: 10, pollTime: 10000 };

const comments = new CommentStream(client, streamOptions);

export default () => {
  comments.on('item', (item) => {
    console.log(item);
    if (item.link_author === 'heythisispaul') {
      console.log('replyingg...');
      item.reply('Hey there my dude');
    }
  });
};
