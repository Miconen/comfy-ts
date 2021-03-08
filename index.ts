require('./scripts/ComfyDebug');
require('dotenv').config();

import * as Path from "path";
global['appRoot'] = Path.resolve(__dirname);

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_DISCORD: string
		}
	}
}

if (!process.env['API_DISCORD']) process.exit(1);

import ComfyModel from './models/ComfyModel';
import ComfyView from './views/ComfyView';
import ComfyController from './controllers/ComfyController';

const App = new ComfyController(new ComfyModel(), new ComfyView());

import { startDiscordBot } from './controllers/StartDiscord';
if (process.env['API_DISCORD']) startDiscordBot();