import '@babel/polyfill';
import { config } from 'dotenv';
import startStream from './reddit/commentStream';

config();
startStream();
