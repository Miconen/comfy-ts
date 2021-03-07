require('./scripts/init');
require('./scripts/ComfyDebug');

import ComfyModel from './models/ComfyModel';
import ComfyView from './views/ComfyView';
import ComfyController from './controllers/ComfyController';

const App = new ComfyController(new ComfyModel(), new ComfyView());

import { startDiscordBot } from './controllers/StartDiscord';
if (process.env.API_DISCORD) startDiscordBot();