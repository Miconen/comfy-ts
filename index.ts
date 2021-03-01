import * as Path from "path";
global['appRoot'] = Path.resolve(__dirname);
require('dotenv').config();
if (!process.env.API_DISCORD) process.exit(1);

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_DISCORD: string
		}
	}
}

import { start } from "./controllers/StartDiscord";
start();

import { ComfyModel } from "./models/ComfyModel";
import { ComfyView } from "./views/ComfyView";
import { ComfyController } from "./controllers/ComfyController";

const App = new ComfyController(new ComfyModel(), new ComfyView());
console.log('Bot works?');